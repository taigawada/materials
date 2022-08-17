<template>
    <div class="smooth-picker_base" :style="smoothPickerStyles(null)">
        <div class="smooth-picker_select_rect" :style="smoothPickerStyles(null)"></div>
        <span class="smooth-picker_suffix-text">{{ suffix }}</span>
        <div ref="insideContent" class="smooth-picker-box">
            <div class="smooth-picker-roll">
                <div
                    v-for="(item, index) in showInsideItems"
                    :key="String(item) + '|' + String(index)"
                    :style="smoothPickerStyles(index)"
                    class="smooth-picker_item calcScale"
                >
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, watchEffect, watch, onMounted, toRefs } from 'vue-demi';
import { useScroll } from '@vueuse/core';

export default defineComponent({
    name: 'SimpleSmoothPicker',
    props: {
        items: {
            type: Array as PropType<string[] | number[]>,
            required: true,
        },
        selected: {
            type: [String, Number],
            default: undefined,
            required: false,
        },
        suffix: {
            type: String,
            default: undefined,
            required: false,
        },
        width: {
            type: String,
            default: '80px',
            required: false,
        },
        itemContentHeight: {
            type: Number,
            default: 40,
            required: false,
        },
        distanceToDisplay: {
            type: Number,
            default: 800,
            required: false,
        },
        whichSide: {
            type: String as PropType<'left' | 'right' | 'center' | undefined>,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        const showInsideItems = ref<(string | number | null)[]>([]);
        const insideContent = ref<HTMLElement | null>(null);
        const { y, isScrolling } = useScroll(insideContent);
        const centerShowIndex = ref<number>(0);
        // propsのitemが更新されると最初と最後にnullが二つずつ挿入される
        watchEffect(() => {
            showInsideItems.value = [null, null, ...props.items, null, null];
        });
        // マウント後、初期値の位置までスクロールする
        onMounted(() => {
            const scrollQuantity = props.items.findIndex((elm) => props.selected === elm) * props.itemContentHeight;
            insideContent.value?.scrollTo(0, scrollQuantity);
        });
        // selectedの値が変わったときに、その時点でスクロールされていなければその位置までスクロールする
        const { selected } = toRefs(props);
        watch(selected, () => {
            const scrollQuantity = props.items.findIndex((elm) => props.selected === elm) * props.itemContentHeight;
            if (!isScrolling.value) {
                insideContent.value?.scrollTo(0, scrollQuantity);
            }
        });
        // スクロールが行われた時、最も中心に近い値がエミットされる
        watch(y, () => {
            if (
                y.value % props.itemContentHeight < 5 &&
                y.value > -1 &&
                props.items.length * props.itemContentHeight > y.value
            ) {
                const selectIndex = (y.value / props.itemContentHeight) | 0;
                centerShowIndex.value = selectIndex;
                context.emit('change', props.items[selectIndex]);
            }
        });
        function smoothPickerStyles(ownIndex: number | null) {
            let result = undefined;
            if (ownIndex) {
                result =
                    1 -
                    Math.abs(y.value - (ownIndex - 2) * props.itemContentHeight) ** 2 /
                        (props.itemContentHeight * props.distanceToDisplay);
            }
            let isLeft = true;
            let isRight = true;
            if (props.whichSide === 'center') {
                isLeft = false;
                isRight = false;
            } else if (props.whichSide === 'left') {
                isLeft = true;
                isRight = false;
            } else if (props.whichSide === 'right') {
                isLeft = false;
                isRight = true;
            }
            return {
                '--smooth-picker-content-width': props.width,
                '--smooth-picker-box-height': `calc(${props.itemContentHeight}px * 5)`,
                '--smooth-picker-item-height': props.itemContentHeight + 'px',
                '--contraction-ratio': result,
                '--border-left': isLeft ? '7px' : '0',
                '--border-right': isRight ? '7px' : '0',
            };
        }
        return {
            showInsideItems,
            centerShowIndex,
            insideContent,
            smoothPickerStyles,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.smooth-picker_base {
    position: relative;
    display: inline-block;
    height: var(--smooth-picker-box-height);
    width: var(--smooth-picker-content-width);
}
.smooth-picker-box {
    scroll-snap-type: y;
    position: relative;
    display: inline-block;
    overflow: scroll;
    height: 100%;
    width: 100%;
}
.smooth-picker-box::-webkit-scrollbar {
    display: none;
}
.smooth-picker-roll {
    display: flex;
    flex-flow: column;
}
.smooth-picker_select_rect {
    position: absolute;
    height: var(--smooth-picker-item-height);
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(60, 130, 214, 0.1);
    border-top-right-radius: var(--border-right);
    border-bottom-right-radius: var(--border-right);
    border-top-left-radius: var(--border-left);
    border-bottom-left-radius: var(--border-left);
    border-top: 1.5px solid $selected;
    border-bottom: 1.5px solid $selected;
    border-right: calc(var(--border-right) * 0.21) solid $selected;
    border-left: calc(var(--border-left) * 0.21) solid $selected;
}

.smooth-picker_suffix-text {
    position: absolute;
    width: auto;
    right: $space-3;
    top: 50%;
    transform: translateY(-50%);
    cursor: default;
}
.smooth-picker_item {
    scroll-snap-align: start;
    line-height: var(--smooth-picker-item-height);
    font-size: $font-size-6;
    min-height: var(--smooth-picker-item-height);
    cursor: default;
}
.calcScale {
    font-size: calc($font-size-6 * var(--contraction-ratio));
    opacity: var(--contraction-ratio);
}
</style>
