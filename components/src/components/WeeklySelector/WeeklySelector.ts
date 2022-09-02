import { defineComponent, ref, computed, PropType, h, VNode, isVue3 } from 'vue-demi';
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
        const isEachWeek = ref(true);
        const weekBooleanArray = computed(
            () => cyclePeriodConverter(props.weekValue, props.start, isEachWeek.value) as BooleanArray
        );
        const weekArray = computed(() => [...Array(isEachWeek.value ? 1 : 4).keys()]);
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
            context.emit('change:week', cyclePeriodConverter(deepCopy, props.start, isEachWeek.value));
        };
        const handleAddWeek = () => {
            isEachWeek.value = false;
            context.emit('change:week', cyclePeriodConverter(weekBooleanArray.value, props.start, isEachWeek.value));
        };
        const handleDelWeek = () => {
            isEachWeek.value = true;
            context.emit('change:week', cyclePeriodConverter(weekBooleanArray.value, props.start, isEachWeek.value));
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
                        icon: isEachWeek.value ? ArrowDown : ArrowUp,
                        props: { plain: true, icon: isEachWeek.value ? ArrowDown : ArrowUp },
                        onClick: isEachWeek.value ? handleAddWeek : handleDelWeek,
                        on: {
                            click: isEachWeek.value ? handleAddWeek : handleDelWeek,
                        },
                    },
                    isVue3 ? () => (isEachWeek.value ? '月ごと' : '週ごと') : isEachWeek.value ? '月ごと' : '週ごと'
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
                    !isEachWeek.value
                        ? h('div', { class: [{ weekly_selector__week_caption: true }] }, String(weekIndex + 1) + '週目')
                        : null,
                    h('div', { class: [{ weekly_selector__weekdays: true }] }, weekdaysNode(weekIndex)),
                ]);
            });
        return () => h('div', { class: [{ weekly_selector__base: true }] }, [...weeksNode(), iconNode()]);
    },
});
