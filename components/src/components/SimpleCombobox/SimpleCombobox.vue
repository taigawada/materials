<template>
    <div @mousedown="mousedown" @mouseleave="mouseleave">
        <SimpleInput
            :caption="caption"
            :value="fieldValue"
            :remove="remove"
            :placeholder="placeholder"
            @change:value="fieldChange"
            @focusIn="inFocus"
            @focusOut="outFocus"
            @remove="fieldRemove"
        >
        </SimpleInput>
        <div v-if="isEntered || isFocus" class="simple-combobox_float-box" :style="floatBoxHeightStyle()">
            <div
                v-for="(item, index) in filtered"
                :key="item + index"
                class="simple-combobox_entered_item"
                :class="{
                    checkedItem: includeItem(item),
                    currentSelect: currentSelectItem(item),
                    enteredItem: enteredItem(index),
                }"
                @mouseenter="mouseenterItem(index)"
                @mouseleave="mouseleaveItem"
            >
                <SimpleCheckbox
                    v-if="multiple"
                    class="simple-combobox_item"
                    :value="includeItem(item)"
                    :label="item"
                    @change="(bool) => onChangeSelect(item, bool)"
                />
                <div
                    v-if="!multiple"
                    class="simple-combobox_item non-multi-selectable"
                    @click="onChangeSelect(item, undefined)"
                >
                    {{ item }}
                </div>
            </div>
            <div
                v-show="allowAdd && fieldValue.length > 0 && !includeItem(fieldValue)"
                class="simple-combobox_entered_item simple-combobox_add-newvalue"
                @click="addItem(fieldValue)"
            >
                <DeleteCross class="simple-combobox_add-icon" />
                <div class="simple-combobox_item non-multi-selectable">"{{ fieldValue }}"を追加</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, ref, computed, PropType } from 'vue-demi';
import { DeleteCross, SearchGlass } from '@simple-education-dev/icons';
import SimpleInput from '../SimpleInput/SimpleInput.vue';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox.vue';
export default defineComponent({
    components: {
        DeleteCross,
        SearchGlass,
        SimpleInput,
        SimpleCheckbox,
    },
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
            console.log('on');
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
            context.emit('change', selectedItemsCurrent);
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
        const includeItem = computed(() => (item: string) => {
            return props.selectedItems.indexOf(item) !== -1;
        });
        const currentSelectItem = computed(() => (item: string) => {
            return currentSelect.value === item && props.selectedItems.indexOf(item) !== -1;
        });
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
        return {
            isFocus,
            isEntered,
            onChangeSelect,
            addItem,
            fieldChange,
            fieldRemove,
            filtered,
            includeItem,
            currentSelectItem,
            mouseleave,
            mousedown,
            inFocus,
            outFocus,
            enteredItemRef,
            mouseenterItem,
            mouseleaveItem,
            enteredItem,
            floatBoxHeightStyle,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-combobox_float-box {
    display: block;
    position: relative;
    box-sizing: border-box;
    background: $surface;
    width: 100%;
    height: var(--float-box-height);
    border-radius: $border-radius-1;
    border: 1px solid $surface;
    box-shadow: $boxshadow;
    overflow: scroll;
    text-align: left;
}
.enteredItem {
    background: $hovered;
}
.checkedItem {
    background: $checked-alpha;
}
.currentSelect {
    width: calc(100% - 3px);
    border: 1px solid $checked;
    border-radius: 5px;
}
.simple-combobox_item {
    margin-left: $space-3;
}
.non-multi-selectable {
    cursor: pointer;
    text-align: left;
    padding: $space-3 0;
}
.simple-combobox_add-newvalue {
    padding-left: $space-4;
    display: flex;
    align-items: center;
}
.simple-combobox_add-icon {
    width: 16px;
    height: 16px;
    fill: $surface-black;
    transform: rotate(45deg);
}
</style>
