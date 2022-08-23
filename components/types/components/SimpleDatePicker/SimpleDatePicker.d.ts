import './SimpleDatePicker.scss';
declare const _default: import("vue-demi").DefineComponent<{
    initialDate: {
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
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    initialDate: {
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
    allowPast: {
        type: BooleanConstructor;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    placeholder: string;
    caption: string;
    allowPast: boolean;
    showRelatedDays: boolean;
    initialDate: Date;
}>;
export default _default;
//# sourceMappingURL=SimpleDatePicker.d.ts.map