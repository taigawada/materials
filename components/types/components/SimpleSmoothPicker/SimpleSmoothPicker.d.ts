import { PropType, VNode } from 'vue-demi';
import './SimpleSmoothPicker.scss';
declare const _default: import("vue-demi").DefineComponent<{
    items: {
        type: PropType<number[] | string[]>;
        required: true;
    };
    selected: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
        required: false;
    };
    suffix: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    itemContentHeight: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    distanceToDisplay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    whichSide: {
        type: PropType<"left" | "right" | "center" | undefined>;
        default: undefined;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    items: {
        type: PropType<number[] | string[]>;
        required: true;
    };
    selected: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
        required: false;
    };
    suffix: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    itemContentHeight: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    distanceToDisplay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    whichSide: {
        type: PropType<"left" | "right" | "center" | undefined>;
        default: undefined;
        required: false;
    };
}>>, {
    width: string;
    selected: string | number;
    suffix: string;
    itemContentHeight: number;
    distanceToDisplay: number;
    whichSide: "left" | "right" | "center" | undefined;
}>;
export default _default;
//# sourceMappingURL=SimpleSmoothPicker.d.ts.map