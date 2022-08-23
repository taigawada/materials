import { PropType } from 'vue-demi';
import './SimpleTimePicker.scss';
declare const _default: import("vue-demi").DefineComponent<{
    initialTime: {
        type: DateConstructor;
        default: undefined;
        required: false;
    };
    inputValue: {
        type: StringConstructor;
        required: true;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    initialTime: {
        type: DateConstructor;
        default: undefined;
        required: false;
    };
    inputValue: {
        type: StringConstructor;
        required: true;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
}>>, {
    placeholder: string;
    caption: string;
    interval: 12 | 24;
    initialTime: Date;
}>;
export default _default;
//# sourceMappingURL=SimpleTimePicker.d.ts.map