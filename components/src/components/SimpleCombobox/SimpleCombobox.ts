import { defineComponent, ref, computed, PropType, h, VNode } from 'vue-demi';
import { DeleteCross, SearchGlass, ArrowDown } from '@simple-education-dev/icons';
import SimpleInput from '../SimpleInput/SimpleInput';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
import './SimpleCombobox.scss';
export default defineComponent({
    props: {
        caption: {
            type: String,
            default: undefined,
            required: false,
        },
        placeholder: {
            type: String,
            default: undefined,
            required: false,
        },
        fieldValue: {
            type: String,
            required: true,
        },
        items: {
            type: Array as PropType<string[]>,
            required: true,
        },
        selectedItems: {
            type: Array as PropType<string[]>,
            required: true,
        },
        allowAdd: {
            type: Boolean,
            default: false,
            required: false,
        },
        multiple: {
            type: Boolean,
            default: false,
            required: false,
        },
        search: {
            type: Boolean,
            default: true,
            required: false,
        },
        remove: {
            type: Boolean,
            default: false,
            required: false,
        },
        floatBoxHeight: {
            type: String,
            default: '180px',
            required: false,
        },
    },
    setup(props, context) {
        const isFocus = ref(false);
        const isEntered = ref(false);
        const currentSelect = ref('');
        const onChangeSelect = (item: string, bool: boolean | undefined) => {
            currentSelect.value = item;
            let selectedItemsCurrent: string[] = [];
            if (bool === true) {
                selectedItemsCurrent = [...props.selectedItems, item];
            } else if (bool === false) {
                selectedItemsCurrent = props.selectedItems.filter((element: string) => {
                    return element !== item;
                });
            } else {
                selectedItemsCurrent = [item];
            }
            if (!props.multiple) {
                isEntered.value = false;
            }
            context.emit('change:select', selectedItemsCurrent);
        };
        const addItem = (item: string) => {
            isEntered.value = false;
            if (!props.multiple) {
                context.emit('remove');
            }
            context.emit('add:item', item);
        };
        const fieldChange = (value: string) => {
            context.emit('fieldChange', value);
        };
        const fieldRemove = () => {
            context.emit('remove');
        };
        const filtered = computed(() => {
            if (props.search) {
                const regExpEscape = (str: string) => {
                    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
                };
                const sccapeString = regExpEscape(props.fieldValue);
                return props.items?.filter((item: string) => {
                    return new RegExp(sccapeString.toLowerCase()).test(item.toLowerCase());
                });
            } else {
                return props.items;
            }
        });
        const includeItem = (item: string) => {
            return props.selectedItems.indexOf(item) !== -1;
        };
        const currentSelectItem = (item: string) => {
            return currentSelect.value === item && props.selectedItems.indexOf(item) !== -1;
        };
        const mouseleave = () => {
            isEntered.value = false;
        };
        const mousedown = () => {
            isEntered.value = true;
        };
        const inFocus = () => {
            isFocus.value = true;
        };
        const outFocus = () => {
            isFocus.value = false;
        };
        const enteredItemRef = ref<number | null>(null);
        const mouseenterItem = (index: number) => {
            enteredItemRef.value = index;
        };
        const mouseleaveItem = () => {
            enteredItemRef.value = null;
        };
        const enteredItem = (index: number) => {
            return enteredItemRef.value === index;
        };
        const floatBoxHeightStyle = () => ({
            '--float-box-height': props.floatBoxHeight,
        });
        const inputNode = () => {
            const showIcon = isEntered.value || isFocus.value;
            return h(SimpleInput, {
                caption: props.caption,
                placeholder: props.placeholder,
                value: props.fieldValue,
                remove: props.remove,
                icon: showIcon ? SearchGlass : ArrowDown,
                props: {
                    caption: props.caption,
                    placeholder: props.placeholder,
                    value: props.fieldValue,
                    remove: props.remove,
                },
                'onChange:value': fieldChange,
                onFocusin: inFocus,
                onFocusout: outFocus,
                onRemove: fieldRemove,
                on: {
                    'change:value': fieldChange,
                    focusin: inFocus,
                    focusout: outFocus,
                    remove: fieldRemove,
                },
            });
        };
        const itemsNode = (): VNode[] =>
            filtered.value.map((item, index) => {
                return h(
                    'div',
                    {
                        key: item,
                        class: [
                            {
                                checkedItem: includeItem(item),
                                currentSelect: currentSelectItem(item),
                                enteredItem: enteredItem(index),
                            },
                        ],
                        onMouseenter: () => mouseenterItem(index),
                        onMouseleave: mouseleaveItem,
                        on: {
                            mouseenter: () => mouseenterItem(index),
                            mouseleave: mouseleaveItem,
                        },
                    },
                    [
                        h(SimpleCheckbox, {
                            class: [{ simple_combobox__item: true }],
                            style: [{ display: props.multiple ? 'inline-flex' : 'none' }],
                            value: includeItem(item),
                            label: item,
                            onChange: (bool: boolean) => onChangeSelect(item, bool),
                            on: {
                                change: (bool: boolean) => onChangeSelect(item, bool),
                            },
                        }),
                        h(
                            'div',
                            {
                                class: [{ simple_combobox__item: true, non_multi_selectable: true }],
                                style: [{ display: props.multiple ? 'none' : 'block' }],
                                onClick: () => onChangeSelect(item, undefined),
                                on: {
                                    click: () => onChangeSelect(item, undefined),
                                },
                            },
                            item
                        ),
                    ]
                );
            });
        const addCustomItemNode = (): VNode => {
            const showAddItem = props.allowAdd && props.fieldValue.length > 0 && !includeItem(props.fieldValue);
            return h(
                'div',
                {
                    class: [{ simple_combobox__add_newvalue: true }],
                    style: [{ display: showAddItem ? 'flex' : 'none' }],
                    onClick: () => addItem(props.fieldValue),
                    on: {
                        click: () => addItem(props.fieldValue),
                    },
                },
                [
                    h(SimpleIcon, {
                        class: [{ simple_combobox__add_icon: true }],
                        source: DeleteCross,
                        size: '16px',
                        props: {
                            source: DeleteCross,
                            size: '16px',
                        },
                    }),
                    h(
                        'div',
                        {
                            class: [{ simple_combobox__item: true, non_multi_selectable: true }],
                        },
                        '"' + props.fieldValue + '"を追加'
                    ),
                ]
            );
        };
        const floatBoxNode = () => {
            if (isEntered.value || isFocus.value) {
                return h(
                    'div',
                    {
                        class: [{ simple_combobox__float_box: true }],
                        style: [floatBoxHeightStyle()],
                    },
                    [...itemsNode(), addCustomItemNode()]
                );
            }
        };
        return () =>
            h(
                'div',
                {
                    onMousedown: mousedown,
                    onMouseleave: mouseleave,
                    on: {
                        mousedown: mousedown,
                        mouseleave: mouseleave,
                    },
                },
                [inputNode(), floatBoxNode()]
            );
    },
});
