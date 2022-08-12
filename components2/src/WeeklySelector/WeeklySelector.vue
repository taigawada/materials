<template>
    <div class="base">
        <div v-for="weekIndex in weekArray" :key="'week' + weekIndex">
            <div v-show="weekLength > 1" class="caption">
                第{{ weekIndex + 1 }}週
            </div>
            <div class="weekdays">
                <div
                    v-for="index in weekdaysArray"
                    :key="'weekdays' + weekIndex + index"
                >
                    <div
                        class="box"
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
                            {{ WeekStr(index) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <SimpleButton
            v-show="weekValue.length === 1"
            plain
            class="addWeek"
            @click="handleAddWeek"
        >
            <SimpleStack alignment="center" distribution="center">
                <SimpleIcon
                    size="18px"
                    color="rgba(53, 146, 185, 1)"
                    class="week-add-icon"
                >
                    <ArrowDown />
                </SimpleIcon>
                月ごと
            </SimpleStack>
        </SimpleButton>
        <SimpleButton
            v-show="weekValue.length !== 1"
            plain
            class="addWeek"
            @click="handleDelWeek"
        >
            <SimpleStack alignment="center" distribution="center">
                <SimpleIcon
                    size="18px"
                    color="rgba(53, 146, 185, 1)"
                    class="week-add-icon"
                >
                    <ArrowUp />
                </SimpleIcon>
                週ごと
            </SimpleStack>
        </SimpleButton>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, PropType } from '@vue/composition-api';
import { ArrowDown, ArrowUp } from '@simple-education/icons2';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
import SimpleIcon from '../SimpleIcon/SimpleIcon.vue';
import SimpleStack from '@/SimpleStack/SimpleStack.vue';
type Week = boolean[];
type Start = 'monday' | 'sunday';
export default defineComponent({
    components: {
        ArrowUp,
        ArrowDown,
        SimpleButton,
        SimpleIcon,
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
            default: true,
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
        const weekdaysArray = computed(() => [
            ...Array(weekdaysLength.value).keys(),
        ]);
        const handleClick = (week: number, weekDay: number) => {
            const changed = [...props.weekValue];
            changed[week] = [...changed[week]];
            changed[week][weekDay] = !changed[week][weekDay];
            context.emit('change', changed);
        };
        const handleAddWeek = () => {
            const newWeek = [...props.weekValue];
            [...new Array(3).keys()].map(() =>
                newWeek.push(new Array(7).fill(false))
            );
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
        const WeekStr = (index: number) => {
            let shifter = 0;
            if (props.start === 'monday') {
                shifter = 1;
            }
            switch (index + shifter) {
                case 0:
                    return '日';
                case 1:
                    return '月';
                case 2:
                    return '火';
                case 3:
                    return '水';
                case 4:
                    return '木';
                case 5:
                    return '金';
                case 6:
                    return '土';
                case 7:
                    return '日';
            }
        };
        return {
            weekLength,
            weekArray,
            weekdaysLength,
            weekdaysArray,
            handleClick,
            handleAddWeek,
            handleDelWeek,
            enabled,
            WeekStr,
        };
    },
});
</script>
<style scoped>
.base {
    display: inline-block;
}
.weekdays {
    display: flex;
    align-items: center;
    justify-content: center;
}
.box {
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
.addWeek {
    margin: 5px 0;
    text-align: left;
}
.caption {
    text-align: left;
    font-size: 12px;
}
.gabagebox {
    margin-left: 10px;
    height: 22px;
    cursor: pointer;
}
.hidden {
    pointer-events: none;
    opacity: 0;
}
</style>
