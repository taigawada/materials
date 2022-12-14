import './SimpleCombobox.scss';
import { PropType, VNode } from 'vue-demi';
declare const _default: import("vue-demi").DefineComponent<{
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    fieldValue: {
        type: StringConstructor;
        required: true;
    };
    items: {
        type: PropType<string[]>;
        required: true;
    };
    selectedItems: {
        type: PropType<string[]>;
        required: true;
    };
    allowAdd: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    search: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    remove: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    floatBoxHeight: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    fieldValue: {
        type: StringConstructor;
        required: true;
    };
    items: {
        type: PropType<string[]>;
        required: true;
    };
    selectedItems: {
        type: PropType<string[]>;
        required: true;
    };
    allowAdd: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    search: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    remove: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    floatBoxHeight: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>>, {
    search: boolean;
    placeholder: string;
    caption: string;
    remove: boolean;
    error: string;
    allowAdd: boolean;
    multiple: boolean;
    floatBoxHeight: number;
}>;
export default _default;
//# sourceMappingURL=SimpleCombobox.d.ts.map