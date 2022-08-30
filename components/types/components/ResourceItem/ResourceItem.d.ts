import { PropType } from 'vue-demi';
import './ResourceItem.scss';
declare const _default: import("vue-demi").DefineComponent<{
    sort: {
        type: BooleanConstructor;
        required: false;
    };
    asc: {
        type: BooleanConstructor;
        required: false;
    };
    distribution: {
        type: PropType<"left" | "right" | "center">;
        default: string;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    sort: {
        type: BooleanConstructor;
        required: false;
    };
    asc: {
        type: BooleanConstructor;
        required: false;
    };
    distribution: {
        type: PropType<"left" | "right" | "center">;
        default: string;
        required: false;
    };
}>>, {
    sort: boolean;
    distribution: "left" | "right" | "center";
    asc: boolean;
}>;
export default _default;
//# sourceMappingURL=ResourceItem.d.ts.map