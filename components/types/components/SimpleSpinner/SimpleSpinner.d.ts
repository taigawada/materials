import { PropType } from 'vue-demi';
import './SimpleSpinner.scss';
declare type Size = 'tiny' | 'normal' | 'large';
declare const _default: import("vue-demi").DefineComponent<{
    size: {
        type: PropType<Size>;
        default: string;
        required: false;
    };
    color: {
        type: PropType<number[]>;
        default: () => number[];
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    size: {
        type: PropType<Size>;
        default: string;
        required: false;
    };
    color: {
        type: PropType<number[]>;
        default: () => number[];
        required: false;
    };
}>>, {
    size: Size;
    color: number[];
}>;
export default _default;
//# sourceMappingURL=SimpleSpinner.d.ts.map