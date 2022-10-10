import { PropType } from 'vue-demi';
import './SimpleSkeleton.scss';
declare const _default: import("vue-demi").DefineComponent<{
    display: {
        type: PropType<"block" | "inline">;
        default: string;
        required: false;
    };
    distribution: {
        type: PropType<"left" | "right" | "center">;
        default: string;
        required: false;
    };
    size: {
        type: PropType<{
            width: string;
            height: string;
        }>;
        default: () => {
            width: string;
            height: string;
        };
        required: false;
    };
    type: {
        type: PropType<"text" | "rect">;
        default: string;
        required: false;
    };
    round: {
        type: BooleanConstructor;
    };
    lines: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    display: {
        type: PropType<"block" | "inline">;
        default: string;
        required: false;
    };
    distribution: {
        type: PropType<"left" | "right" | "center">;
        default: string;
        required: false;
    };
    size: {
        type: PropType<{
            width: string;
            height: string;
        }>;
        default: () => {
            width: string;
            height: string;
        };
        required: false;
    };
    type: {
        type: PropType<"text" | "rect">;
        default: string;
        required: false;
    };
    round: {
        type: BooleanConstructor;
    };
    lines: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>>, {
    size: {
        width: string;
        height: string;
    };
    type: "text" | "rect";
    distribution: "left" | "right" | "center";
    display: "block" | "inline";
    round: boolean;
    lines: number;
}>;
export default _default;
//# sourceMappingURL=SimpleSkeleton.d.ts.map