<template>
    <div class="smooth-picker-base" :style="smoothPickerStyles(null)">
        <div class="smooth-picker_select_rect" :style="smoothPickerStyles(null)"></div>
        <span class="smooth-picker-suffix-text">{{ suffix }}</span>
        <div ref="insideContent" class="smooth-picker-box">
            <div class="smooth-picker-roll">
                <div
                    v-for="(item, index) in showInsideItems"
                    :key="String(item) + String(index)"
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
import { defineComponent, ref, PropType, watchEffect } from 'vue-demi';
import { useScroll } from '@vueuse/core';

export default defineComponent({
    name: 'SimpleSmoothPicker',
    props: {
        items: {
            type: Array as PropType<string[] | number[]>,
            default: () => [...Array(60).keys()],
            required: false,
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
        itemContetHeight: {
            type: Number,
            default: 30,
            required: false,
        },
        distanceToDisplay: {
            type: Number,
            default: 500,
            required: false,
        },
        whichSide: {
            type: String as PropType<'left' | 'right' | undefined>,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        const showInsideItems = ref<(string | number | null)[]>([]);
        const insideContent = ref<HTMLElement | null>(null);
        const { y } = useScroll(insideContent);
        const centerShowIndex = ref<number>(0);
        watchEffect(() => {
            showInsideItems.value = [null, null, ...props.items, null, null];
        });
        watchEffect(() => {
            const scrollQuantity = Math.max(props.items.findIndex((elm) => props.selected === elm) * props.itemContetHeight, 0);
            insideContent.value?.scrollTo(0, scrollQuantity);
        });
        watchEffect(() => {
            if (y.value % props.itemContetHeight < 5 && y.value > -1 && props.items.length * props.itemContetHeight > y.value) {
                const selectIndex = (y.value / props.itemContetHeight) | 0;
                centerShowIndex.value = selectIndex;
                context.emit('change', props.items[selectIndex]);
            }
        });
        function smoothPickerStyles(ownIndex: number | null) {
            let result = undefined;
            if (ownIndex) {
                result =
                    1 -
                    Math.abs(y.value - (ownIndex! - 2) * props.itemContetHeight) ** 2 / (props.itemContetHeight * props.distanceToDisplay);
            }
            const isLeft = props.whichSide === 'left';
            const isRight = props.whichSide === 'right';
            return {
                '--smooth-picker-content-width': props.width,
                '--smooth-picker-box-height': `calc(${props.itemContetHeight}px * 5)`,
                '--smooth-picker-item-height': props.itemContetHeight + 'px',
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
.smooth-picker-base {
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
    background: $surface-black-alpha;
    border-top-right-radius: var(--border-right);
    border-bottom-right-radius: var(--border-right);
    border-top-left-radius: var(--border-left);
    border-bottom-left-radius: var(--border-left);
}

.smooth-picker-suffix-text {
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
