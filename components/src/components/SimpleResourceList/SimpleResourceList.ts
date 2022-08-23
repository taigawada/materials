import { defineComponent, ref, PropType, onBeforeUpdate, onUpdated, h, isVue3, VNode, onMounted } from 'vue-demi';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox';
import SimplePopover from '../SimplePopover/SimplePopover';
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
                            activatorRef: bulkMultiActionActivator,
                            props: {
                                open: bulkPopoverOpen.value,
                                activatorRef: bulkMultiActionActivator,
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
                h('th', { class: [{ simple_resource_list__header: true }] }, [
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
                ]),
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
                        h('td', { class: [{ simple_resource_list__check_column: true }] }, [
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
                        ]),
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
        // <template>
        //     <div class="simple-resource-list_container">
        //         <table class="simple-resource-list_base">
        //             <tr class="simple-resource-list_header-row">
        //                 <th class="simple-resource-list_header">
        //                     <SimpleCheckbox
        //                         class="simple-resource-list_checkbox"
        //                         :indeterminate="indeterminateRef"
        //                         size="20px"
        //                         :value="bulkCheckBox"
        //                         @change="handleBulkCheckBoxChange"
        //                     ></SimpleCheckbox>
        //                 </th>
        //                 <th v-show="selectedItems.length === 0">
        //                     <div class="simple-resource-list_slot-data" :style="rowStyles()">
        //                         <slot name="header"></slot>
        //                     </div>
        //                 </th>
        //                 <td v-show="selectedItems.length > 0" class="simple-resource-list_slot-data-label-wrapper">
        //                     <SimpleStack distribution="left">
        //                         <template #default="style">
        //                             <div class="simple-resource-list_select-info" :style="style.spacing">
        //                                 <span class="simple-resource-list_select-info-text">
        //                                     {{ selectedItems.length }}件のデータを選択中
        //                                 </span>
        //                             </div>
        //                             <div
        //                                 v-if="mainAction !== undefined"
        //                                 class="simple-resource-list_bulk-main-action"
        //                                 :style="style.spacing"
        //                             >
        //                                 <SimpleButton plain @click="mainAction.onAction">{{ mainAction.label }}</SimpleButton>
        //                             </div>
        //                             <div
        //                                 v-show="multiActions !== undefined"
        //                                 class="simple-resource-list_bulk-multi-actions"
        //                                 :style="style.spacing"
        //                             >
        //                                 <SimpleButton plain @click="handleBulkButtonClick">その他の操作</SimpleButton>
        //                                 <div v-if="bulkPopoverOpen" ref="bulkMultiAction" class="simple-resource-list_popover">
        //                                     <div
        //                                         v-for="(action, index) in multiActions"
        //                                         :key="action.label + index"
        //                                         class="simple-resource-list_action-content"
        //                                         @click="action.onAction"
        //                                     >
        //                                         {{ action.label }}
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </template>
        //                     </SimpleStack>
        //                 </td>
        //             </tr>
        //             <tr
        //                 v-for="(item, index) in items"
        //                 :key="'item' + index"
        //                 class="simple-resource-list_row"
        //                 @click="handleClickRow(index, $event)"
        //             >
        //                 <td class="simple-resource-list_check-column">
        //                     <SimpleCheckbox
        //                         ref="itemCheckBoxes"
        //                         class="simple-resource-list_checkbox"
        //                         size="20px"
        //                         :value="isSelected(item.id)"
        //                         @change="(bool) => handleItemCheckedChange(bool, item.id)"
        //                     ></SimpleCheckbox>
        //                 </td>
        //                 <td>
        //                     <div class="simple-resource-list_slot-data" :style="rowStyles()">
        //                         <slot name="data" class="simple-resource-list_slot" :item="item"></slot>
        //                     </div>
        //                 </td>
        //             </tr>
        //         </table>
        //         <div class="padding-elemet"></div>
        //         <slot name="pagination"></slot>
        //     </div>
        // </template>
    },
});
