import { PropType } from 'vue-demi';
declare type Week = boolean[];
declare type Start = 'monday' | 'sunday';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    weekLength: import("@vue/composition-api").Ref<number>;
    weekArray: import("@vue/composition-api").ComputedRef<number[]>;
    weekdaysLength: import("@vue/composition-api").ComputedRef<6 | 7>;
    weekdaysArray: import("@vue/composition-api").ComputedRef<number[]>;
    handleClick: (week: number, weekDay: number) => void;
    handleAddWeek: () => void;
    handleDelWeek: () => void;
    enabled: import("@vue/composition-api").ComputedRef<(week: number, weekDay: number) => boolean>;
    dayOfWeekStr: (start: 0 | 1 | "monday" | "sunday", index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
}> & import("@vue/composition-api").Data, {}, {}, {
    weekValue: {
        type: PropType<Week[]>;
        default: () => boolean[][];
        required: true;
    };
    start: {
        type: PropType<Start>;
        default: string;
        required: false;
    };
    sunday: {
        type: BooleanConstructor;
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    weekValue: {
        type: PropType<Week[]>;
        default: () => boolean[][];
        required: true;
    };
    start: {
        type: PropType<Start>;
        default: string;
        required: false;
    };
    sunday: {
        type: BooleanConstructor;
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    sunday: boolean;
    start: Start;
    weekValue: Week[];
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    weekLength: import("@vue/composition-api").Ref<number>;
    weekArray: import("@vue/composition-api").ComputedRef<number[]>;
    weekdaysLength: import("@vue/composition-api").ComputedRef<6 | 7>;
    weekdaysArray: import("@vue/composition-api").ComputedRef<number[]>;
    handleClick: (week: number, weekDay: number) => void;
    handleAddWeek: () => void;
    handleDelWeek: () => void;
    enabled: import("@vue/composition-api").ComputedRef<(week: number, weekDay: number) => boolean>;
    dayOfWeekStr: (start: 0 | 1 | "monday" | "sunday", index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    sunday: boolean;
    start: Start;
    weekValue: Week[];
} & {}, {
    sunday: boolean;
    start: Start;
    weekValue: Week[];
}, true>);
export default _default;
//# sourceMappingURL=WeeklySelector.vue.d.ts.map