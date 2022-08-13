declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    handleClick: () => void;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mousedown: () => void;
    mouseup: () => void;
    mouseenter: () => void;
    mouseleave: () => void;
    sizeToPixel: import("@vue/composition-api").ComputedRef<{
        '--props-size': string;
    }>;
    target: import("@vue/composition-api").ComputedRef<"_blank" | "_self">;
    spinnerColor: import("@vue/composition-api").ComputedRef<number[]>;
}> & import("@vue/composition-api").Data, {}, {}, {
    primary: {
        type: BooleanConstructor;
        required: false;
    };
    normal: {
        type: BooleanConstructor;
        required: false;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    url: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    external: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    primary: {
        type: BooleanConstructor;
        required: false;
    };
    normal: {
        type: BooleanConstructor;
        required: false;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    url: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    external: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    normal: boolean;
    size: number;
    primary: boolean;
    plain: boolean;
    disabled: boolean;
    loading: boolean;
    url: string;
    external: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    handleClick: () => void;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mousedown: () => void;
    mouseup: () => void;
    mouseenter: () => void;
    mouseleave: () => void;
    sizeToPixel: import("@vue/composition-api").ComputedRef<{
        '--props-size': string;
    }>;
    target: import("@vue/composition-api").ComputedRef<"_blank" | "_self">;
    spinnerColor: import("@vue/composition-api").ComputedRef<number[]>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    normal: boolean;
    size: number;
    primary: boolean;
    plain: boolean;
    disabled: boolean;
    loading: boolean;
    url: string;
    external: boolean;
} & {}, {
    normal: boolean;
    size: number;
    primary: boolean;
    plain: boolean;
    disabled: boolean;
    loading: boolean;
    url: string;
    external: boolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleButton.vue.d.ts.map