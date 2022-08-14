import { PropType } from 'vue-demi';
interface Item {
    value: string;
    label: string;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    select: import("@vue/composition-api").WritableComputedRef<string>;
    isError: import("@vue/composition-api").ComputedRef<boolean>;
}> & import("@vue/composition-api").Data, {}, {}, {
    initialValue: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    items: {
        type: PropType<Item[]>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    initialValue: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    items: {
        type: PropType<Item[]>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    caption: string;
    disabled: boolean;
    error: string;
    value: string;
    initialValue: string;
    items: Item[];
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    select: import("@vue/composition-api").WritableComputedRef<string>;
    isError: import("@vue/composition-api").ComputedRef<boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    caption: string;
    disabled: boolean;
    error: string;
    value: string;
    initialValue: string;
    items: Item[];
} & {}, {
    caption: string;
    disabled: boolean;
    error: string;
    value: string;
    initialValue: string;
}, true>);
export default _default;
//# sourceMappingURL=SimpleSelector.vue.d.ts.map