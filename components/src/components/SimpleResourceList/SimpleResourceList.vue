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
                        @change="handleBuldCheckBoxChange"
                    ></SimpleCheckbox>
                </th>
                <th>
                    <div class="simple-resource-list_slot-data" :style="rowStyles()">
                        <slot name="header"></slot>
                    </div>
                </th>
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
    </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, ref, PropType } from 'vue-demi';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox.vue';
interface ItemClickFunc {
    (arg0: number): void;
}
export default defineComponent({
    components: { SimpleCheckbox },
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
        const handleBuldCheckBoxChange = (bool: boolean) => {
            bulkCheckBox.value = bool;
            let newSelectedItems: (string | number)[] = [];
            if (bool) {
                newSelectedItems = props.items.map((item) => item.id);
            }
            indeterminateRef.value = false;
            context.emit('change', newSelectedItems);
        };
        const isSelected = (id: string | number) => {
            return props.selectedItems.indexOf(id) !== -1;
        };
        const handleItemCheckedChange = (bool: boolean, id: string | number) => {
            console.log(bool);
            console.log(id);
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
            handleBuldCheckBoxChange,
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
