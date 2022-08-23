import {
    computed,
    defineComponent,
    ref,
    h,
    PropType,
    Ref,
    watchEffect,
    isVue3,
    toRefs,
    watch,
    onMounted,
} from 'vue-demi';
import { onClickOutside } from '@vueuse/core';
import './SimplePopover.scss';

export default defineComponent({
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        activatorRef: {
            type: Object as PropType<Ref<HTMLElement | null>>,
            required: true,
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
        const activatorRect = ref<DOMRect | null>(null);
        const popoverRect = ref<DOMRect | null>(null);
        onMounted(() => {
            if (!isVue3) {
                // @ts-ignore
                popoverRef.value = context.refs.popoverRef;
                popoverRect.value = popoverRef.value!.getBoundingClientRect();
            } else {
                popoverRect.value = popoverRef.value!.getBoundingClientRect();
            }
        });
        const { activatorRef } = toRefs(props);
        watch(activatorRef, () => {
            if (activatorRef.value) {
                activatorRect.value = activatorRef.value.getBoundingClientRect();
            }
        });
        const handleClickOutside = (event: Event) => {
            // @ts-ignore
            if (!props.activatorRef.value?.contains(event.target as HTMLElement)) {
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
            if (popoverRect.value && activatorRect.value) {
                translateX = `calc(${(activatorRect.value.width - popoverRect.value.width) / 2}px - 50%)`;
            }
            if (activatorRect.value) {
                translateY = `${activatorRect.value.height}px`;
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
                [props.open ? popoverNode() : undefined]
            );
    },
});
