import { PropType } from 'vue-demi';
import { TimeObject } from '@/types/types';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    selectedDate: {
        meridiem?: "午前" | "午後" | null | undefined;
        hours: number;
        minutes: number;
    };
    handleTimeChange: (newValue: TimeObject) => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    placeholder: string;
    caption: string;
    time: TimeObject;
    interval: 12 | 24;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    selectedDate: {
        meridiem?: "午前" | "午後" | null | undefined;
        hours: number;
        minutes: number;
    };
    handleTimeChange: (newValue: TimeObject) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    placeholder: string;
    caption: string;
    time: TimeObject;
    interval: 12 | 24;
} & {}, {
    placeholder: string;
    caption: string;
    interval: 12 | 24;
}, true>);
export default _default;
//# sourceMappingURL=SimpleTimePicker.vue.d.ts.map