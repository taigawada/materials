import { defineComponent, ref, PropType, h } from 'vue-demi';
import './SimpleTabs.scss';
interface Tab {
    id: string;
    label: string;
}
export default defineComponent({
    props: {
        tabs: {
            type: Array as PropType<Tab[]>,
            required: true,
        },
        selected: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    setup(props, context) {
        const hundleSelect = (index: number) => {
            context.emit('change', index);
        };
        const isEntered = ref<number | undefined>(undefined);
        const mouseenter = (index: number) => {
            isEntered.value = index;
        };
        const mouseleave = () => {
            isEntered.value = undefined;
        };
        const tabEnteredNode = (index: number) => {
            if (isEntered.value === index && isEntered.value !== props.selected) {
                return h('div', { class: [{ simple_tabs__entered: true }] });
            }
        };
        const tabSelectedNode = (index: number) => {
            if (props.selected === index) {
                return h('div', { class: [{ simple_tabs__selected: true }] });
            }
        };
        const tabsNode = () =>
            props.tabs.map((tab, index) => {
                return h(
                    'div',
                    {
                        class: [{ simple_tabs__tab_block: true }],
                        key: tab.id,
                        onMouseenter: () => mouseenter(index),
                        onMouseleave: mouseleave,
                        onClick: () => hundleSelect(index),
                        on: {
                            mouseenter: () => mouseenter(index),
                            mouseleave: mouseleave,
                            click: () => hundleSelect(index),
                        },
                    },
                    [
                        h(
                            'span',
                            {
                                class: [
                                    {
                                        simple_tabs__entered_text:
                                            isEntered.value === index && isEntered.value !== props.selected,
                                    },
                                ],
                            },
                            tab.label
                        ),
                        tabSelectedNode(index),
                        tabEnteredNode(index),
                    ]
                );
            });
        return () => h('div', { class: [{ simple_tabs__base: true }] }, tabsNode());
    },
});
