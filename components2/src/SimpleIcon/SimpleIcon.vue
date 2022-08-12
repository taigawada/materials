<template>
    <div class="svg-icon_base" :style="svgSize" @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" :width="size" :height="size">
            <g :fill="color">
                <slot></slot>
            </g>
        </svg>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
export default defineComponent({
    props: {
        color: {
            type: String,
            default: 'rgba(44, 62, 80, 1)',
            required: false,
        },
        size: {
            type: String,
            default: '16px',
            required: false,
        },
    },
    setup(props, context) {
        const handleClick = () => {
            context.emit('click');
        };
        const svgSize = computed(() => ({
            '--svg--icon_size': props.size,
        }));
        return { svgSize, handleClick };
    },
});
</script>
<style>
.svg-icon_base {
    width: var(--svg--icon_size);
    height: var(--svg--icon_size);
}
.close-button {
    fill: none;
    stroke: rgba(44, 62, 80, 1);
    stroke-width: 40;
    stroke-linecap: round;
    stroke-miterlimit: 10;
}
</style>
