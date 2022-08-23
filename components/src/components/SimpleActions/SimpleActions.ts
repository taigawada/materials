import { defineComponent, ref, onMounted, PropType, h, isVue3, onUpdated } from 'vue-demi';
import { ArrowDown } from '@simple-education-dev/icons';
import SimplePopover from '../SimplePopover/SimplePopover';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
import './SimpleActions.scss';
interface Actions {
    label: string;
    onAction: () => unknown;
}
export default defineComponent({
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
        const handleClose = () => {
            context.emit('close');
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
        // Vue2環境のみ、update時にrefを更新
        onMounted(() => {
            if (!isVue3) {
                activatorRef.value = refs.activatorRef;
            }
        });
        onUpdated(() => {
            if (!isVue3) {
                activatorRef.value = refs.activatorRef;
            }
        });
        const popoverContentNode = props.actions.map((action) => {
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
        });
        const popover = () => {
            return h(
                SimplePopover,
                {
                    open: props.open,
                    activatorRef: activatorRef,
                    props: {
                        open: props.open,
                        activatorRef: activatorRef,
                    },
                    onClose: handleClose,
                    on: {
                        close: handleClose,
                    },
                },
                isVue3 ? () => popoverContentNode : popoverContentNode
            );
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
