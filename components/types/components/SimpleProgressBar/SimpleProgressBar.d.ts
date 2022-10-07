import './SimpleProgressBar.scss';
declare const _default: import("vue-demi").DefineComponent<{
    progress: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    delay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    animation: {
        type: BooleanConstructor;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    progress: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    delay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    animation: {
        type: BooleanConstructor;
    };
}>>, {
    duration: number;
    delay: number;
    progress: number;
    animation: boolean;
}>;
export default _default;
//# sourceMappingURL=SimpleProgressBar.d.ts.map