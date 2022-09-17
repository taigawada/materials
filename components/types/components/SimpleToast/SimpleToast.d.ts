import './SimpleToast.scss';
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
    error: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    error: boolean;
    duration: number;
    content: string;
}>;
export default _default;
//# sourceMappingURL=SimpleToast.d.ts.map