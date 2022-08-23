import { PropType, VNode } from 'vue-demi';
import './SimpleDateTimePicker.scss';
declare const _default: import("vue-demi").DefineComponent<{
    initialDatetime: {
        type: DateConstructor;
        default: () => Date;
        required: false;
    };
    inputValue: {
        type: StringConstructor;
        required: true;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
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
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    initialDatetime: {
        type: DateConstructor;
        default: () => Date;
        required: false;
    };
    inputValue: {
        type: StringConstructor;
        required: true;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
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
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    placeholder: string;
    caption: string;
    allowPast: boolean;
    showRelatedDays: boolean;
    interval: 12 | 24;
    initialDatetime: Date;
}>;
export default _default;
//# sourceMappingURL=SimpleDateTimePicker.d.ts.map