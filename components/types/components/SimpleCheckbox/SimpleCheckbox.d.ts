import { VNode } from 'vue-demi';
import './SimpleCheckbox.scss';
declare const _default: import("vue-demi").DefineComponent<{
    label: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    value: {
        type: BooleanConstructor;
        required: true;
    };
    indeterminate: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    value: {
        type: BooleanConstructor;
        required: true;
    };
    indeterminate: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>>, {
    size: string;
    label: string;
    indeterminate: boolean;
}>;
export default _default;
//# sourceMappingURL=SimpleCheckbox.d.ts.map