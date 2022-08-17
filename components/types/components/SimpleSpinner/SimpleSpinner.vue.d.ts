import { PropType } from 'vue-demi';
declare type Size = 'tiny' | 'normal' | 'large';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    styles: () => {
        '--spinner-color': string;
        '--spinner-color-alpha': string;
        '--spinner-size': string;
        '--spinner-border-weight': string;
    };
}> & import("@vue/composition-api").Data, {}, {}, {
    size: {
        type: PropType<Size>;
        default: string;
        required: false;
    };
    color: {
        type: PropType<number[]>;
        default: () => number[];
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    size: {
        type: PropType<Size>;
        default: string;
        required: false;
    };
    color: {
        type: PropType<number[]>;
        default: () => number[];
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    size: Size;
    color: number[];
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    styles: () => {
        '--spinner-color': string;
        '--spinner-color-alpha': string;
        '--spinner-size': string;
        '--spinner-border-weight': string;
    };
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    size: Size;
    color: number[];
} & {}, {
    size: Size;
    color: number[];
}, true>);
export default _default;
//# sourceMappingURL=SimpleSpinner.vue.d.ts.map