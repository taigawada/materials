import './SimpleToast.scss';

import { defineComponent, ref, toRefs, watch, h, isVue3, onMounted } from 'vue-demi';
import { nextFrame } from '@/utils/useAccordionAnimation';
import SimpleIcon from '../SimpleIcon';

import { CloseCross } from '@simple-education-dev/icons';

export default defineComponent({
    props: {
        active: {
            type: Boolean,
            required: true,
        },
        duration: {
            type: Number,
            default: 3000,
            required: false,
        },
        content: {
            type: String,
            default: 'SimpleToast',
            required: true,
        },
        error: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    setup(props, context) {
        const toastRef = ref<HTMLElement | null>(null);

        onMounted(() => {
            if (!isVue3) {
                // @ts-ignore
                toastRef.value = context.refs.toastRef;
            }
        });
        const { active } = toRefs(props);
        const sleep = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));
        const isAnimating = ref(false);
        const isCancelled = ref(false);
        context.expose({ isAnimating, isCancelled });
        const dismissAnimation = async () => {
            if (toastRef.value) {
                isAnimating.value = true;
                toastRef.value.style.top = '100vh';
                await sleep(200);
                toastRef.value.style.display = 'none';
                isAnimating.value = false;
            }
        };
        watch(active, () => {
            if (active && !isAnimating.value) {
                if (toastRef.value) {
                    isAnimating.value = true;
                    toastRef.value.style.display = 'inline-flex';
                    nextFrame(async () => {
                        if (toastRef.value) {
                            toastRef.value.style.top = '90vh';
                            await sleep(props.duration);
                            dismissAnimation();
                        }
                    });
                }
            }
        });
        return () =>
            h(
                'div',
                {
                    ref: isVue3 ? toastRef : 'toastRef',
                    class: [{ simple_toast__base: true, simple_toast__base_error: props.error }],
                },
                [
                    h('span', { class: [{ simple_toast__content_text: true }] }, props.content),
                    h(SimpleIcon, {
                        source: CloseCross,
                        size: '16px',
                        fill: 'rgba(255, 255, 255, 1',
                        clickable: true,
                        onClick: async () => {
                            isCancelled.value = true;
                            await dismissAnimation();
                            isCancelled.value = false;
                        },
                        on: {
                            click: async () => {
                                isCancelled.value = true;
                                await dismissAnimation();
                                isCancelled.value = false;
                            },
                        },
                    }),
                ]
            );
    },
});
