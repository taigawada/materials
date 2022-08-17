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
                <th><slot name="header"></slot></th>
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
                <td class="simple-resource-list_slot-data">
                    <slot name="data" class="simple-resource-list_slot" :item="item"></slot>
                </td>
            </tr>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue-demi';
import SimpleCheckbox from '../SimpleCheckbox/SimpleCheckbox.vue';
export default defineComponent({
    components: { SimpleCheckbox },
    props: {
        items: {
            type: Array as PropType<any>,
            default: () => [
                {
                    id: '#0001',
                    name: 'taigawada',
                },
                {
                    id: '#0002',
                    name: 'niwasann',
                },
                {
                    id: '#0003',
                    name: 'naokihirata',
                },
            ],
            required: false,
        },
        selectedItems: {
            type: Array as PropType<string[]>,
            default: () => [],
            required: false,
        },
    },
    setup(props, context) {
        // trクリックでチェックボックスを操作する
        // checkboxとtrが同時押しできないようにクリックイベントを監視
        const itemCheckBox = ref();
        const handleClickRow = (index: number, event: Event) => {
            if (!itemCheckBox.value[index].$el.contains(event.target as HTMLElement)) {
                itemCheckBox.value[index].hundleChange();
            }
        };
        const bulkCheckBox = ref(false);
        const indeterminateRef = ref(false);
        const handleBuldCheckBoxChange = (bool: boolean) => {
            bulkCheckBox.value = bool;
            let newSelectedItems: string[] = [];
            if (bool) {
                newSelectedItems = props.items.map((item) => item.id);
            }
            indeterminateRef.value = false;
            context.emit('change', newSelectedItems);
        };
        const isSelected = (id: string) => {
            return props.selectedItems.indexOf(id) !== -1;
        };
        const handleItemCheckedChange = (bool: boolean, id: string) => {
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
        return {
            itemCheckBox,
            handleClickRow,
            bulkCheckBox,
            indeterminateRef,
            handleBuldCheckBoxChange,
            isSelected,
            handleItemCheckedChange,
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
    border-top: 1px solid $border;
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
// .simple-resource-list_slot-data {
//     display: grid;
// }
.simple-resource-list_checkbox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
