import { PropType } from 'vue-demi';
import { TimeObject } from '../../types/types';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    currentSelectDate: import("@vue/composition-api").Ref<Date | undefined>;
    currentSelectTime: {
        meridiem?: "午前" | "午後" | null | undefined;
        hours: number;
        minutes: number;
    };
    handleTimeChange: (newValue: TimeObject) => void;
    handleSelectDateChange: (date: Date) => void;
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
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
    format: {
        type: StringConstructor;
        default: string;
        required: false;
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
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
    format: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    placeholder: string;
    caption: string;
    allowPast: boolean;
    format: string;
    time: TimeObject;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    currentSelectDate: import("@vue/composition-api").Ref<Date | undefined>;
    currentSelectTime: {
        meridiem?: "午前" | "午後" | null | undefined;
        hours: number;
        minutes: number;
    };
    handleTimeChange: (newValue: TimeObject) => void;
    handleSelectDateChange: (date: Date) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    placeholder: string;
    caption: string;
    allowPast: boolean;
    format: string;
    time: TimeObject;
} & {}, {
    placeholder: string;
    caption: string;
    allowPast: boolean;
    format: string;
}, true>);
export default _default;
//# sourceMappingURL=SimpleDateTimePicker.vue.d.ts.map