declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    inputChange: (newValue: string) => void;
    currentSelectDate: import("@vue/composition-api").Ref<Date | undefined>;
    handleSelectDateChange: (date: Date) => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    selected: {
        type: DateConstructor;
        default: () => Date;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    selected: {
        type: DateConstructor;
        default: () => Date;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    selected: Date;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    inputValue: import("@vue/composition-api").Ref<string>;
    inputChange: (newValue: string) => void;
    currentSelectDate: import("@vue/composition-api").Ref<Date | undefined>;
    handleSelectDateChange: (date: Date) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    selected: Date;
} & {}, {
    selected: Date;
}, true>);
export default _default;
//# sourceMappingURL=SimpleDatePicker.vue.d.ts.map