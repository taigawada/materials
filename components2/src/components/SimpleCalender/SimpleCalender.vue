<template>
    <div class="temp-base">
        <div class="select-date-container">
            <ArrowLeft class="paginate-icon" @click="handleSubMonth" />
            <span>{{ showDateString() }}</span>
            <ArrowRight class="paginate-icon" @click="handleAddMonth" />
        </div>

        <table>
            <tr>
                <th v-for="dayOfWeekIndex in dayWeekArray" :key="'dayOfWeek' + dayOfWeekIndex" class="calender-header">
                    {{ dayOfWeekStr(start, dayOfWeekIndex) }}
                </th>
            </tr>
            <tr v-for="(week, weekIndex) in getCalendarArray" :key="'week' + weekIndex">
                <td
                    v-for="(day, weekDayIndex) in week"
                    :key="'day' + weekDayIndex"
                    class="calender-data"
                    :class="{
                        calender_show_related_days: !isSameMonth(day, currentShowDate),
                        calender_data_entered: select && isEntered(weekIndex, weekDayIndex) && isSameMonth(day, currentShowDate),
                        calender_data_selected: showHighLights(day),
                    }"
                    :style="pointer"
                    @click="handleDateSelect(day, weekIndex, weekDayIndex)"
                    @mouseenter="mouseEnter(weekIndex, weekDayIndex)"
                    @mouseleave="mouseLeave"
                >
                    {{ showDate(day) }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, PropType, reactive, watchEffect } from '@vue/composition-api';
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    eachWeekOfInterval,
    endOfWeek,
    getDate,
    getDay,
    addMonths,
    subMonths,
    isSameMonth,
    isSameDay,
    differenceInWeeks,
} from 'date-fns';
import { ArrowLeft, ArrowRight } from '@simple-education/icons2';
import { monthBoolean } from '../../types/week';
import { dayOfWeekStr } from '../../utils/utils';

interface Entered {
    weekIndex: null | number;
    weekDayIndex: null | number;
}

export default defineComponent({
    components: { ArrowLeft, ArrowRight },
    props: {
        start: {
            type: String as PropType<'monday' | 'sunday'>,
            default: 'monday',
            required: false,
        },
        select: {
            type: Boolean,
            default: false,
            required: false,
        },
        selected: {
            type: Date,
            default: undefined,
            required: false,
        },
        showRelatedDays: {
            type: Boolean,
            default: true,
            required: false,
        },
        highLights: {
            type: Array as PropType<monthBoolean>,
            default: () => [],
            required: false,
        },
    },
    setup(props, context) {
        const nowEntered = reactive<Entered>({
            weekIndex: null,
            weekDayIndex: null,
        });
        const mouseEnter = (weekIndex: number, weekDayIndex: number) => {
            nowEntered.weekIndex = weekIndex;
            nowEntered.weekDayIndex = weekDayIndex;
        };
        const mouseLeave = () => {
            nowEntered.weekIndex = null;
            nowEntered.weekDayIndex = null;
        };
        const isEntered = (weekIndex: number, weekDayIndex: number) => {
            return nowEntered.weekIndex == weekIndex && nowEntered.weekDayIndex == weekDayIndex;
        };
        const weekStartsOn = () => {
            if (props.start === 'monday') return 1;
            else return 0;
        };
        const currentShowDate = ref<Date>(props.selected ? props.selected : new Date());
        const highLightsPositions = ref<[number, number][]>([]);
        watchEffect(() => {
            let parseResult: [number, number][] = [];
            if (props.highLights.length === 1) {
                props.highLights[0].map((weekOfDay, weekOfDayIndex) => {
                    if (weekOfDayIndex === 6) weekOfDayIndex = -weekStartsOn();
                    if (weekOfDay) {
                        [...new Array(5).keys()].map((index) => parseResult.push([index, weekOfDayIndex]));
                    }
                });
            } else {
                props.highLights.map((week, weekIndex) => {
                    week.map((weekOfDay, weekOfDayIndex) => {
                        if (weekOfDayIndex === 6) weekOfDayIndex = -weekStartsOn();
                        if (weekOfDay) {
                            parseResult.push([weekIndex, weekOfDayIndex]);
                        }
                    });
                });
            }
            highLightsPositions.value = parseResult;
        });
        const currentSelectedDate = ref<Date | undefined>(props.selected);
        const showHighLights = (date: Date) => {
            if (highLightsPositions.value.length > 0) {
                return highLightsPositions.value.find(
                    (elememt) =>
                        elememt[0] === differenceInWeeks(date, startOfMonth(date)) && elememt[1] === getDay(date) - weekStartsOn() && isSameMonth(date, currentShowDate.value)
                );
            } else {
                return currentSelectedDate.value ? isSameDay(date, currentSelectedDate.value) : false;
            }
        };
        const handleDateSelect = (date: Date, weekIndex: number, weekDayIndex: number) => {
            if (weekDayIndex === 6) weekDayIndex = -weekStartsOn();
            currentSelectedDate.value = date;
            highLightsPositions.value = [[weekIndex, weekDayIndex]];
            context.emit('change', date);
        };
        const showDateString = () => format(currentShowDate.value, 'yyyy年MM月');
        const handleAddMonth = () => {
            currentShowDate.value = addMonths(currentShowDate.value, 1);
        };
        const handleSubMonth = () => {
            currentShowDate.value = subMonths(currentShowDate.value, 1);
        };
        const showDate = (date: Date) => {
            if (props.showRelatedDays) {
                return getDate(date);
            } else {
                if (isSameMonth(date, currentShowDate.value)) {
                    return getDate(date);
                } else {
                    return '';
                }
            }
        };
        const dayWeekArray = [...Array(7).keys()];
        const getCalendarArray = computed(() => {
            const weekStartDate = eachWeekOfInterval(
                {
                    start: startOfMonth(currentShowDate.value),
                    end: endOfMonth(currentShowDate.value),
                },
                {
                    weekStartsOn: weekStartsOn(),
                }
            );
            return weekStartDate.map((startDate: Date) =>
                eachDayOfInterval({
                    start: startDate,
                    end: endOfWeek(startDate, {
                        weekStartsOn: weekStartsOn(),
                    }),
                })
            );
        });
        const pointer = computed(() => {
            if (props.select) {
                return { '--cursor-calender-date': 'pointer' };
            } else {
                return { '--cursor-calender-date': 'default' };
            }
        });
        return {
            mouseEnter,
            mouseLeave,
            isEntered,
            format,
            showHighLights,
            handleDateSelect,
            getDate,
            showDate,
            showDateString,
            dayWeekArray,
            dayOfWeekStr,
            currentShowDate,
            handleAddMonth,
            handleSubMonth,
            getCalendarArray,
            isSameMonth,
            pointer,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.temp-base {
    display: inline-block;
}
.select-date-container {
    display: flex;
    margin: $space-5 auto;
    align-items: center;
    justify-content: space-around;
}
.paginate-icon {
    width: 16px;
    height: 16px;
    fill: $surface-black;
    cursor: pointer;
}
.calender-header {
    font-weight: 100;
    color: $text;
    padding: $space-2 $space-5;
}
.calender-data {
    font-size: $font-size-3;
    color: $surface-black;
    padding: $space-2 $space-5;
    border-radius: 5px;
    cursor: var(--cursor-calender-date);
}
.calender_data_entered {
    background: $hovered;
}
.calender_data_selected {
    color: $surface;
    background: $selected;
}
.calender_show_related_days {
    color: $text-disabled;
}
</style>
