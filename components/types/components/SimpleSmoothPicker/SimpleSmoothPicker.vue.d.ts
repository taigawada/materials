import { PropType } from 'vue-demi';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    showInsideItems: import("@vue/composition-api").Ref<(string | number | null)[]>;
    centerShowIndex: import("@vue/composition-api").Ref<number>;
    insideContent: import("@vue/composition-api").Ref<HTMLElement | null>;
    smoothPickerStyles: (ownIndex: number | null) => {
        '--smooth-picker-content-width': string;
        '--smooth-picker-box-height': string;
        '--smooth-picker-item-height': string;
        '--contraction-ratio': undefined;
        '--border-left': string;
        '--border-right': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    items: {
        type: PropType<string[] | number[]>;
        default: () => number[];
        required: false;
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
    itemContetHeight: {
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
        type: PropType<"left" | "right" | undefined>;
        default: undefined;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    items: {
        type: PropType<string[] | number[]>;
        default: () => number[];
        required: false;
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
    itemContetHeight: {
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
        type: PropType<"left" | "right" | undefined>;
        default: undefined;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    items: string[] | number[];
    suffix: string;
    selected: string | number;
    width: string;
    itemContetHeight: number;
    distanceToDisplay: number;
    whichSide: "left" | "right" | undefined;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    showInsideItems: import("@vue/composition-api").Ref<(string | number | null)[]>;
    centerShowIndex: import("@vue/composition-api").Ref<number>;
    insideContent: import("@vue/composition-api").Ref<HTMLElement | null>;
    smoothPickerStyles: (ownIndex: number | null) => {
        '--smooth-picker-content-width': string;
        '--smooth-picker-box-height': string;
        '--smooth-picker-item-height': string;
        '--contraction-ratio': undefined;
        '--border-left': string;
        '--border-right': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    items: string[] | number[];
    suffix: string;
    selected: string | number;
    width: string;
    itemContetHeight: number;
    distanceToDisplay: number;
    whichSide: "left" | "right" | undefined;
} & {}, {
    items: string[] | number[];
    suffix: string;
    selected: string | number;
    width: string;
    itemContetHeight: number;
    distanceToDisplay: number;
    whichSide: "left" | "right" | undefined;
}, true>);
export default _default;
//# sourceMappingURL=SimpleSmoothPicker.vue.d.ts.map