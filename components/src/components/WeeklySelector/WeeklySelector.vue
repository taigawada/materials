<template>
    <div class="weekly-selector_base">
        <div v-for="weekIndex in weekArray" :key="'week' + weekIndex">
            <div v-show="weekLength > 1" class="weekly-selector_week-caption">第{{ weekIndex + 1 }}週</div>
            <div class="weekly-selector_weekdays">
                <div v-for="index in weekdaysArray" :key="'weekdays' + weekIndex + index">
                    <div
                        class="weekly-selector_box"
                        :class="{
                            leftSide: index === 0,
                            rightSide: index === weekdaysLength - 1,
                            selected: enabled(weekIndex, index),
                        }"
                        @click="handleClick(weekIndex, index)"
                    >
                        <span
                            :class="{
                                selectedText: enabled(weekIndex, index),
                            }"
                        >
                            {{ dayOfWeekStr(start, index) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <SimpleButton v-show="weekValue.length === 1" plain class="weekly-selector_add-week" @click="handleAddWeek">
            <SimpleStack alignment="center" distribution="left">
                <template #default="style">
                    <ArrowDown class="weekly-selector_week-add-icon" :style="style.spacing" />
                    月ごと
                </template>
            </SimpleStack>
        </SimpleButton>
        <SimpleButton v-show="weekValue.length !== 1" plain class="weekly-selector_add-week" @click="handleDelWeek">
            <SimpleStack alignment="center" distribution="left">
                <template #default="style">
                    <ArrowUp class="weekly-selector_week-add-icon" :style="style.spacing" />
                    週ごと
                </template>
            </SimpleStack>
        </SimpleButton>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue-demi';
import { dayOfWeekStr } from '../../utils/utils';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
import SimpleStack from '../SimpleStack/SimpleStack.vue';
type Week = boolean[];
type Start = 'monday' | 'sunday';
export default defineComponent({
    components: {
        ArrowUp,
        ArrowDown,
        SimpleButton,
        SimpleStack,
    },
    props: {
        weekValue: {
            type: Array as PropType<Week[]>,
            default: () => [[false, false, false, false, false, false, false]],
            required: true,
        },
        start: {
            type: String as PropType<Start>,
            default: 'monday',
            required: false,
        },
        sunday: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, context) {
        const weekLength = ref(props.weekValue.length);
        const weekArray = computed(() => [...Array(weekLength.value).keys()]);
        const weekdaysLength = computed(() => {
            if (props.sunday) {
                return 7;
            } else {
                return 6;
            }
        });
        const weekdaysArray = computed(() => [...Array(weekdaysLength.value).keys()]);
        const handleClick = (week: number, weekDay: number) => {
            const changed = [...props.weekValue];
            changed[week] = [...changed[week]];
            changed[week][weekDay] = !changed[week][weekDay];
            context.emit('change', changed);
        };
        const handleAddWeek = () => {
            const newWeek = [...props.weekValue];
            [...new Array(3).keys()].map(() => newWeek.push(new Array(7).fill(false)));
            weekLength.value = 4;
            context.emit('addWeek', newWeek);
        };
        const handleDelWeek = () => {
            const deletedWeek = [...props.weekValue];
            deletedWeek.splice(1, 3);
            weekLength.value = 1;
            context.emit('delWeek', deletedWeek);
        };
        const enabled = computed(() => (week: number, weekDay: number) => {
            return props.weekValue[week][weekDay];
        });
        return {
            weekLength,
            weekArray,
            weekdaysLength,
            weekdaysArray,
            handleClick,
            handleAddWeek,
            handleDelWeek,
            enabled,
            dayOfWeekStr,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.weekly-selector_base {
    display: inline-block;
}
.weekly-selector_weekdays {
    display: flex;
    align-items: center;
    justify-content: center;
}
.weekly-selector_box {
    display: block;
    background: rgba(255, 255, 255, 1);
    border-top: 0.5px solid #727272;
    border-left: 0.25px solid #727272;
    border-right: 0.25px solid #727272;
    border-bottom: 0.5px solid #727272;
    padding: 5px 40px;
    cursor: pointer;
}
.leftSide {
    border-left: 0.5px solid #727272;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.rightSide {
    border-right: 0.5px solid #727272;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.selected {
    background: #3c82d6;
    cursor: pointer;
}
.selectedText {
    color: #ffffff;
    cursor: pointer;
}
.weekly-selector_add-week {
    margin: 5px 0;
    text-align: left;
}
.weekly-selector_week-caption {
    text-align: left;
    font-size: 12px;
}
.weekly-selector_week-add-icon {
    width: 14px;
    height: 14px;
    fill: $selected;
    cursor: pointer;
    margin: var(--child-margin);
}
</style>
