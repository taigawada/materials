import { PropType } from 'vue-demi';
interface Item {
    value: string;
    label: string;
    helpText?: string;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    handleRadioClick: (newSelect: string) => void;
    select: import("@vue/composition-api").WritableComputedRef<string>;
    isError: () => boolean;
}> & import("@vue/composition-api").Data, {}, {}, {
    radio: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
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
    radio: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
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
    disabled: boolean;
    value: string;
    caption: string;
    error: string;
    radio: boolean;
    initialValue: string;
    items: Item[];
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    handleRadioClick: (newSelect: string) => void;
    select: import("@vue/composition-api").WritableComputedRef<string>;
    isError: () => boolean;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    disabled: boolean;
    value: string;
    caption: string;
    error: string;
    radio: boolean;
    initialValue: string;
    items: Item[];
} & {}, {
    disabled: boolean;
    value: string;
    caption: string;
    error: string;
    radio: boolean;
    initialValue: string;
}, true>);
export default _default;
//# sourceMappingURL=SimpleSelector.vue.d.ts.map