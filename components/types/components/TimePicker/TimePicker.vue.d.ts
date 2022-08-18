import { PropType } from 'vue-demi';
import { TimeObject } from '../../types/types';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    hoursArray: import("@vue/composition-api").Ref<number[]>;
    minutesArray: import("@vue/composition-api").Ref<number[]>;
    selectMeridiem: import("@vue/composition-api").Ref<"午前" | "午後" | undefined>;
    currentSelectTime: {
        meridiem?: "午前" | "午後" | null | undefined;
        hours: number;
        minutes: number;
    };
    handleMeridiemChange: (newValue: '午前' | '午後') => void;
    handleHoursChange: (newValue: number) => void;
    handleMinutesChange: (newValue: number) => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
    minutesInterval: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
    minutesInterval: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    time: TimeObject;
    interval: 12 | 24;
    minutesInterval: number;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    hoursArray: import("@vue/composition-api").Ref<number[]>;
    minutesArray: import("@vue/composition-api").Ref<number[]>;
    selectMeridiem: import("@vue/composition-api").Ref<"午前" | "午後" | undefined>;
    currentSelectTime: {
        meridiem?: "午前" | "午後" | null | undefined;
        hours: number;
        minutes: number;
    };
    handleMeridiemChange: (newValue: '午前' | '午後') => void;
    handleHoursChange: (newValue: number) => void;
    handleMinutesChange: (newValue: number) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    time: TimeObject;
    interval: 12 | 24;
    minutesInterval: number;
} & {}, {
    interval: 12 | 24;
    minutesInterval: number;
}, true>);
export default _default;
//# sourceMappingURL=TimePicker.vue.d.ts.map