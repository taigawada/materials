import { PropType } from 'vue-demi';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    showInsideItems: import("@vue/composition-api").Ref<(string | number | null)[]>;
    centerShowIndex: import("@vue/composition-api").Ref<number>;
    insideContent: import("@vue/composition-api").Ref<HTMLElement | null>;
    smoothPickerStyles: (ownIndex: number | null) => {
        '--smooth-picker-content-width': string;
        '--smooth-picker-box-height': string;
        '--smooth-picker-item-height': string;
        '--contraction-ratio': number | undefined;
        '--border-left': string;
        '--border-right': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    items: {
        type: PropType<string[] | number[]>;
        required: true;
    };
    selected: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
        required: false;
    };
    suffix: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    itemContentHeight: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    distanceToDisplay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    whichSide: {
        type: PropType<"center" | "left" | "right" | undefined>;
        default: undefined;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    items: {
        type: PropType<string[] | number[]>;
        required: true;
    };
    selected: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
        required: false;
    };
    suffix: {
        type: StringConstructor;
        default: undefined;
        required: false;
    };
    width: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    itemContentHeight: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    distanceToDisplay: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
    whichSide: {
        type: PropType<"center" | "left" | "right" | undefined>;
        default: undefined;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    selected: string | number;
    width: string;
    items: string[] | number[];
    suffix: string;
    itemContentHeight: number;
    distanceToDisplay: number;
    whichSide: "center" | "left" | "right" | undefined;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    showInsideItems: import("@vue/composition-api").Ref<(string | number | null)[]>;
    centerShowIndex: import("@vue/composition-api").Ref<number>;
    insideContent: import("@vue/composition-api").Ref<HTMLElement | null>;
    smoothPickerStyles: (ownIndex: number | null) => {
        '--smooth-picker-content-width': string;
        '--smooth-picker-box-height': string;
        '--smooth-picker-item-height': string;
        '--contraction-ratio': number | undefined;
        '--border-left': string;
        '--border-right': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    selected: string | number;
    width: string;
    items: string[] | number[];
    suffix: string;
    itemContentHeight: number;
    distanceToDisplay: number;
    whichSide: "center" | "left" | "right" | undefined;
} & {}, {
    selected: string | number;
    width: string;
    suffix: string;
    itemContentHeight: number;
    distanceToDisplay: number;
    whichSide: "center" | "left" | "right" | undefined;
}, true>);
export default _default;
//# sourceMappingURL=SimpleSmoothPicker.vue.d.ts.map