declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    hundleChange: () => void;
    CheckboxSize: () => {
        '--checkbox-size': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    label: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    value: {
        type: BooleanConstructor;
        required: true;
    };
    indeterminate: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    value: {
        type: BooleanConstructor;
        required: true;
    };
    indeterminate: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    size: string;
    label: string;
    value: boolean;
    indeterminate: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    hundleChange: () => void;
    CheckboxSize: () => {
        '--checkbox-size': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    size: string;
    label: string;
    value: boolean;
    indeterminate: boolean;
} & {}, {
    size: string;
    label: string;
    indeterminate: boolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleCheckbox.vue.d.ts.map