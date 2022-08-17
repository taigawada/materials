declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    handleFocusIn: () => void;
    handleFocusOut: () => void;
    hundleRemove: () => void;
    text: import("@vue/composition-api").WritableComputedRef<string>;
    appearRemoveButton: import("@vue/composition-api").ComputedRef<boolean>;
    isError: import("@vue/composition-api").ComputedRef<boolean>;
    widthStyle: () => {
        '--simple-input-width': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    remove: {
        type: BooleanConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        require: boolean;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    remove: {
        type: BooleanConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        require: boolean;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    width: string;
    value: string;
    placeholder: string;
    caption: string;
    remove: boolean;
    readonly: boolean;
    error: string;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    handleFocusIn: () => void;
    handleFocusOut: () => void;
    hundleRemove: () => void;
    text: import("@vue/composition-api").WritableComputedRef<string>;
    appearRemoveButton: import("@vue/composition-api").ComputedRef<boolean>;
    isError: import("@vue/composition-api").ComputedRef<boolean>;
    widthStyle: () => {
        '--simple-input-width': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    width: string;
    value: string;
    placeholder: string;
    caption: string;
    remove: boolean;
    readonly: boolean;
    error: string;
} & {}, {
    width: string;
    placeholder: string;
    caption: string;
    remove: boolean;
    readonly: boolean;
    error: string;
}, true>);
export default _default;
//# sourceMappingURL=SimpleInput.vue.d.ts.map