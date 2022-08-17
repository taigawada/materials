<template>
    <div class="resource-item_base" :style="weightStyles()">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue-demi';
export default defineComponent({
    props: {
        item: {
            type: Object as PropType<any>,
            default: () => {},
            required: false,
        },
        height: {
            type: String,
            default: '50px',
            required: false,
        },
        weight: {
            type: Array as PropType<number[]>,
            default: () => [],
            required: true,
        },
    },
    setup(props) {
        const weightStyles = () => ({
            '--child-item-weights': props.weight.map((num) => num + 'fr').join(' '),
            '--child-item-height': props.height,
        });
        return {
            weightStyles,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.resource-item_base {
    display: grid;
    align-items: center;
    grid-template-rows: var(--child-item-height);
    grid-template-columns: var(--child-item-weights);
}
.resource-item_base div {
    font-size: $font-size-6;
}
</style>
