<template>
    <div @mousedown="mousedown" @mouseleave="mouseleave">
        <SimpleInput placeholder="日付を選択" readonly :value="inputValue" @focusIn="inFocus" @focusOut="outFocus">
        </SimpleInput>
        <div v-if="isEntered || isFocus" class="simple-datetime-picker_float-box">
            <SimpleCalender select :selected="currentSelectDate" @change="handleSelectDateChange"></SimpleCalender>
            <TimePicker :time="currentSelectTime" @change="handleTimeChange"></TimePicker>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, PropType } from 'vue-demi';
import SimpleInput from '../SimpleInput/SimpleInput.vue';
import SimpleCalender from '../SimpleCalender/SimpleCalender.vue';
import TimePicker from '../TimePicker/TimePicker.vue';
import { format, set, addHours } from 'date-fns';
import { TimeObject } from '../../types/types';

export default defineComponent({
    components: {
        SimpleInput,
        SimpleCalender,
        TimePicker,
    },
    props: {
        time: {
            type: Object as PropType<TimeObject>,
            required: true,
        },
    },
    setup(props) {
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
        const currentSelectDate = ref<Date>();
        const currentSelectTime = reactive<TimeObject>({
            meridiem: props.time.meridiem,
            hours: props.time.hours,
            minutes: props.time.minutes,
        });
        const handleTimeChange = (newValue: TimeObject) => {
            currentSelectTime.meridiem = newValue.meridiem;
            currentSelectTime.hours = newValue.hours;
            currentSelectTime.minutes = newValue.minutes;
            if (currentSelectDate.value !== undefined) {
                if (newValue.meridiem !== null) {
                    let shiftHours = 0;
                    if (newValue.meridiem === '午後') shiftHours = 12;
                    inputValue.value = format(
                        addHours(set(currentSelectDate.value, newValue), shiftHours),
                        'yyyy年MM月dd日HH時mm分'
                    );
                } else {
                    inputValue.value = format(set(currentSelectDate.value, newValue), 'yyyy年MM月dd日HH時mm分');
                }
            }
        };
        const handleSelectDateChange = (date: Date) => {
            currentSelectDate.value = date;
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
            currentSelectTime,
            handleTimeChange,
            handleSelectDateChange,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-datetime-picker_float-box {
    display: block;
    position: absolute;
    box-sizing: border-box;
    background: $surface;
    border-radius: 7px;
    border: 1px solid #efefef;
    box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.2);
    padding: $space-2 $space-5;
    z-index: 100;
}
</style>
