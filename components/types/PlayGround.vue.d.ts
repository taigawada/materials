import { weekBoolean } from './types/week';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    disabled: import("@vue/composition-api").Ref<boolean>;
    loading: import("@vue/composition-api").Ref<boolean>;
    handleButtonClick: () => Promise<void>;
    tabs: {
        label: string;
        id: string;
    }[];
    tabSelected: import("@vue/composition-api").Ref<number>;
    handleTabSelect: (select: number) => void;
    actions: {
        label: string;
        onAction: () => void;
    }[];
    actionsOpen: import("@vue/composition-api").Ref<boolean>;
    actionsOpenToggle: () => void;
    onClose: () => void;
    action: () => void;
    checked: import("@vue/composition-api").Ref<boolean>;
    handleChecked: (value: boolean) => void;
    fieldvalue: import("@vue/composition-api").Ref<string>;
    handleFieldChange: (value: string) => void;
    comboFieldRemove: () => void;
    handleTextFieldRemove: () => void;
    selectRef: import("@vue/composition-api").Ref<string>;
    handleSelectChange: (value: string) => void;
    selectItems: {
        value: string;
        label: string;
    }[];
    modalOpen: import("@vue/composition-api").Ref<boolean>;
    handleModalOpen: () => void;
    weekState: {
        week: [boolean, boolean, boolean, boolean, boolean, boolean, boolean][];
    };
    changeWeek: (newValue: weekBoolean[]) => void;
    comboSelected: import("@vue/composition-api").Ref<string[]>;
    comboField: import("@vue/composition-api").Ref<string>;
    comboFieldChange: (newValue: string) => void;
    comboItems: import("@vue/composition-api").Ref<string[]>;
    handleAddItems: (item: string) => void;
    handleRemoveItem: (item: string) => void;
    comboSelectedChange: (selected: Array<string>) => void;
    smoothPickerSelectItem: import("@vue/composition-api").Ref<string | number | undefined>;
    handleSmoothPickerChange: (selected: number | string) => void;
}> & import("@vue/composition-api").Data, {}, {}, {}, import("@vue/composition-api").ExtractPropTypes<{}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    disabled: import("@vue/composition-api").Ref<boolean>;
    loading: import("@vue/composition-api").Ref<boolean>;
    handleButtonClick: () => Promise<void>;
    tabs: {
        label: string;
        id: string;
    }[];
    tabSelected: import("@vue/composition-api").Ref<number>;
    handleTabSelect: (select: number) => void;
    actions: {
        label: string;
        onAction: () => void;
    }[];
    actionsOpen: import("@vue/composition-api").Ref<boolean>;
    actionsOpenToggle: () => void;
    onClose: () => void;
    action: () => void;
    checked: import("@vue/composition-api").Ref<boolean>;
    handleChecked: (value: boolean) => void;
    fieldvalue: import("@vue/composition-api").Ref<string>;
    handleFieldChange: (value: string) => void;
    comboFieldRemove: () => void;
    handleTextFieldRemove: () => void;
    selectRef: import("@vue/composition-api").Ref<string>;
    handleSelectChange: (value: string) => void;
    selectItems: {
        value: string;
        label: string;
    }[];
    modalOpen: import("@vue/composition-api").Ref<boolean>;
    handleModalOpen: () => void;
    weekState: {
        week: [boolean, boolean, boolean, boolean, boolean, boolean, boolean][];
    };
    changeWeek: (newValue: weekBoolean[]) => void;
    comboSelected: import("@vue/composition-api").Ref<string[]>;
    comboField: import("@vue/composition-api").Ref<string>;
    comboFieldChange: (newValue: string) => void;
    comboItems: import("@vue/composition-api").Ref<string[]>;
    handleAddItems: (item: string) => void;
    handleRemoveItem: (item: string) => void;
    comboSelectedChange: (selected: Array<string>) => void;
    smoothPickerSelectItem: import("@vue/composition-api").Ref<string | number | undefined>;
    handleSmoothPickerChange: (selected: number | string) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {}, {}, true>);
export default _default;
//# sourceMappingURL=PlayGround.vue.d.ts.map