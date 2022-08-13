import { PropType } from 'vue-demi';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    styles: import("@vue/composition-api").ComputedRef<{
        '--align-items': string;
        '--justify-content': string;
        wrap: string;
    }>;
    spacingStyle: () => {
        margin: string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    spacing: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    alignment: {
        type: PropType<"lower" | "center" | "upper">;
        default: string;
        required: false;
    };
    distribution: {
        type: PropType<"center" | "left" | "right" | "spaceBetween" | "spaceAround">;
        default: string;
        required: false;
    };
    wrap: {
        type: BooleanConstructor;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    spacing: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    alignment: {
        type: PropType<"lower" | "center" | "upper">;
        default: string;
        required: false;
    };
    distribution: {
        type: PropType<"center" | "left" | "right" | "spaceBetween" | "spaceAround">;
        default: string;
        required: false;
    };
    wrap: {
        type: BooleanConstructor;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    spacing: string;
    alignment: "lower" | "center" | "upper";
    distribution: "center" | "left" | "right" | "spaceBetween" | "spaceAround";
    wrap: boolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    styles: import("@vue/composition-api").ComputedRef<{
        '--align-items': string;
        '--justify-content': string;
        wrap: string;
    }>;
    spacingStyle: () => {
        margin: string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    spacing: string;
    alignment: "lower" | "center" | "upper";
    distribution: "center" | "left" | "right" | "spaceBetween" | "spaceAround";
    wrap: boolean;
} & {}, {
    spacing: string;
    alignment: "lower" | "center" | "upper";
    distribution: "center" | "left" | "right" | "spaceBetween" | "spaceAround";
    wrap: boolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleStack.vue.d.ts.map