import { PropType } from 'vue-demi';
import './SimpleStack.scss';
declare const _default: import("vue-demi").DefineComponent<{
    spacing: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
    };
    alignment: {
        type: PropType<"lower" | "center" | "upper">;
        default: string;
        required: false;
    };
    distribution: {
        type: PropType<"left" | "right" | "center" | "spaceBetween" | "spaceAround">;
        default: string;
        required: false;
    };
    wrap: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    spacing: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    vertical: {
        type: BooleanConstructor;
        required: false;
    };
    alignment: {
        type: PropType<"lower" | "center" | "upper">;
        default: string;
        required: false;
    };
    distribution: {
        type: PropType<"left" | "right" | "center" | "spaceBetween" | "spaceAround">;
        default: string;
        required: false;
    };
    wrap: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    spacing: string;
    vertical: boolean;
    alignment: "lower" | "center" | "upper";
    distribution: "left" | "right" | "center" | "spaceBetween" | "spaceAround";
    wrap: boolean;
}>;
export default _default;
//# sourceMappingURL=SimpleStack.d.ts.map