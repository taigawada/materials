import { computed, defineComponent, ref, PropType, reactive, h, VNode } from 'vue-demi';
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
    isFuture,
    differenceInWeeks,
} from 'date-fns';
import { ArrowLeft, ArrowRight } from '@simple-education-dev/icons';
import SimpleIcon from '../SimpleIcon';
import { monthBoolean } from '@/types/types';
import { dayOfWeekStr } from '@/utils/utils';
import './SimpleCalender.scss';

interface Entered {
    weekIndex: null | number;
    weekDayIndex: null | number;
}

export default defineComponent({
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
        allowPast: {
            type: Boolean,
            default: true,
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
            return nowEntered.weekIndex === weekIndex && nowEntered.weekDayIndex === weekDayIndex;
        };
        const weekStartsOn = () => {
            if (props.start === 'monday') return 1;
            else return 0;
        };
        const currentShowDate = ref<Date>(props.selected ? props.selected : new Date());
        const highLightsPositions = computed(() => {
            const parseResult: [number, number][] = [];
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
            return parseResult;
        });
        const currentSelectedDate = ref<Date | undefined>(props.selected);
        const showHighLights = (date: Date) => {
            if (highLightsPositions.value.length > 0 && !currentSelectedDate.value) {
                return highLightsPositions.value.find(
                    (elememt) =>
                        elememt[0] === differenceInWeeks(date, startOfMonth(date)) &&
                        elememt[1] === getDay(date) - weekStartsOn() &&
                        isSameMonth(date, currentShowDate.value)
                );
            } else {
                if (props.select) {
                    return currentSelectedDate.value ? isSameDay(date, currentSelectedDate.value) : false;
                }
            }
        };
        const handleDateSelect = (date: Date, weekDayIndex: number) => {
            if (props.allowPast || isFuture(date) || isSameDay(new Date(), date)) {
                if (props.select && isSameMonth(date, currentShowDate.value)) {
                    if (weekDayIndex === 6) weekDayIndex = -weekStartsOn();
                    currentSelectedDate.value = date;
                    context.emit('change', date);
                }
            }
        };
        const showDateString = (): string => format(currentShowDate.value, 'yyyy年MM月');
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
        const isPastDay = (day: Date) => {
            return props.allowPast ? true : isFuture(day) || isSameDay(new Date(), day);
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
                return { '--cursor-calender-data': 'pointer' };
            } else {
                return { '--cursor-calender-data': 'default' };
            }
        });
        const headerNode = () =>
            h('div', { class: [{ simple_calender__heading: true }] }, [
                h(SimpleIcon, {
                    source: ArrowLeft,
                    size: '16px',
                    clickable: true,
                    props: {
                        source: ArrowLeft,
                        size: '16px',
                        clickable: true,
                    },
                    onClick: handleSubMonth,
                    on: {
                        click: handleSubMonth,
                    },
                }),
                h('span', showDateString()),
                h(SimpleIcon, {
                    source: ArrowRight,
                    size: '16px',
                    clickable: true,
                    props: {
                        source: ArrowRight,
                        size: '16px',
                        clickable: true,
                    },
                    onClick: handleAddMonth,
                    on: {
                        click: handleAddMonth,
                    },
                }),
            ]);
        const tableHeaderNode = () =>
            dayWeekArray.map((dayweekIndex) => {
                return h(
                    'th',
                    {
                        key: dayOfWeekStr(props.start, dayweekIndex),
                        class: [{ simple_calender__weekofday_header: true }],
                    },
                    dayOfWeekStr(props.start, dayweekIndex)
                );
            });
        const tableDataNode = (): VNode[] =>
            getCalendarArray.value.map((week, weekIndex) => {
                return h(
                    'tr',
                    week.map((date, dateIndex) => {
                        return h(
                            'td',
                            {
                                key: String(date),
                                class: [
                                    {
                                        simple_calender__date_data: true,
                                        calenderShowDisable:
                                            !isSameMonth(date, currentShowDate.value) || !isPastDay(date),
                                        calenderDataEntered:
                                            props.select &&
                                            isEntered(weekIndex, dateIndex) &&
                                            isSameMonth(date, currentShowDate.value) &&
                                            isPastDay(date),
                                        calenderDataSelected: showHighLights(date),
                                    },
                                ],
                                style: [pointer.value],
                                onMouseenter: () => mouseEnter(weekIndex, dateIndex),
                                onMouseleave: mouseLeave,
                                onClick: () => handleDateSelect(date, dateIndex),
                                on: {
                                    mouseenter: () => mouseEnter(weekIndex, dateIndex),
                                    mouseleave: mouseLeave,
                                    click: () => handleDateSelect(date, dateIndex),
                                },
                            },
                            showDate(date)
                        );
                    })
                );
            });
        const calenderTableNode = () =>
            h('table', { class: [{ simple_calender__table: true }] }, [h('tr', tableHeaderNode()), tableDataNode()]);
        return () => h('div', { class: [{ simple_calender___container: true }] }, [headerNode(), calenderTableNode()]);
    },
});
