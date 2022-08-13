<template>
    <div ref="insideContent" class="smooth-picker-base">
        <div
            class="smooth-picker-roll"
            @mouseenter="handleEnter"
            @mousedown="handleStart"
            @mousemove="handleMove"
            @mouseup0="handleEnd"
            @mouseleave="handleCancel"
        >
            <div v-for="(item, index) in items" :key="String(item) + String(index)">
                {{ item }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, reactive, watchEffect, onMounted } from 'vue-demi';
import { useScroll } from '@vueuse/core';

export default defineComponent({
    props: {
        items: {
            type: Array as PropType<string[] | number[]>,
            default: () => [...Array(100).keys()],
            required: false,
        },
    },
    setup() {
        const insideContent = ref<HTMLElement | null>(null);
        const dragInfo = reactive({
            isTouchable: 'ontouchstart' in window,
            isMouseDown: false,
            isEnter: false,
            isDragging: false,
            groupIndex: null,
            startPageY: null,
        });
        const { directions } = useScroll(insideContent);
        watchEffect(() => {
            if (dragInfo.isEnter === true) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
        });
        onMounted(() => {
            if (insideContent.value?.scrollTop !== undefined) {
                insideContent.value.scrollTop = 450000;
            }
        });
        const handleEnter = () => {
            dragInfo.isEnter = true;
        };
        const handleStart = () => {
            if (!dragInfo.isTouchable) {
                dragInfo.isMouseDown = true;
            }
        };
        const handleMove = () => {
            if (dragInfo.isTouchable || dragInfo.isMouseDown) {
                dragInfo.isDragging = true;
            }
        };
        const handleEnd = () => {
            dragInfo.isDragging = false;
            dragInfo.isMouseDown = false;
        };
        const handleCancel = () => {
            dragInfo.isEnter = false;
            if (dragInfo.isTouchable || dragInfo.isMouseDown) {
                dragInfo.isMouseDown = false;
                dragInfo.isDragging = false;
            }
        };
        const handleScroll = () => {
            console.log('aaa');
            console.log(window.scrollY);
        };
        return {
            insideContent,
            handleEnter,
            handleStart,
            handleMove,
            handleEnd,
            handleCancel,
            handleScroll,
        };
    },
});
</script>
<style scoped lang="scss">
.smooth-picker-base {
    display: inline-block;
    width: 200px;
    height: 100px;
    overflow: scroll;
}
.smooth-picker-roll {
    display: flex;
    flex-flow: column;
    height: 100px;
}
.smooth-picker-base::-webkit-scrollbar {
    display: none;
}
</style>
