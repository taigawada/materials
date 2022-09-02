import { PropType, Ref } from 'vue-demi';
import './SimplePopover.scss';
interface ActivatorRect {
    height: Ref<number>;
    bottom: Ref<number>;
    left: Ref<number>;
    right: Ref<number>;
    top: Ref<number>;
    width: Ref<number>;
    x: Ref<number>;
    y: Ref<number>;
    update: () => void;
}
declare const _default: import("vue-demi").DefineComponent<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    activatorRect: {
        type: PropType<ActivatorRect | null>;
        default: null;
        required: false;
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
    activatorRect: {
        type: PropType<ActivatorRect | null>;
        default: null;
        required: false;
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
    activatorRect: ActivatorRect | null;
    translateX: string;
    translateY: string;
}>;
export default _default;
//# sourceMappingURL=SimplePopover.d.ts.map