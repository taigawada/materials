import { defineComponent, ref, computed, PropType, h, VNode } from 'vue-demi';
import { dayOfWeekStr } from '../../utils/utils';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton/SimpleButton';
import SimpleStack from '../SimpleStack/SimpleStack';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
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
            return h(SimpleStack, { distribution: 'left', props: { distribution: 'left' } }, () => [
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
                    () => (add ? '月ごと' : '週ごと')
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
                        h(
                            'span',
                            { class: [{ weekly_selector__box_selected_text: enabled(weekIndex, weekdayIndex) }] },
                            dayOfWeekStr(props.start, weekdayIndex)
                        )
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
        // <div class="weekly-selector_base">
        //     <div v-for="weekIndex in weekArray" :key="'week' + weekIndex">
        //         <div v-show="weekLength > 1" class="weekly-selector_week-caption">第{{ weekIndex + 1 }}週</div>
        //         <div class="weekly-selector_weekdays">
        //             <div v-for="index in weekdaysArray" :key="'weekdays' + weekIndex + index">
        //                 <div
        //                     class="weekly-selector_box"
        //                     :class="{
        //                         leftSide: index === 0,
        //                         rightSide: index === weekdaysLength - 1,
        //                         selected: enabled(weekIndex, index),
        //                     }"
        //                     @click="handleClick(weekIndex, index)"
        //                 >
        //                     <span
        //                         :class="{
        //                             selectedText: enabled(weekIndex, index),
        //                         }"
        //                     >
        //                         {{ dayOfWeekStr(start, index) }}
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <SimpleButton v-show="weekValue.length === 1" plain class="weekly-selector_add-week" @click="handleAddWeek">
        //         <SimpleStack alignment="center" distribution="left">
        //             <template #default="style">
        //                 <ArrowDown class="weekly-selector_week-add-icon" :style="style.spacing" />
        //                 月ごと
        //             </template>
        //         </SimpleStack>
        //     </SimpleButton>
        //     <SimpleButton v-show="weekValue.length !== 1" plain class="weekly-selector_add-week" @click="handleDelWeek">
        //         <SimpleStack alignment="center" distribution="left">
        //             <template #default="style">
        //                 <ArrowUp class="weekly-selector_week-add-icon" :style="style.spacing" />
        //                 週ごと
        //             </template>
        //         </SimpleStack>
        //     </SimpleButton>
        // </div>
    },
});
