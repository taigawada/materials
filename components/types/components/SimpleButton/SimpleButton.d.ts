import { VNode } from 'vue-demi';
import './SimpleButton.scss';
declare const _default: import("vue-demi").DefineComponent<{
    primary: {
        type: BooleanConstructor;
        required: false;
    };
    normal: {
        type: BooleanConstructor;
        required: false;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    url: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    external: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    primary: {
        type: BooleanConstructor;
        required: false;
    };
    normal: {
        type: BooleanConstructor;
        required: false;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    url: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    external: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>>, {
    normal: boolean;
    size: number;
    primary: boolean;
    plain: boolean;
    disabled: boolean;
    loading: boolean;
    url: string;
    external: boolean;
}>;
export default _default;
//# sourceMappingURL=SimpleButton.d.ts.map