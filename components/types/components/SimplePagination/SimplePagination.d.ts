import { VNode } from 'vue-demi';
import './SimplePagination.scss';
declare const _default: import("vue-demi").DefineComponent<{
    length: {
        type: NumberConstructor;
        required: true;
    };
    current: {
        type: NumberConstructor;
        required: true;
    };
    suffix: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    length: {
        type: NumberConstructor;
        required: true;
    };
    current: {
        type: NumberConstructor;
        required: true;
    };
    suffix: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}>>, {
    suffix: string;
}>;
export default _default;
//# sourceMappingURL=SimplePagination.d.ts.map