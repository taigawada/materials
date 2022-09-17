import './SimpleSaveBar.scss';
import { PropType } from 'vue-demi';
interface Button {
    label: string;
    loading?: boolean;
    disabled?: boolean;
    onAction?: () => unknown;
}
declare const _default: import("vue-demi").DefineComponent<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    saveButton: {
        type: PropType<Button>;
        default: () => {
            label: string;
        };
    };
    discardButton: {
        type: PropType<Button>;
        default: () => {
            label: string;
        };
    };
    cardText: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    open: {
        type: BooleanConstructor;
        required: true;
    };
    saveButton: {
        type: PropType<Button>;
        default: () => {
            label: string;
        };
    };
    discardButton: {
        type: PropType<Button>;
        default: () => {
            label: string;
        };
    };
    cardText: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>>, {
    saveButton: Button;
    discardButton: Button;
    cardText: string;
}>;
export default _default;
//# sourceMappingURL=SimpleSaveBar.d.ts.map