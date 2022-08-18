<template>
    <div class="simple-pagination_container">
        <SimpleStack class="simple-pagination_flex-box" spacing="10px">
            <template #default="style">
                <ArrowLeft
                    class="simple-pagination_arrow-icons"
                    :style="style.spacing"
                    @click="handlePreviousPage"
                ></ArrowLeft>
                <div
                    v-for="index in length"
                    v-show="length < 8"
                    :key="'index' + index"
                    class="simple-pagination_dot-base"
                    :class="{
                        selected: isSelected(index - 1),
                    }"
                    :style="style.spacing"
                    @click="handleChange(index - 1)"
                ></div>
                <div
                    v-for="firstthreeIndex in 3"
                    v-show="length >= 8"
                    :key="'indexFirstThree' + firstthreeIndex"
                    class="simple-pagination_dot-base"
                    :class="{
                        selected: isSelected(firstthreeIndex - 1),
                    }"
                    :style="style.spacing"
                    @click="handleChange(firstthreeIndex - 1)"
                ></div>
                <ThreePointLeader
                    v-show="length >= 8"
                    class="simple-pagination_three-point-leader"
                    :class="{
                        intermediateSelected: isIntermediateSelected(),
                    }"
                    :style="style.spacing"
                ></ThreePointLeader>
                <div
                    v-for="lastThreeIndex in 3"
                    v-show="length >= 8"
                    :key="'indexLastThree' + lastThreeIndex"
                    class="simple-pagination_dot-base"
                    :class="{
                        selected: isSelected(length + lastThreeIndex - 4),
                    }"
                    :style="style.spacing"
                    @click="handleChange(length + lastThreeIndex - 4)"
                ></div>
                <ArrowRight
                    class="simple-pagination_arrow-icons"
                    :style="style.spacing"
                    @click="handleNextPage"
                ></ArrowRight>
            </template>
        </SimpleStack>
        <div>{{ current + 1 }}{{ suffix }} / {{ length }}{{ suffix }}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { onKeyPressed } from '@vueuse/core';
import { ArrowLeft, ArrowRight, ThreePointLeader } from '@simple-education-dev/icons';
import SimpleStack from '../SimpleStack/SimpleStack.vue';

export default defineComponent({
    components: {
        ArrowLeft,
        ArrowRight,
        ThreePointLeader,
        SimpleStack,
    },
    props: {
        length: {
            type: Number,
            required: true,
        },
        current: {
            type: Number,
            required: true,
        },
        suffix: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        const handlePreviousPage = () => {
            if (props.current > 0) {
                context.emit('previous');
            }
        };
        const handleNextPage = () => {
            if (props.current < props.length - 1) {
                context.emit('next');
            }
        };
        const handleChange = (index: number) => {
            context.emit('change', index);
        };
        const isSelected = (index: number) => {
            return props.current === index;
        };
        const isIntermediateSelected = () => {
            return 2 < props.current && props.current < props.length - 3;
        };
        onKeyPressed(['j', 'J', 'ArrowLeft'], () => handlePreviousPage());
        onKeyPressed(['k', 'K', 'ArrowRight'], () => handleNextPage());
        return {
            handlePreviousPage,
            handleNextPage,
            handleChange,
            isSelected,
            isIntermediateSelected,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-pagination_container {
    width: 100%;
}
.simple-pagination_flex-box {
    margin: 0 auto;
}
.simple-pagination_arrow-icons {
    width: 14px;
    height: 14px;
    fill: $surface-black;
    cursor: pointer;
}
.simple-pagination_three-point-leader {
    width: 18px;
    height: 18px;
    fill: $surface-black;
}
.simple-pagination_dot-base {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 0.1px solid $surface-black;
    cursor: pointer;
}
.selected {
    background: $selected;
}
.intermediateSelected {
    fill: $selected;
}
</style>
