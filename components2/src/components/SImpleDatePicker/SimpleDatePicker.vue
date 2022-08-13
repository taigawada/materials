<template>
    <div @mousedown="mousedown" @mouseleave="mouseleave">
        <SimpleInput
            placeholder="日付を選択"
            readonly
            :value="inputValue"
            @change:value="inputChange"
            @focusIn="inFocus"
            @focusOut="outFocus"
        >
        </SimpleInput>
        <div v-if="isEntered || isFocus" class="date-picker_float-box">
            <SimpleCalender select :selected="currentSelectDate" @change="handleSelectDateChange"></SimpleCalender>
        </div>
    </div>
</template>
<script lang="ts">
import SimpleInput from '../SimpleInput/SimpleInput.vue';
import SimpleCalender from '../SimpleCalender/SimpleCalender.vue';
import { format } from 'date-fns';
import { defineComponent, ref } from 'vue-demi';

export default defineComponent({
    components: {
        SimpleInput,
        SimpleCalender,
    },
    props: {
        selected: {
            type: Date,
            default: () => new Date(),
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
        const currentSelectDate = ref<Date>();
        const inputValue = ref('');
        const inputChange = (newValue: string) => {
            inputValue.value = newValue;
        };
        const handleSelectDateChange = (date: Date) => {
            currentSelectDate.value = date;
            inputValue.value = format(date, 'yyyy年MM月dd日');
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
            currentSelectDate,
            handleSelectDateChange,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.date-picker_float-box {
    display: block;
    position: absolute;
    box-sizing: border-box;
    background: $surface;
    border-radius: 7px;
    border: 1px solid #efefef;
    box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.2);
    padding-bottom: $space-6;
}
</style>
