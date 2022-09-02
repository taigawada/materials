import { computed, defineComponent, ref, h, PropType, watchEffect, isVue3, Ref, onMounted } from 'vue-demi';
import { onClickOutside, useElementBounding } from '@vueuse/core';
import './SimplePopover.scss';

interface ActivatorRect {
    height: Ref<number>;
    bottom: Ref<number>;
    left: Ref<number>;
    right: Ref<number>;
    top: Ref<number>;
    width: Ref<number>;
    x: Ref<number>;
    y: Ref<number>;
    update: () => void;
}

export default defineComponent({
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        activatorRect: {
            type: Object as PropType<ActivatorRect | null>,
            default: null,
            required: false,
        },
        translateX: {
            type: String,
            default: undefined,
            required: false,
        },
        translateY: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        const popoverRef = ref<HTMLElement>();
        const popoverRect = useElementBounding(popoverRef);
        onMounted(() => {
            if (!isVue3) {
                // @ts-ignore
                popoverRef.value = context.refs.popoverRef;
            }
        });
        const handleClickOutside = (event: { pageX: number; pageY: number }) => {
            // @ts-ignore
            if (
                !(
                    props.activatorRect?.x.value! < event.pageX &&
                    event.pageX < props.activatorRect?.x.value! + props.activatorRect?.width.value! &&
                    props.activatorRect?.y.value! < event.pageY &&
                    event.pageY < props.activatorRect?.y.value! + props.activatorRect?.height.value!
                )
            ) {
                context.emit('close');
            }
        };
        watchEffect(() => {
            if (props.open) {
                onClickOutside(popoverRef, (e) => handleClickOutside(e));
            }
        });
        const popoverStyle = computed(() => {
            let translateX = '0px';
            let translateY = '0px';
            if (popoverRect && props.activatorRect) {
                const result = (props.activatorRect.width.value - popoverRect.width.value) / 2;
                translateX = `${result}px`;
            }
            if (props.activatorRect) {
                translateY = `${props.activatorRect.height.value}px`;
            }
            if (props.translateX !== undefined) {
                translateX = props.translateX;
            }
            if (props.translateY !== undefined) {
                translateY = props.translateY;
            }
            return {
                display: props.open ? 'inline-block' : 'none',
                transform: `translate(${translateX}, ${translateY})`,
            };
        });
        const popoverNode = () => (context.slots.default ? context.slots.default() : undefined);
        return () =>
            h(
                'div',
                {
                    ref: isVue3 ? popoverRef : 'popoverRef',
                    class: [{ simple_popover__popover: true }],
                    style: [popoverStyle.value],
                },
                [popoverNode()]
            );
    },
});
