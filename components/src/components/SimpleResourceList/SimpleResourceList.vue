<template>
    <div class="simple-resource-list_container">
        <table class="simple-resource-list_base">
            <tr class="simple-resource-list_header-row">
                <th class="simple-resource-list_header">
                    <SimpleCheckbox
                        class="simple-resource-list_checkbox"
                        :indeterminate="indeterminateRef"
                        size="20px"
                        :value="bulkCheckBox"
                        @change="handleBulkCheckBoxChange"
                    ></SimpleCheckbox>
                </th>
                <th v-show="selectedItems.length === 0">
                    <div class="simple-resource-list_slot-data" :style="rowStyles()">
                        <slot name="header"></slot>
                    </div>
                </th>
                <td v-show="selectedItems.length > 0" class="simple-resource-list_slot-data-label-wrapper">
                    <SimpleStack distribution="left">
                        <template #default="style">
                            <div class="simple-resource-list_select-info" :style="style.spacing">
                                <span class="simple-resource-list_select-info-text">
                                    {{ selectedItems.length }}件のデータを選択中
                                </span>
                            </div>
                            <div
                                v-if="mainAction !== undefined"
                                class="simple-resource-list_bulk-main-action"
                                :style="style.spacing"
                            >
                                <SimpleButton plain @click="mainAction.onAction">{{ mainAction.label }}</SimpleButton>
                            </div>
                            <div
                                v-show="multiActions !== undefined"
                                class="simple-resource-list_bulk-multi-actions"
                                :style="style.spacing"
                            >
                                <SimpleButton plain @click="handleBulkButtonClick">その他の操作</SimpleButton>
                                <div v-if="bulkPopoverOpen" ref="bulkMultiAction" class="simple-resource-list_popover">
                                    <div
                                        v-for="(action, index) in multiActions"
                                        :key="action.label + index"
                                        class="simple-resource-list_action-content"
                                        @click="action.onAction"
                                    >
                                        {{ action.label }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </SimpleStack>
                </td>
            </tr>
            <tr
                v-for="(item, index) in items"
                :key="'item' + index"
                class="simple-resource-list_row"
                @click="handleClickRow(index, $event)"
            >
                <td class="simple-resource-list_check-column">
                    <SimpleCheckbox
                        ref="itemCheckBox"
                        class="simple-resource-list_checkbox"
                        size="20px"
                        :value="isSelected(item.id)"
                        @change="(bool) => handleItemCheckedChange(bool, item.id)"
                    ></SimpleCheckbox>
                </td>
                <td>
                    <div class="simple-resource-list_slot-data" :style="rowStyles()">
                        <slot name="data" class="simple-resource-list_slot" :item="item"></slot>
                    </div>
                </td>
            </tr>
        </table>
        <div class="padding-elemet"></div>
        <slot name="pagination"></slot>
    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, ref, watchEffect, PropType } from 'vue-demi';
import { onClickOutside } from '@vueuse/core';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox.vue';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
import SimpleStack from '../SimpleStack/SimpleStack.vue';
interface ItemClickFunc {
    (arg0: number): void;
}
interface Actions {
    label: string;
    onAction: () => unknown;
}
export default defineComponent({
    components: { SimpleCheckbox, SimpleButton, SimpleStack },
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
        // trクリックでチェックボックスを操作する
        // checkboxとtrが同時押しできないようにクリックイベントを監視
        const itemCheckBox = ref();
        const handleClickRow = (index: number, event: Event) => {
            if (typeof props.onClickItem === 'undefined') {
                if (!itemCheckBox.value[index].$el.contains(event.target as HTMLElement)) {
                    itemCheckBox.value[index].hundleChange();
                }
            } else {
                props.onClickItem(index);
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
        const bulkMultiAction = ref();
        const closeActions = (event: Event) => {
            if (!bulkMultiAction.value.contains(event.target as HTMLElement)) {
                bulkPopoverOpen.value = false;
            }
        };
        watchEffect(() => {
            if (bulkPopoverOpen.value === true) {
                onClickOutside(bulkMultiAction, (event) => closeActions(event));
            }
        });
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
        return {
            itemCheckBox,
            handleClickRow,
            bulkCheckBox,
            indeterminateRef,
            handleBulkCheckBoxChange,
            bulkMultiAction,
            bulkPopoverOpen,
            handleBulkButtonClick,
            isSelected,
            handleItemCheckedChange,
            rowStyles,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-resource-list_container {
    display: inline-block;
    width: 100%;
    padding-bottom: $border-radius-2;
    background: $surface;
    border-radius: $border-radius-2;
}
.padding-elemet {
    height: 10px;
}
.simple-resource-list_base {
    width: 100%;
    height: calc(100% - 100px);
    display: table;
    border-collapse: collapse;
}
.simple-resource-list_header-row {
    height: 50px;
}
.simple-resource-list_row {
    border-top: 1px solid $border-weak;
    cursor: pointer;
}
.simple-resource-list_row:hover {
    background: $hovered;
}
.simple-resource-list_header {
    width: 40px;
    position: relative;
    vertical-align: top;
}
.simple-resource-list_slot-data-label-wrapper {
    text-align: left;
}
.simple-resource-list_popover::before {
    content: '';
    border: 10px solid transparent;
    border-bottom: 10px solid $surface;
    position: absolute;
    top: -20px;
    left: 20%;
    transform: translateX(-50%);
}
.simple-resource-list_select-info-text {
    font-size: $font-size-3;
}
.simple-resource-list_popover {
    position: absolute;
    display: inline-block;
    width: auto;
    height: auto;
    margin-top: 10px;
    background: $surface;
    box-shadow: rgba(15, 26, 38, 0.04) 0px 2px 20px 0px, rgba(15, 26, 38, 0.08) 0px 8px 32px 0px;
    border-radius: $border-radius-1;
}
.simple-resource-list_action-content {
    font-size: $font-size-3;
    margin: $space-1;
    padding: $space-2;
    cursor: pointer;
}
.simple-resource-list_action-content:hover {
    background: $hovered;
}
.simple-resource-list_check-column {
    position: relative;
    vertical-align: top;
}
.simple-resource-list_slot-data {
    display: grid;
    align-items: center;
    grid-template-rows: var(--child-item-height);
    grid-template-columns: var(--child-item-weights);
}
.simple-resource-list_slot-data div {
    font-size: $font-size-6;
}
.simple-resource-list_checkbox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
