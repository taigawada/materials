import { defineComponent, ref, onMounted, PropType, h, isVue3, onUpdated } from 'vue-demi';
import { ArrowDown } from '@simple-education-dev/icons';
import { onClickOutside } from '@vueuse/core';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
import './SimpleActions.scss';
interface Actions {
    label: string;
    onAction: () => unknown;
}
export default defineComponent({
    components: {
        SimpleIcon,
    },
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        actions: {
            type: Array as PropType<Actions[]>,
            required: true,
        },
    },
    setup(props, context) {
        // @ts-ignore
        const refs = context.refs;
        const onClick = () => {
            context.emit('click:activator');
        };
        const isEntered = ref(false);
        const mousedown = (): void => {
            isEntered.value = true;
        };
        const mouseup = (): void => {
            isEntered.value = false;
        };
        const mouseenter = (): void => {
            isEntered.value = true;
        };
        const mouseleave = (): void => {
            isEntered.value = false;
        };
        const activatorRef = ref<HTMLImageElement | null>(null);
        const popoverRef = ref<HTMLImageElement | null>(null);
        const closeActions = (event: Event) => {
            if (!activatorRef.value!.contains(event.target as HTMLElement)) {
                context.emit('close');
            }
        };
        onClickOutside(popoverRef, (event) => closeActions(event));
        const width = ref<number>();
        onMounted(() => {
            if (!isVue3) {
                activatorRef.value = refs.activatorRef;
            }
            const activatorRect = activatorRef.value?.getBoundingClientRect();
            width.value = activatorRect?.width;
        });
        // Vue2環境のみ、update時にrefを更新
        onUpdated(() => {
            if (!isVue3) {
                popoverRef.value = refs.popoverRef;
            }
        });
        const parentWidth = () => ({
            '--parent-width': width.value! + 'px',
        });
        const popover = () => {
            if (props.open) {
                return h(
                    'div',
                    {
                        class: { simple_action__popover: true },
                        style: [parentWidth()],
                        ref: isVue3 ? popoverRef : 'popoverRef',
                    },
                    [
                        props.actions.map((action) => {
                            return h(
                                'div',
                                {
                                    key: action.label,
                                    class: [{ simple_action__action_content: true }],
                                    on: { click: action.onAction },
                                    onClick: action.onAction,
                                },
                                action.label
                            );
                        }),
                    ]
                );
            }
        };
        return () =>
            h('div', { class: [{ simple_action__base: true }], ref: isVue3 ? activatorRef : 'activatorRef' }, [
                h(
                    'a',
                    {
                        class: [{ simple_action__activator: true, entered: isEntered.value }],
                        on: {
                            click: onClick,
                            mouseenter: mouseenter,
                            mouseleave: mouseleave,
                            mousedown: mousedown,
                            mouseup: mouseup,
                        },
                        onClick: onClick,
                        onMouseenter: mouseenter,
                        onMouseleave: mouseleave,
                        onMousedown: mousedown,
                        onMouseup: mouseup,
                    },
                    [
                        h('a', { class: { simple_action__activator_text: true } }, [
                            context.slots.default ? context.slots.default() : 'Actions',
                        ]),
                        h(SimpleIcon, { source: ArrowDown, size: '12px', props: { source: ArrowDown, size: '12px' } }),
                    ]
                ),
                popover(),
            ]);
    },
});
