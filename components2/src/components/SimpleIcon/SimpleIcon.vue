<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon_base" :style="svgSize" @click="handleClick">
        <use :xlink:href="source + '#simple-education_svg_icons_base'"></use>
    </svg>
    <!-- <img :src="`data:image/svg+xml;utf8,${source}`" alt="" aria-hidden="true" class="svg-icon_base" :style="svgSize" /> -->
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
export default defineComponent({
    props: {
        // eslint-disable-next-line vue/require-prop-types
        source: {
            default: undefined,
            required: true,
        },
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
        console.log(props.source);
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
    color: aqua;
}
.close-button {
    fill: none;
    stroke: rgba(44, 62, 80, 1);
    stroke-width: 40;
    stroke-linecap: round;
    stroke-miterlimit: 10;
}
</style>
