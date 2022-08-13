import { PropType } from 'vue-demi';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    insideContent: import("@vue/composition-api").Ref<HTMLElement | null>;
    handleEnter: () => void;
    handleStart: () => void;
    handleMove: () => void;
    handleEnd: () => void;
    handleCancel: () => void;
    handleScroll: () => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    items: {
        type: PropType<string[] | number[]>;
        default: () => number[];
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    items: {
        type: PropType<string[] | number[]>;
        default: () => number[];
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    items: string[] | number[];
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    insideContent: import("@vue/composition-api").Ref<HTMLElement | null>;
    handleEnter: () => void;
    handleStart: () => void;
    handleMove: () => void;
    handleEnd: () => void;
    handleCancel: () => void;
    handleScroll: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    items: string[] | number[];
} & {}, {
    items: string[] | number[];
}, true>);
export default _default;
//# sourceMappingURL=SimpleSmoothPicker.vue.d.ts.map