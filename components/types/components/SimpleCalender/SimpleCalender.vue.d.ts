import { PropType } from 'vue-demi';
import { format, getDate, isSameMonth } from 'date-fns';
import { monthBoolean } from '@/types/types';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    mouseEnter: (weekIndex: number, weekDayIndex: number) => void;
    mouseLeave: () => void;
    isEntered: (weekIndex: number, weekDayIndex: number) => boolean;
    format: typeof format;
    showHighLights: (date: Date) => boolean | [number, number] | undefined;
    handleDateSelect: (date: Date, weekIndex: number, weekDayIndex: number) => void;
    getDate: typeof getDate;
    showDate: (date: Date) => number | "";
    showDateString: () => string;
    dayWeekArray: number[];
    dayOfWeekStr: (start: 0 | 1 | "monday" | "sunday", index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
    currentShowDate: import("@vue/composition-api").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        getVarDate: () => VarDate;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    handleAddMonth: () => void;
    handleSubMonth: () => void;
    getCalendarArray: import("@vue/composition-api").ComputedRef<Date[][]>;
    isSameMonth: typeof isSameMonth;
    isPastDay: (day: Date) => boolean;
    pointer: import("@vue/composition-api").ComputedRef<{
        '--cursor-calender-date': string;
    }>;
}> & import("@vue/composition-api").Data, {}, {}, {
    start: {
        type: PropType<"monday" | "sunday">;
        default: string;
        required: false;
    };
    select: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    selected: {
        type: DateConstructor;
        default: undefined;
        required: false;
    };
    allowPast: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    highLights: {
        type: PropType<monthBoolean>;
        default: () => never[];
        required: false;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    start: {
        type: PropType<"monday" | "sunday">;
        default: string;
        required: false;
    };
    select: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    selected: {
        type: DateConstructor;
        default: undefined;
        required: false;
    };
    allowPast: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    showRelatedDays: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    highLights: {
        type: PropType<monthBoolean>;
        default: () => never[];
        required: false;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    selected: Date;
    start: "monday" | "sunday";
    select: boolean;
    allowPast: boolean;
    showRelatedDays: boolean;
    highLights: monthBoolean;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    mouseEnter: (weekIndex: number, weekDayIndex: number) => void;
    mouseLeave: () => void;
    isEntered: (weekIndex: number, weekDayIndex: number) => boolean;
    format: typeof format;
    showHighLights: (date: Date) => boolean | [number, number] | undefined;
    handleDateSelect: (date: Date, weekIndex: number, weekDayIndex: number) => void;
    getDate: typeof getDate;
    showDate: (date: Date) => number | "";
    showDateString: () => string;
    dayWeekArray: number[];
    dayOfWeekStr: (start: 0 | 1 | "monday" | "sunday", index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
    currentShowDate: import("@vue/composition-api").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        getVarDate: () => VarDate;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    handleAddMonth: () => void;
    handleSubMonth: () => void;
    getCalendarArray: import("@vue/composition-api").ComputedRef<Date[][]>;
    isSameMonth: typeof isSameMonth;
    isPastDay: (day: Date) => boolean;
    pointer: import("@vue/composition-api").ComputedRef<{
        '--cursor-calender-date': string;
    }>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    selected: Date;
    start: "monday" | "sunday";
    select: boolean;
    allowPast: boolean;
    showRelatedDays: boolean;
    highLights: monthBoolean;
} & {}, {
    selected: Date;
    start: "monday" | "sunday";
    select: boolean;
    allowPast: boolean;
    showRelatedDays: boolean;
    highLights: monthBoolean;
}, true>);
export default _default;
//# sourceMappingURL=SimpleCalender.vue.d.ts.map