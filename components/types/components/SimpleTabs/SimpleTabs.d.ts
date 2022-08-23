import { PropType } from 'vue-demi';
import './SimpleTabs.scss';
interface Tab {
    id: string;
    label: string;
}
declare const _default: import("vue-demi").DefineComponent<{
    tabs: {
        type: PropType<Tab[]>;
        required: true;
    };
    selected: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    tabs: {
        type: PropType<Tab[]>;
        required: true;
    };
    selected: {
        type: NumberConstructor;
        default: number;
        required: true;
    };
}>>, {
    selected: number;
}>;
export default _default;
//# sourceMappingURL=SimpleTabs.d.ts.map