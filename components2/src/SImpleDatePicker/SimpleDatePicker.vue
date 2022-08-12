<template>
    <div @mousedown="mousedown" @mouseleave="mouseleave">
        <!-- <SimpleInput
            placeholder="日付を選択"
            :value="inputValue"
            @change:value="inputChange"
            @focusIn="inFocus"
            @focusOut="outFocus"
        >
        </SimpleInput>
        <div v-if="isEntered || isFocus" class="float-box">
            <div class="datepicker-header">
                <span class="datepicker-year-header">2022</span>
                <span class="datepicker-date-header">1月12日</span>
            </div>
        </div> -->
        <DatePickVue :highLights="highLights"></DatePickVue>
    </div>
</template>
<script lang="ts">
// import SimpleInput from '../SimpleInput/SimpleInput.vue';
import DatePickVue from './DatePick.vue';
import { monthBoolean } from '../types/week';
import { defineComponent, ref, PropType } from '@vue/composition-api';

export default defineComponent({
    components: {
        // SimpleInput,
        DatePickVue,
    },
    props: {
        highLights: {
            type: Array as PropType<monthBoolean>,
            default: undefined,
            required: false,
        },
    },
    setup() {
        const isFocus = ref(false);
        const isEntered = ref(false);
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
        const inputValue = ref('');
        const inputChange = (newValue: string) => {
            inputValue.value = newValue;
        };
        return {
            isFocus,
            isEntered,
            mouseleave,
            mousedown,
            inFocus,
            outFocus,
            inputValue,
            inputChange,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.float-box {
    display: block;
    position: absolute;
    box-sizing: border-box;
    background: $surface;
    width: 340px;
    height: 340px;
    border-radius: 7px;
    border: 1px solid #efefef;
    box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.2);
}
.datepicker-header {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    width: 100%;
    height: 100px;
    background: $theme-color;
}
.datepicker-year-header {
    padding: $space-2 $space-4;
    font-size: $font-size-10;
    color: $text-white;
}
.datepicker-date-header {
    padding: 0 $space-4;
    font-size: $font-size-8;
    color: $text-white;
}
</style>
