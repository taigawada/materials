import { PropType } from 'vue-demi';
interface ItemClickFunc {
    (arg0: number): void;
}
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    itemCheckBox: import("@vue/composition-api").Ref<any>;
    handleClickRow: (index: number, event: Event) => void;
    bulkCheckBox: import("@vue/composition-api").Ref<boolean>;
    indeterminateRef: import("@vue/composition-api").Ref<boolean>;
    handleBuldCheckBoxChange: (bool: boolean) => void;
    isSelected: (id: string | number) => boolean;
    handleItemCheckedChange: (bool: boolean, id: string | number) => void;
    rowStyles: () => {
        '--child-item-weights': string;
        '--child-item-height': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    items: {
        type: PropType<{
            id: string | number;
        }[]>;
        default: () => never[];
        required: false;
    };
    selectedItems: {
        type: PropType<(string | number)[]>;
        default: () => never[];
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
}, import("@vue/composition-api").ExtractPropTypes<{
    items: {
        type: PropType<{
            id: string | number;
        }[]>;
        default: () => never[];
        required: false;
    };
    selectedItems: {
        type: PropType<(string | number)[]>;
        default: () => never[];
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
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    items: {
        id: string | number;
    }[];
    selectedItems: (string | number)[];
    height: string;
    weight: number[];
    onClickItem: ItemClickFunc;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    itemCheckBox: import("@vue/composition-api").Ref<any>;
    handleClickRow: (index: number, event: Event) => void;
    bulkCheckBox: import("@vue/composition-api").Ref<boolean>;
    indeterminateRef: import("@vue/composition-api").Ref<boolean>;
    handleBuldCheckBoxChange: (bool: boolean) => void;
    isSelected: (id: string | number) => boolean;
    handleItemCheckedChange: (bool: boolean, id: string | number) => void;
    rowStyles: () => {
        '--child-item-weights': string;
        '--child-item-height': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    items: {
        id: string | number;
    }[];
    selectedItems: (string | number)[];
    height: string;
    weight: number[];
    onClickItem: ItemClickFunc;
} & {}, {
    items: {
        id: string | number;
    }[];
    selectedItems: (string | number)[];
    height: string;
    weight: number[];
    onClickItem: ItemClickFunc;
}, true>);
export default _default;
//# sourceMappingURL=SimpleResourceList.vue.d.ts.map