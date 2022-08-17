declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    currentSelectDate: import("@vue/composition-api").Ref<Date | undefined>;
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
    selected: {
        type: DateConstructor;
        default: () => Date;
        required: false;
    };
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        default: boolean;
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
    selected: {
        type: DateConstructor;
        default: () => Date;
        required: false;
    };
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    selected: Date;
    placeholder: string;
    caption: string;
    allowPast: boolean;
    showRelatedDays: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    currentSelectDate: import("@vue/composition-api").Ref<Date | undefined>;
    handleSelectDateChange: (date: Date) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    selected: Date;
    placeholder: string;
    caption: string;
    allowPast: boolean;
    showRelatedDays: boolean;
} & {}, {
    selected: Date;
    placeholder: string;
    caption: string;
    allowPast: boolean;
    showRelatedDays: boolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleDatePicker.vue.d.ts.map