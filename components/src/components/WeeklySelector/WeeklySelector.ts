import { defineComponent, computed, PropType, h, VNode, isVue3 } from 'vue-demi';
import { dayOfWeekStr, cyclePeriodConverter, CyclePeriod, BooleanArray } from '../../utils/utils';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton';
import './WeeklySelector.scss';
type Start = 'monday' | 'sunday';
export default defineComponent({
    props: {
        weekValue: {
            type: Array as PropType<CyclePeriod[]>,
            default: () => [],
            required: true,
        },
        isEachWeek: {
            type: Boolean,
            required: true,
        },
        start: {
            type: String as PropType<Start>,
            default: 'monday',
            required: false,
        },
        sunday: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    setup(props, context) {
        // if (isVue3) {
        //     context.expose({ isEachWeek });
        // } else {
        //     const internalInstance = getCurrentInstance();
        //     // @ts-ignore
        //     Object.assign(internalInstance.proxy, { isEachWeek });
        // }
        const weekBooleanArray = computed(
            () => cyclePeriodConverter(props.weekValue, props.start, props.isEachWeek) as BooleanArray
        );
        const weekArray = computed(() => [...Array(props.isEachWeek ? 1 : 4).keys()]);
        const weekdaysLength = computed(() => {
            if (props.sunday) {
                return 7;
            } else {
                return 6;
            }
        });
        const weekdaysArray = computed(() => [...Array(weekdaysLength.value).keys()]);
        const handleClick = (week: number, weekDay: number) => {
            const deepCopy = [...weekBooleanArray.value];
            deepCopy[week] = [...deepCopy[week]];
            deepCopy[week][weekDay] = !deepCopy[week][weekDay];
            context.emit('change:week', cyclePeriodConverter(deepCopy, props.start, props.isEachWeek));
        };
        const changeEachDay = () => {
            context.emit('changeEach:day');
            context.emit('change:week', cyclePeriodConverter(weekBooleanArray.value, props.start, props.isEachWeek));
        };
        const changeEachWeek = () => {
            context.emit('changeEach:week');
            context.emit('change:week', cyclePeriodConverter(weekBooleanArray.value, props.start, props.isEachWeek));
        };
        const enabled = (week: number, weekDay: number) => {
            return weekBooleanArray.value[week][weekDay];
        };
        const iconNode = () => {
            return h('div', { class: [{ weekly_selector__add_week_container: true }] }, [
                h(
                    SimpleButton,
                    {
                        class: [{ weekly_selector__add_week: true }],
                        plain: true,
                        icon: props.isEachWeek ? ArrowDown : ArrowUp,
                        props: { plain: true, icon: props.isEachWeek ? ArrowDown : ArrowUp },
                        onClick: props.isEachWeek ? changeEachDay : changeEachWeek,
                        on: {
                            click: props.isEachWeek ? changeEachDay : changeEachWeek,
                        },
                    },
                    isVue3 ? () => (props.isEachWeek ? '月ごと' : '週ごと') : props.isEachWeek ? '月ごと' : '週ごと'
                ),
            ]);
        };
        const weekdaysNode = (weekIndex: number) =>
            weekdaysArray.value.map((weekdayIndex) => {
                return h('div', { key: 'weekOfDay' + String(weekIndex) + String(weekdayIndex) }, [
                    h(
                        'div',
                        {
                            class: [
                                {
                                    weekly_selector__box: true,
                                    weekly_selector__box_left_side: weekdayIndex === 0,
                                    weekly_selector__box_right_side: weekdayIndex === weekdaysLength.value - 1,
                                    weekly_selector__box_selected: enabled(weekIndex, weekdayIndex),
                                },
                            ],
                            onClick: () => handleClick(weekIndex, weekdayIndex),
                            on: {
                                click: () => handleClick(weekIndex, weekdayIndex),
                            },
                        },
                        [
                            h(
                                'span',
                                { class: [{ weekly_selector__box_selected_text: enabled(weekIndex, weekdayIndex) }] },
                                dayOfWeekStr(props.start, weekdayIndex)
                            ),
                        ]
                    ),
                ]);
            });
        const weeksNode = (): VNode[] =>
            weekArray.value.map((weekIndex) => {
                return h('div', { key: 'week' + weekIndex }, [
                    !props.isEachWeek
                        ? h('div', { class: [{ weekly_selector__week_caption: true }] }, String(weekIndex + 1) + '週目')
                        : null,
                    h('div', { class: [{ weekly_selector__weekdays: true }] }, weekdaysNode(weekIndex)),
                ]);
            });
        return () => h('div', { class: [{ weekly_selector__base: true }] }, [...weeksNode(), iconNode()]);
    },
});
