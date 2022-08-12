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
                <div
                    class="gabagebox"
                    :class="{
                        hidden: weekIndex === 0,
                    }"
                    @click="handleDelWeek(weekIndex)"
                >
                    <SimpleIcon size="22px">
                        <DeleteButton />
                    </SimpleIcon>
                </div>
            </div>
        </div>
        <SimpleButton
            v-show="weekValue.length !== maximum"
            plain
            class="addWeek"
            @click="handleAddWeek"
        >
            + 週を追加
        </SimpleButton>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, PropType } from '@vue/composition-api';
import { DeleteButton } from '@simple-education/icons2';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
import SimpleIcon from '../SimpleIcon/SimpleIcon.vue';
type Week = boolean[];
type Start = 'monday' | 'sunday';
export default defineComponent({
    components: {
        DeleteButton,
        SimpleButton,
        SimpleIcon,
    },
    props: {
        weekValue: {
            type: Array as PropType<Week[]>,
            default: () => [[false, false, false, false, false, false, false]],
            required: true,
        },
        start: {
            type: String as PropType<Start>,
            default: 'sunday',
            required: false,
        },
        sunday: {
            type: Boolean,
            default: true,
            required: false,
        },
        maximum: {
            type: Number,
            default: 4,
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
            newWeek.push(newWeek[weekLength.value - 1]);
            weekLength.value++;
            context.emit('addWeek', newWeek);
        };
        const handleDelWeek = (weekIndex: number) => {
            const deletedWeek = [...props.weekValue];
            deletedWeek.splice(weekIndex, 1);
            weekLength.value--;
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
