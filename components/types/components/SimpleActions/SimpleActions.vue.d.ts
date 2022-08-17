import { PropType } from 'vue-demi';
interface Actions {
    label: string;
    onAction: () => unknown;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    onClick: () => void;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mousedown: () => void;
    mouseup: () => void;
    mouseenter: () => void;
    mouseleave: () => void;
    simpleActionComponentBase: import("@vue/composition-api").Ref<any>;
    activator: import("@vue/composition-api").Ref<HTMLImageElement | null>;
    parentWidth: import("@vue/composition-api").ComputedRef<{
        '--parent-width': string;
    }>;
    ArrowDown: any;
}> & import("@vue/composition-api").Data, {}, {}, {
    open: BooleanConstructor;
    actions: {
        type: PropType<Actions[]>;
        required: true;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    open: BooleanConstructor;
    actions: {
        type: PropType<Actions[]>;
        required: true;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    open: boolean;
    actions: Actions[];
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    onClick: () => void;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    mousedown: () => void;
    mouseup: () => void;
    mouseenter: () => void;
    mouseleave: () => void;
    simpleActionComponentBase: import("@vue/composition-api").Ref<any>;
    activator: import("@vue/composition-api").Ref<HTMLImageElement | null>;
    parentWidth: import("@vue/composition-api").ComputedRef<{
        '--parent-width': string;
    }>;
    ArrowDown: any;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    open: boolean;
    actions: Actions[];
} & {}, {
    open: boolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleActions.vue.d.ts.map