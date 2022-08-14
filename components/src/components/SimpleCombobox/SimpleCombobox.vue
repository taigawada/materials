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
        <div v-if="isEntered || isFocus" class="float-box">
            <div
                v-for="(item, index) in filtered"
                :key="item + index"
                class="enteredItem"
                :class="{
                    checkedItem: includeItem(item),
                    currentSelect: currentSelectItem(item),
                }"
            >
                <SimpleCheckbox
                    v-if="multiple"
                    class="items"
                    :value="includeItem(item)"
                    :label="item"
                    @change="(bool) => onChangeSelect(item, bool)"
                />
                <div v-if="!multiple" class="items non-multi-selectable" @click="onChangeSelect(item, undefined)">
                    {{ item }}
                </div>
            </div>
            <div
                v-show="allowAdd && fieldValue.length > 0 && !includeItem(fieldValue)"
                class="enteredItem add"
                @click="addItem(fieldValue)"
            >
                <DeleteCross class="add-icon" />
                <div class="items non-multi-selectable">"{{ fieldValue }}"を追加</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, ref, computed, PropType } from 'vue-demi';
import { DeleteCross } from '@simple-education/icons';
import SimpleInput from '../SimpleInput/SimpleInput.vue';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox.vue';
export default defineComponent({
    components: {
        DeleteCross,
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
            context.emit('change:selected', selectedItemsCurrent);
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
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.float-box {
    display: block;
    position: relative;
    box-sizing: border-box;
    background: $surface;
    width: 100%;
    height: 180px;
    border-radius: 7px;
    border: 1px solid #efefef;
    box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.2);
    overflow: scroll;
}
.enteredItem:hover {
    background: rgba(0, 0, 0, 0.05);
}
.checkedItem {
    background: rgba(60, 130, 214, 0.1);
}
.currentSelect {
    width: calc(100% - 3px);
    border: 1px solid #3c82d6;
    border-radius: 5px;
}
.items {
    margin-left: 10px;
}
.non-multi-selectable {
    cursor: pointer;
    text-align: left;
    padding: 10px 0;
}
.add {
    padding-left: 16px;
    display: flex;
    align-items: center;
}
.add-icon {
    width: 16px;
    height: 16px;
    fill: $surface-black;
    transform: rotate(45deg);
}
</style>
