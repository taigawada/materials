<template>
    <div class="stack-base" :style="styles">
        <slot :style="spacingStyle"></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api';

export default defineComponent({
    props: {
        spacing: {
            type: String,
            default: '5px',
            required: false,
        },
        alignment: {
            type: String as PropType<'lower' | 'center' | 'upper'>,
            default: 'center',
            required: false,
        },
        distribution: {
            type: String as PropType<'left' | 'center' | 'right' | 'spaceBetween' | 'spaceAround'>,
            default: 'center',
            required: false,
        },
        wrap: {
            type: Boolean,
            required: false,
        },
    },
    setup(props) {
        const alignment = () => {
            switch (props.alignment) {
                case 'center':
                    return 'center';
                case 'upper':
                    return 'flex-start';
                case 'lower':
                    return 'flex-end';
            }
        };
        const distribution = () => {
            switch (props.distribution) {
                case 'left':
                    return 'start';
                case 'center':
                    return 'center';
                case 'right':
                    return 'flex-end';
                case 'spaceBetween':
                    return 'space-between';
                case 'spaceAround':
                    return 'space-around';
            }
        };
        const styles = computed(() => ({
            '--align-items': alignment(),
            '--justify-content': distribution(),
            wrap: props.wrap ? 'wrap' : 'no-wrap',
        }));
        const spacingStyle = () => ({
            margin: `0 ${props.spacing}`,
        });
        return {
            styles,
            spacingStyle,
        };
    },
});
</script>
<style scoped lang="scss">
.stack-base {
    display: inline-flex;
    align-items: var(--align-items);
    justify-content: var(--justify-content);
}
</style>
