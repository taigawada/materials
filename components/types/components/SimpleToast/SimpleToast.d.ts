import './SimpleToast.scss';
import { PropType } from 'vue-demi';
interface toastAction {
    label: string;
    onAction: () => void;
}
declare const _default: import("vue-demi").DefineComponent<{
    active: {
        type: BooleanConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    content: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    action: {
        type: PropType<toastAction>;
        default: undefined;
        required: false;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    content: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    action: {
        type: PropType<toastAction>;
        default: undefined;
        required: false;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    duration: number;
    action: toastAction;
    error: boolean;
    content: string;
}>;
export default _default;
//# sourceMappingURL=SimpleToast.d.ts.map