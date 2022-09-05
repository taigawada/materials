import { PropType } from 'vue-demi';
import './SimpleCard.scss';
interface Action {
    label: string;
    disabled?: boolean;
    loading?: boolean;
    onAction?: () => unknown;
}
declare const _default: import("vue-demi").DefineComponent<{
    width: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    mainAction: {
        type: PropType<Action>;
        default: () => {
            label: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
    subAction: {
        type: PropType<Action>;
        default: () => {
            label: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
        require: boolean;
    };
    mainAction: {
        type: PropType<Action>;
        default: () => {
            label: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
    subAction: {
        type: PropType<Action>;
        default: () => {
            label: string;
            disabled: boolean;
            loading: boolean;
        };
        require: boolean;
    };
}>>, {
    width: string;
    mainAction: Action;
    subAction: Action;
}>;
export default _default;
//# sourceMappingURL=SimpleCard.d.ts.map