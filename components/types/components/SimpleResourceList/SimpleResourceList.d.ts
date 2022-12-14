import { PropType, VNode } from 'vue-demi';
import './SimpleResourceList.scss';
interface ItemClickFunc {
    (arg1: number, arg2: Event): void;
}
declare const _default: import("vue-demi").DefineComponent<{
    items: {
        type: PropType<{
            id: string | number;
        }[]>;
        default: () => never[];
        required: false;
    };
    select: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    selectedItems: {
        type: PropType<(string | number)[]>;
        default: () => never[];
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    height: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    weight: {
        type: PropType<number[]>;
        default: () => number[];
        required: true;
    };
    onClickItem: {
        type: PropType<ItemClickFunc>;
        default: undefined;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    items: {
        type: PropType<{
            id: string | number;
        }[]>;
        default: () => never[];
        required: false;
    };
    select: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    selectedItems: {
        type: PropType<(string | number)[]>;
        default: () => never[];
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    height: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    weight: {
        type: PropType<number[]>;
        default: () => number[];
        required: true;
    };
    onClickItem: {
        type: PropType<ItemClickFunc>;
        default: undefined;
        required: false;
    };
}>>, {
    height: string;
    loading: boolean;
    items: {
        id: string | number;
    }[];
    select: boolean;
    selectedItems: (string | number)[];
    weight: number[];
    onClickItem: ItemClickFunc;
}>;
export default _default;
//# sourceMappingURL=SimpleResourceList.d.ts.map