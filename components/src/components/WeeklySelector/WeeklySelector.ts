import { defineComponent, ref, computed, PropType, h, VNode, isVue3 } from 'vue-demi';
import { dayOfWeekStr } from '../../utils/utils';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton';
import SimpleIcon from '../SimpleIcon';
import './WeeklySelector.scss';
type Week = boolean[];
type Start = 'monday' | 'sunday';
export default defineComponent({
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

            context.emit('change:week', changed);
        };
        const handleAddWeek = () => {
            const newWeek = [...props.weekValue];
            [...new Array(3).keys()].map(() => newWeek.push(new Array(7).fill(false)));
            weekLength.value = 4;
            context.emit('change:week', newWeek);
        };
        const handleDelWeek = () => {
            const deletedWeek = [...props.weekValue];
            deletedWeek.splice(1, 3);
            weekLength.value = 1;
            context.emit('change:week', deletedWeek);
        };
        const enabled = (week: number, weekDay: number) => {
            return props.weekValue[week][weekDay];
        };
        const iconNode = (add: boolean) => {
            return h('div', { class: [{ weekly_selector__add_week_container: true }] }, [
                h(
                    SimpleButton,
                    {
                        class: [{ weekly_selector__add_week: true }],
                        plain: true,
                        props: { plain: true },
                        onClick: add ? handleAddWeek : handleDelWeek,
                        on: {
                            click: add ? handleAddWeek : handleDelWeek,
                        },
                    },
                    isVue3 ? () => (add ? '月ごと' : '週ごと') : add ? '月ごと' : '週ごと'
                ),
                h(SimpleIcon, {
                    source: add ? ArrowDown : ArrowUp,
                    size: '14px',
                    clickable: true,
                    fill: 'rgba(53, 146, 185, 1)',
                    props: {
                        source: add ? ArrowDown : ArrowUp,
                        size: '14px',
                        clickable: true,
                        fill: 'rgba(53, 146, 185, 1)',
                    },
                    onClick: add ? handleAddWeek : handleDelWeek,
                    on: {
                        click: add ? handleAddWeek : handleDelWeek,
                    },
                }),
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
                    weekLength.value > 1
                        ? h('div', { class: [{ weekly_selector__week_caption: true }] }, String(weekIndex + 1) + '週目')
                        : null,
                    h('div', { class: [{ weekly_selector__weekdays: true }] }, weekdaysNode(weekIndex)),
                ]);
            });
        return () =>
            h('div', { class: [{ weekly_selector__base: true }] }, [
                ...weeksNode(),
                iconNode(props.weekValue.length === 1),
            ]);
    },
});
