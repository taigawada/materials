import { PropType } from 'vue-demi';
interface Tab {
    id: string;
    label: string;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    hundleSelect: (index: number) => void;
    isEntered: import("@vue/composition-api").Ref<number | undefined>;
    mouseenter: (index: number) => void;
    mouseleave: () => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    tabs: {
        type: PropType<Tab[]>;
        required: true;
    };
    selected: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    tabs: {
        type: PropType<Tab[]>;
        required: true;
    };
    selected: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    tabs: Tab[];
    selected: number;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    hundleSelect: (index: number) => void;
    isEntered: import("@vue/composition-api").Ref<number | undefined>;
    mouseenter: (index: number) => void;
    mouseleave: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    tabs: Tab[];
    selected: number;
} & {}, {
    selected: number;
}, true>);
export default _default;
//# sourceMappingURL=SimpleTabs.vue.d.ts.map