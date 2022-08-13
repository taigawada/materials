import { PropType } from 'vue-demi';
interface MainAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
}
interface SubAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    onMainAction: () => void;
    onSubAction: () => void;
    handleDestroy: () => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    open: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: null;
        required: false;
    };
    mainAction: {
        type: PropType<MainAction>;
        default: null;
        required: false;
    };
    subAction: {
        type: PropType<SubAction>;
        default: null;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: null;
        required: false;
    };
    mainAction: {
        type: PropType<MainAction>;
        default: null;
        required: false;
    };
    subAction: {
        type: PropType<SubAction>;
        default: null;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    open: boolean;
    title: string;
    mainAction: MainAction;
    subAction: SubAction;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    onMainAction: () => void;
    onSubAction: () => void;
    handleDestroy: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    open: boolean;
    title: string;
    mainAction: MainAction;
    subAction: SubAction;
} & {}, {
    title: string;
    mainAction: MainAction;
    subAction: SubAction;
}, true>);
export default _default;
//# sourceMappingURL=SimpleModal.vue.d.ts.map