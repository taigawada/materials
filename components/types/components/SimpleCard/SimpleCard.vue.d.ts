import { PropType } from 'vue-demi';
interface Action {
    text: string;
    disabled?: boolean;
    loading?: boolean;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    hundleMainActionClick: () => void;
    hundleSubActionClick: () => void;
    cardWidth: () => {
        '--card-width': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    width: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    mainAction: {
        type: PropType<Action>;
        default: () => {
            text: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
    subAction: {
        type: PropType<Action>;
        default: () => {
            text: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    mainAction: {
        type: PropType<Action>;
        default: () => {
            text: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
    subAction: {
        type: PropType<Action>;
        default: () => {
            text: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    width: string;
    mainAction: Action;
    subAction: Action;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    hundleMainActionClick: () => void;
    hundleSubActionClick: () => void;
    cardWidth: () => {
        '--card-width': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    width: string;
    mainAction: Action;
    subAction: Action;
} & {}, {
    width: string;
    mainAction: Action;
    subAction: Action;
}, true>);
export default _default;
//# sourceMappingURL=SimpleCard.vue.d.ts.map