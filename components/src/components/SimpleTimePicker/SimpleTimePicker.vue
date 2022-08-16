<template>
    <div @mousedown="mousedown" @mouseleave="mouseleave">
        <SimpleInput placeholder="時間を選択" readonly :value="inputValue" @focusIn="inFocus" @focusOut="outFocus">
        </SimpleInput>
        <div v-if="isEntered || isFocus" class="simple-time-picker_float-box">
            <TimePIcker :time="selectedDate" @change="handleTimeChange"></TimePIcker>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, PropType } from 'vue-demi';
import SimpleInput from '../SimpleInput/SimpleInput.vue';
import TimePIcker from '../TimePicker/TimePicker.vue';
import { TimeObject } from '@/types/types';
export default defineComponent({
    components: {
        SimpleInput,
        TimePIcker,
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
        const selectedDate = reactive<TimeObject>({
            meridiem: props.time.meridiem,
            hours: props.time.hours,
            minutes: props.time.minutes,
        });
        const handleTimeChange = (newValue: TimeObject) => {
            selectedDate.meridiem = newValue.meridiem;
            selectedDate.hours = newValue.hours;
            selectedDate.minutes = newValue.minutes;
            if (newValue.meridiem !== null) {
                inputValue.value = `${newValue.meridiem}${('0' + newValue.hours).slice(-2)}時${(
                    '0' + newValue.minutes
                ).slice(-2)}分`;
            } else {
                inputValue.value = `${('0' + newValue.hours).slice(-2)}時${('0' + newValue.minutes).slice(-2)}分`;
            }
        };
        return {
            isFocus,
            isEntered,
            mouseleave,
            mousedown,
            inFocus,
            outFocus,
            inputValue,
            selectedDate,
            handleTimeChange,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-time-picker_float-box {
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
