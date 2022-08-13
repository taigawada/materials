declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    handleFocusIn: () => void;
    handleFocusOut: () => void;
    hundleRemove: () => void;
    text: import("@vue/composition-api").WritableComputedRef<string>;
    appearRemoveButton: import("@vue/composition-api").ComputedRef<boolean>;
}> & import("@vue/composition-api").Data, {}, {}, {
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
        default: string;
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
}, import("@vue/composition-api").ExtractPropTypes<{
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
        default: string;
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
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    value: string;
    placeholder: string;
    caption: string;
    remove: boolean;
    readonly: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    handleFocusIn: () => void;
    handleFocusOut: () => void;
    hundleRemove: () => void;
    text: import("@vue/composition-api").WritableComputedRef<string>;
    appearRemoveButton: import("@vue/composition-api").ComputedRef<boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    value: string;
    placeholder: string;
    caption: string;
    remove: boolean;
    readonly: boolean;
} & {}, {
    placeholder: string;
    caption: string;
    remove: boolean;
    readonly: boolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleInput.vue.d.ts.map