import { PropType, VNode } from 'vue-demi';
import './SimpleSelector.scss';
interface Item {
    value: string;
    label: string;
    helpText?: string;
}
declare const _default: import("vue-demi").DefineComponent<{
    radio: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    initialValue: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    items: {
        type: PropType<Item[]>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    radio: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    initialValue: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    value: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    items: {
        type: PropType<Item[]>;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    caption: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    error: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
}>>, {
    disabled: boolean;
    value: string;
    caption: string;
    error: string;
    radio: boolean;
    initialValue: string;
}>;
export default _default;
//# sourceMappingURL=SimpleSelector.d.ts.map