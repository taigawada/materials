import { PropType } from 'vue-demi';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    onChangeSelect: (item: string, bool: boolean | undefined) => void;
    addItem: (item: string) => void;
    fieldChange: (value: string) => void;
    fieldRemove: () => void;
    filtered: import("@vue/composition-api").ComputedRef<string[]>;
    includeItem: import("@vue/composition-api").ComputedRef<(item: string) => boolean>;
    currentSelectItem: import("@vue/composition-api").ComputedRef<(item: string) => boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    enteredItemRef: import("@vue/composition-api").Ref<number | null>;
    mouseenterItem: (index: number) => void;
    mouseleaveItem: () => void;
    enteredItem: (index: number) => boolean;
    floatBoxHeightStyle: () => {
        '--float-box-height': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
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
    floatBoxHeight: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
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
    floatBoxHeight: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    search: boolean;
    placeholder: string;
    caption: string;
    remove: boolean;
    items: string[];
    fieldValue: string;
    selectedItems: string[];
    allowAdd: boolean;
    multiple: boolean;
    floatBoxHeight: string;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    isFocus: import("@vue/composition-api").Ref<boolean>;
    isEntered: import("@vue/composition-api").Ref<boolean>;
    onChangeSelect: (item: string, bool: boolean | undefined) => void;
    addItem: (item: string) => void;
    fieldChange: (value: string) => void;
    fieldRemove: () => void;
    filtered: import("@vue/composition-api").ComputedRef<string[]>;
    includeItem: import("@vue/composition-api").ComputedRef<(item: string) => boolean>;
    currentSelectItem: import("@vue/composition-api").ComputedRef<(item: string) => boolean>;
    mouseleave: () => void;
    mousedown: () => void;
    inFocus: () => void;
    outFocus: () => void;
    enteredItemRef: import("@vue/composition-api").Ref<number | null>;
    mouseenterItem: (index: number) => void;
    mouseleaveItem: () => void;
    enteredItem: (index: number) => boolean;
    floatBoxHeightStyle: () => {
        '--float-box-height': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    search: boolean;
    placeholder: string;
    caption: string;
    remove: boolean;
    items: string[];
    fieldValue: string;
    selectedItems: string[];
    allowAdd: boolean;
    multiple: boolean;
    floatBoxHeight: string;
} & {}, {
    search: boolean;
    placeholder: string;
    caption: string;
    remove: boolean;
    allowAdd: boolean;
    multiple: boolean;
    floatBoxHeight: string;
}, true>);
export default _default;
//# sourceMappingURL=SimpleCombobox.vue.d.ts.map