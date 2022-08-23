import { PropType, Ref } from 'vue-demi';
import './SimplePopover.scss';
declare const _default: import("vue-demi").DefineComponent<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    activatorRef: {
        type: PropType<Ref<HTMLElement | null>>;
        required: true;
    };
    translateX: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    translateY: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    activatorRef: {
        type: PropType<Ref<HTMLElement | null>>;
        required: true;
    };
    translateX: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    translateY: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}>>, {
    translateX: string;
    translateY: string;
}>;
export default _default;
//# sourceMappingURL=SimplePopover.d.ts.map