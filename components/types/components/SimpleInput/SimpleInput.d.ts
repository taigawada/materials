import './SimpleInput.scss';
declare const _default: import("vue-demi").DefineComponent<{
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    icon: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    captionHidden: {
        type: BooleanConstructor;
        required: false;
    };
    remove: {
        type: BooleanConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        require: boolean;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    autofocus: {
        type: BooleanConstructor;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    icon: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    captionHidden: {
        type: BooleanConstructor;
        required: false;
    };
    remove: {
        type: BooleanConstructor;
        required: false;
    };
    readonly: {
        type: BooleanConstructor;
        require: boolean;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    autofocus: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    width: string;
    disabled: boolean;
    icon: string;
    placeholder: string;
    caption: string;
    captionHidden: boolean;
    remove: boolean;
    readonly: boolean;
    error: string;
    autofocus: boolean;
}>;
export default _default;
//# sourceMappingURL=SimpleInput.d.ts.map