import { PropType, VNode } from 'vue-demi';
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
    critical: {
        type: BooleanConstructor;
        required: false;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
    };
    criticalPlain: {
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
    fill: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    icon: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    textColor: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    iconSide: {
        type: PropType<"left" | "right">;
        default: string;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    primary: {
        type: BooleanConstructor;
        required: false;
    };
    normal: {
        type: BooleanConstructor;
        required: false;
    };
    critical: {
        type: BooleanConstructor;
        required: false;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
    };
    criticalPlain: {
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
    fill: {
        type: BooleanConstructor;
        required: false;
    };
    size: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    icon: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    textColor: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    iconSide: {
        type: PropType<"left" | "right">;
        default: string;
        required: false;
    };
}>>, {
    normal: boolean;
    fill: boolean;
    size: number;
    primary: boolean;
    critical: boolean;
    plain: boolean;
    criticalPlain: boolean;
    disabled: boolean;
    loading: boolean;
    url: string;
    external: boolean;
    icon: string;
    textColor: string;
    iconSide: "left" | "right";
}>;
export default _default;
//# sourceMappingURL=SimpleButton.d.ts.map