import { PropType } from 'vue-demi';
import './SimpleModal.scss';
interface MainAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    isCritical?: boolean;
    onAction?: () => unknown;
}
interface SubAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    onAction?: () => unknown;
}
declare const _default: import("vue-demi").DefineComponent<{
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
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
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
}>>, {
    title: string;
    mainAction: MainAction;
    subAction: SubAction;
}>;
export default _default;
//# sourceMappingURL=SimpleModal.d.ts.map