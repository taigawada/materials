import { PropType, VNode } from 'vue-demi';
import { CyclePeriod } from '../WeeklySelector/useWeeklySelector';
import './SimpleCalender.scss';
import { Holidays } from '../../utils/useHolidays';
declare const _default: import("vue-demi").DefineComponent<{
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
        type: PropType<CyclePeriod[]>;
        default: () => never[];
        required: false;
    };
    holidays: {
        type: PropType<Holidays[] | null>;
        default: undefined;
        required: false;
    };
    hiddenHighLightInHolidays: {
        type: BooleanConstructor;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
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
        type: PropType<CyclePeriod[]>;
        default: () => never[];
        required: false;
    };
    holidays: {
        type: PropType<Holidays[] | null>;
        default: undefined;
        required: false;
    };
    hiddenHighLightInHolidays: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    selected: Date;
    start: "monday" | "sunday";
    select: boolean;
    allowPast: boolean;
    showRelatedDays: boolean;
    highLights: CyclePeriod[];
    holidays: Holidays[] | null;
    hiddenHighLightInHolidays: boolean;
}>;
export default _default;
//# sourceMappingURL=SimpleCalender.d.ts.map