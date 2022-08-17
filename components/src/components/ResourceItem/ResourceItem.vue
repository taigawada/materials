<template>
    <div class="resource-item_child">
        <div v-if="sort">
            <SimpleStack>
                <template #default="style">
                    <slot></slot>
                    <ArrowDown
                        v-show="sortStatus"
                        class="resource-item_sort-icon"
                        :style="style.spacing"
                        @click="handleSortClick('desc')"
                    ></ArrowDown>
                    <ArrowUp
                        v-show="!sortStatus"
                        class="resource-item_sort-icon"
                        :style="style.spacing"
                        @click="handleSortClick('asc')"
                    ></ArrowUp>
                </template>
            </SimpleStack>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue-demi';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleStack from '../SimpleStack/SimpleStack.vue';
export default defineComponent({
    components: {
        ArrowDown,
        ArrowUp,
        SimpleStack,
    },
    props: {
        sort: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, context) {
        const sortStatus = ref(true);
        const handleSortClick = (order: 'asc' | 'desc') => {
            if (order === 'asc') {
                sortStatus.value = true;
            } else {
                sortStatus.value = false;
            }
            context.emit('sort', order);
        };
        return {
            sortStatus,
            handleSortClick,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.resource-item_child {
    display: grid;
    align-items: center;
    grid-template-rows: var(--child-item-height);
    grid-template-columns: var(--child-item-weights);
}
.resource-item_base div {
    font-size: $font-size-6;
}
.resource-item_sort-icon {
    width: 13px;
    height: 13px;
    cursor: pointer;
}
</style>
