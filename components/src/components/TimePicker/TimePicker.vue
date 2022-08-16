<template>
    <div class="simple-timepicker_base">
        <SimpleSmoothPicker
            v-show="interval === 12"
            :items="['午前', '午後']"
            whichSide="left"
            width="100px"
            :selected="currentSelectTime.meridiem"
            @change="handleMeridiemChange"
        ></SimpleSmoothPicker>
        <SimpleSmoothPicker
            :items="hoursArray"
            :whichSide="interval === 24 ? 'left' : 'center'"
            width="100px"
            suffix="時"
            :selected="interval === 24 ? currentSelectTime.hours : currentSelectTime.hours % 12"
            @change="handleHoursChange"
        ></SimpleSmoothPicker>
        <SimpleSmoothPicker
            :items="minutesArray"
            whichSide="right"
            width="100px"
            suffix="分"
            :selected="currentSelectTime.minutes"
            @change="handleMinutesChange"
        ></SimpleSmoothPicker>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, reactive, watch, toRefs } from 'vue-demi';
import SimpleSmoothPicker from '../SimpleSmoothPicker/SimpleSmoothPicker.vue';
import { TimeObject } from '../../types/types';

export default defineComponent({
    components: {
        SimpleSmoothPicker,
    },
    props: {
        time: {
            type: Object as PropType<TimeObject>,
            required: true,
        },
        interval: {
            type: Number as PropType<12 | 24>,
            default: 12,
            required: false,
        },
        minutesInterval: {
            type: Number,
            default: 1,
            required: false,
        },
    },
    setup(props, context) {
        const selectMeridiem = ref<'午前' | '午後'>();
        const hoursArray = ref([...Array(props.interval)].map((_: unknown, i) => i));
        const minutesArray = ref(
            [...Array(60 / props.minutesInterval)].map((_: unknown, i) => i * props.minutesInterval)
        );
        const currentSelectTime = reactive<TimeObject>({
            meridiem: props.time.meridiem,
            hours: props.time.hours,
            minutes: props.time.minutes,
        });
        const handleMeridiemChange = (newValue: '午前' | '午後') => {
            currentSelectTime.meridiem = newValue;
            context.emit('change', currentSelectTime);
        };
        const handleHoursChange = (newValue: number) => {
            currentSelectTime.hours = newValue;
            context.emit('change', currentSelectTime);
        };
        const handleMinutesChange = (newValue: number) => {
            currentSelectTime.minutes = newValue;
            context.emit('change', currentSelectTime);
        };
        const { time } = toRefs(props);
        watch(time, () => {
            currentSelectTime.meridiem = time.value.meridiem;
            currentSelectTime.hours = time.value.hours;
            currentSelectTime.minutes = time.value.minutes;
        });
        return {
            hoursArray,
            minutesArray,
            selectMeridiem,
            currentSelectTime,
            handleMeridiemChange,
            handleHoursChange,
            handleMinutesChange,
        };
    },
});
</script>
<style lang="scss"></style>
