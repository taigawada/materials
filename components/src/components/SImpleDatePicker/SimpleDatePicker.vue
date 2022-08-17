<template>
    <div @mousedown="mousedown" @mouseleave="mouseleave">
        <SimpleInput
            :caption="caption"
            :placeholder="placeholder"
            readonly
            :value="inputValue"
            @focusIn="inFocus"
            @focusOut="outFocus"
        >
        </SimpleInput>
        <div v-if="isEntered || isFocus" class="simple-date-picker_float-box">
            <SimpleCalender
                select
                :selected="currentSelectDate"
                :allowPast="allowPast"
                :showRelatedDays="showRelatedDays"
                @change="handleSelectDateChange"
            ></SimpleCalender>
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
        caption: {
            type: String,
            default: undefined,
            required: false,
        },
        placeholder: {
            type: String,
            default: '日付を選択',
            required: false,
        },
        selected: {
            type: Date,
            default: () => new Date(),
            required: false,
        },
        allowPast: {
            type: Boolean,
            required: false,
        },
        showRelatedDays: {
            type: Boolean,
            default: false,
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
            currentSelectDate,
            handleSelectDateChange,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-date-picker_float-box {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
}
</style>
