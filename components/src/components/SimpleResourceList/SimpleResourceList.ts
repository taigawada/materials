import { defineComponent, ref, PropType, onBeforeUpdate, onUpdated, h, isVue3, VNode, onMounted } from 'vue-demi';
import { SimpleCheckbox } from '../SimpleCheckbox';
import { SimplePopover } from '../SimplePopover';
import { useElementBounding } from '@vueuse/core';
import './SimpleResourceList.scss';
interface ItemClickFunc {
    (arg0: number): void;
}
interface Actions {
    label: string;
    onAction: () => unknown;
}
interface checkBoxRef {
    $el: HTMLElement;
    handleChange: () => void;
}
export default defineComponent({
    props: {
        items: {
            type: Array as PropType<{ id: string | number }[]>,
            default: () => [],
            required: false,
        },
        select: {
            type: Boolean,
            default: true,
            required: false,
        },
        selectedItems: {
            type: Array as PropType<(string | number)[]>,
            default: () => [],
            required: false,
        },
        mainAction: {
            type: Object as PropType<Actions>,
            default: undefined,
            required: false,
        },
        multiActions: {
            type: Array as PropType<Actions[]>,
            default: undefined,
            required: false,
        },
        height: {
            type: String,
            default: '50px',
            required: false,
        },
        weight: {
            type: Array as PropType<number[]>,
            default: () => [1],
            required: true,
        },
        onClickItem: {
            type: Function as PropType<ItemClickFunc>,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        let checkboxRefs: checkBoxRef[] = [];
        const setItemRef = (el: checkBoxRef) => {
            if (el) {
                checkboxRefs.push(el);
            }
        };
        // eslint-disable-next-line no-unused-vars
        const itemCheckBoxes = ref<checkBoxRef[]>();
        const bulkMultiActionActivator = ref();
        onBeforeUpdate(() => {
            checkboxRefs = [];
        });
        onUpdated(() => {
            if (!isVue3) {
                // @ts-ignore
                checkboxRefs = context.refs.itemCheckBoxes;
                // @ts-ignore
                bulkMultiActionActivator.value = context.refs.bulkMultiActionActivator;
            }
        });
        onMounted(() => {
            if (!isVue3) {
                // @ts-ignore
                checkboxRefs = context.refs.itemCheckBoxes;
                // @ts-ignore
                bulkMultiActionActivator.value = context.refs.bulkMultiActionActivator;
            }
        });
        const handleClickRow = (index: number, event: Event) => {
            // クリックした要素がcheckboxのDOMnodeに含まれていなければ -> checkboxのchangeイベントを発火
            if (!checkboxRefs[index].$el.contains(event.target as HTMLElement)) {
                if (typeof props.onClickItem === 'undefined') {
                    checkboxRefs[index].handleChange();
                } else {
                    props.onClickItem(index);
                }
            }
        };
        const bulkCheckBox = ref(false);
        const indeterminateRef = ref(false);
        const handleBulkCheckBoxChange = (bool: boolean) => {
            bulkCheckBox.value = bool;
            let newSelectedItems: (string | number)[] = [];
            if (bool) {
                newSelectedItems = props.items.map((item) => item.id);
            }
            indeterminateRef.value = false;
            context.emit('change', newSelectedItems);
        };
        const bulkPopoverOpen = ref(false);
        const activatorRect = useElementBounding(bulkMultiActionActivator);
        const handleBulkButtonClick = () => {
            bulkPopoverOpen.value = !bulkPopoverOpen.value;
        };
        const handleBulkButtonPopoverClose = () => {
            bulkPopoverOpen.value = false;
        };
        const isSelected = (id: string | number) => {
            return props.selectedItems.indexOf(id) !== -1;
        };
        const handleItemCheckedChange = (bool: boolean, id: string | number) => {
            const newSelectedItems = [...props.selectedItems];
            if (bool) {
                newSelectedItems.push(id);
            } else {
                newSelectedItems.splice(newSelectedItems.indexOf(id), 1);
            }
            if (props.items.length === newSelectedItems.length) {
                indeterminateRef.value = false;
                bulkCheckBox.value = true;
            } else {
                indeterminateRef.value = true;
            }
            if (newSelectedItems.length === 0) bulkCheckBox.value = false;
            context.emit('change', newSelectedItems);
        };
        const rowStyles = () => ({
            '--child-item-weights': props.weight.map((num) => num + 'fr').join(' '),
            '--child-item-height': props.height,
        });
        const mainActionNode = (): VNode | undefined => {
            if (props.mainAction !== undefined) {
                return h(
                    'span',
                    {
                        class: [{ simple_resource_list__bulk_action: true }],
                    },
                    [props.mainAction?.label]
                );
            }
        };
        const multiActionContentNode = props.multiActions?.map((action) => {
            return h(
                'div',
                {
                    key: action.label,
                    class: [{ simple_resource_list__action_content: true }],
                    onClick: action.onAction,
                    on: { click: action.onAction },
                },
                action.label
            );
        });
        const multiActionNode = (): VNode | undefined => {
            const multiActionShow = props.multiActions !== undefined ? 'block' : 'none';
            return h(
                'div',
                {
                    style: [{ display: 'inline-flex' }],
                    ref: isVue3 ? bulkMultiActionActivator : 'bulkMultiActionActivator',
                },
                [
                    h(
                        'div',
                        {
                            class: [{ simple_resource_list__bulk_action: true }],
                            style: [{ display: multiActionShow }],
                            plain: true,
                            size: 9,
                            props: { plain: true, size: 9 },
                            onClick: handleBulkButtonClick,
                            on: { click: handleBulkButtonClick },
                        },
                        'その他の操作'
                    ),
                    h(
                        SimplePopover,
                        {
                            open: bulkPopoverOpen.value,
                            activatorRect: activatorRect,
                            props: {
                                open: bulkPopoverOpen.value,
                                activatorRect: activatorRect,
                                translateX: '-45px',
                            },
                            onClose: handleBulkButtonPopoverClose,
                            on: {
                                close: handleBulkButtonPopoverClose,
                            },
                        },
                        isVue3 ? () => multiActionContentNode : multiActionContentNode
                    ),
                ]
            );
        };
        const SelectedHeaderNode = () => {
            if (props.selectedItems.length !== 0) {
                return h('td', { class: [{ simple_resource_list__slot_data_label_wrapper: true }] }, [
                    h(
                        'div',
                        {
                            class: [{ simple_resource_list__header_actions: true }],
                        },
                        [
                            h(
                                'span',
                                {
                                    class: [{ simple_resource_list__select_info_text: true }],
                                },
                                props.selectedItems.length + '件のデータを選択中'
                            ),
                            mainActionNode(),
                            multiActionNode(),
                        ]
                    ),
                ]);
            } else {
                return h('th', [
                    h(
                        'div',
                        {
                            class: [{ simple_resource_list__slot_data: true }],
                            style: [rowStyles()],
                        },
                        context.slots.header ? context.slots.header() : ''
                    ),
                ]);
            }
        };
        const headerRowNode = (): VNode =>
            h('tr', { class: [{ simple_resource_list__header_row: true }] }, [
                /* eslint-disable */
                props.select
                    ? h('th', { class: [{ simple_resource_list__header: true }] }, [
                          h(SimpleCheckbox, {
                              class: [{ simple_resource_list__checkbox: true }],
                              indeterminate: indeterminateRef.value,
                              size: '20px',
                              value: bulkCheckBox.value,
                              props: {
                                  indeterminate: indeterminateRef.value,
                                  size: '20px',
                                  value: bulkCheckBox.value,
                              },
                              onChange: handleBulkCheckBoxChange,
                              on: {
                                  change: handleBulkCheckBoxChange,
                              },
                          }),
                      ])
                    : undefined,
                /* eslint-enable */
                [SelectedHeaderNode()],
            ]);
        const dataRowNode = (): VNode[] =>
            props.items.map((item, index) => {
                return h(
                    'tr',
                    {
                        class: [{ simple_resource_list__row: true }],
                        onClick: (event: Event) => handleClickRow(index, event),
                        on: {
                            click: (event: Event) => handleClickRow(index, event),
                        },
                    },
                    [
                        /* eslint-disable */
                        props.select
                            ? h('td', { class: [{ simple_resource_list__check_column: true }] }, [
                                  // @ts-ignore (todo -> 型エラーの原因探す)
                                  h(SimpleCheckbox, {
                                      key: item.id,
                                      ref: isVue3 ? setItemRef : 'itemCheckBoxes',
                                      refInFor: true,
                                      class: [{ simple_resource_list__checkbox: true }],
                                      value: isSelected(item.id),
                                      size: '20px',
                                      props: {
                                          value: isSelected(item.id),
                                          size: '20px',
                                      },
                                      onChange: (bool: boolean) => handleItemCheckedChange(bool, item.id),
                                      on: {
                                          change: (bool: boolean) => handleItemCheckedChange(bool, item.id),
                                      },
                                  }),
                              ])
                            : undefined,
                        /* eslint-enable */
                        h(
                            'td',
                            { class: [{ simple_resource_list__slot_data: true }], style: [rowStyles()] },
                            /* eslint-disable */
                            context.slots.data
                                ? context.slots.data({
                                      class: [{ simple_resource_list__slot: true }],
                                      item: item,
                                      props: { item: item },
                                  })
                                : undefined
                            /* eslint-enable */
                        ),
                    ]
                );
            });
        const tableNode = () =>
            h('table', { class: [{ simple_resource_list__base: true }] }, [headerRowNode(), dataRowNode()]);
        return () =>
            h('div', { class: [{ simple_resource_list__container: true }] }, [
                tableNode(),
                h('div', { class: [{ padding__elemet: true }] }),
                context.slots.pagination ? context.slots.pagination() : undefined,
            ]);
    },
});
