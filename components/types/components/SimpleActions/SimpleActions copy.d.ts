import { PropType } from 'vue-demi';
import './SimpleActions.scss';
interface Actions {
    label: string;
    onAction: () => unknown;
}
declare const _default: import("vue-demi").DefineComponent<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    actions: {
        type: PropType<Actions[]>;
        required: true;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    actions: {
        type: PropType<Actions[]>;
        required: true;
    };
}>>, {}>;
export default _default;
//# sourceMappingURL=SimpleActions%20copy.d.ts.map