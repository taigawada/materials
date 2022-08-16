<template>
    <div class="simple-stack_base" :style="styles">
        <slot :spacing="spacingStyle()"></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue-demi';

export default defineComponent({
    props: {
        spacing: {
            type: String,
            default: '5px',
            required: false,
        },
        vertical: {
            type: Boolean,
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
            '--flex-direction-wrap': `${props.vertical ? 'column' : 'row'} ${props.wrap ? 'wrap' : 'nowrap'}`,
        }));
        const spacingStyle = () => {
            if (props.vertical) {
                return { margin: `${props.spacing} 0` };
            } else {
                return { margin: `0 ${props.spacing}` };
            }
        };
        return {
            styles,
            spacingStyle,
        };
    },
});
</script>
<style scoped lang="scss">
.simple-stack_base {
    display: inline-flex;
    flex-flow: var(--flex-direction-wrap);
    align-items: var(--align-items);
    justify-content: var(--justify-content);
}
</style>
