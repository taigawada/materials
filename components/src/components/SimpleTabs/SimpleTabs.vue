<template>
    <div class="base">
        <div
            v-for="(tab, index) in tabs"
            :key="tab.id"
            class="tab"
            @mouseenter="mouseenter(index)"
            @mouseleave="mouseleave"
            @click="hundleSelect(index)"
        >
            <span
                :class="{
                    enteredText: isEntered === index && isEntered !== selected,
                }"
            >
                {{ tab.label }}
            </span>
            <div v-show="isEntered === index && isEntered !== selected" class="entered"></div>
            <div v-show="selected === index" class="selected"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue-demi';
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
        return {
            hundleSelect,
            isEntered,
            mouseenter,
            mouseleave,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.base {
    display: flex;
    justify-content: space-between;
}
.tab {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d5d5d5;
}
.selected {
    width: 100%;
    height: 5px;
    background: #ffc255;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.entered {
    width: 100%;
    height: 3px;
    background: #d5d5d5;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}
.enteredText {
    color: #000000;
}
</style>
