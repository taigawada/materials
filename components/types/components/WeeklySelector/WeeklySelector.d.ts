import './WeeklySelector.scss';
import { PropType, VNode } from 'vue-demi';
import { CyclePeriod } from './useWeeklySelector';
declare type Start = 'monday' | 'sunday';
declare const _default: import("vue-demi").DefineComponent<{
    weekValue: {
        type: PropType<CyclePeriod[]>;
        default: () => never[];
        required: true;
    };
    isEachWeek: {
        type: BooleanConstructor;
        required: true;
    };
    start: {
        type: PropType<Start>;
        default: string;
        required: false;
    };
    sunday: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    weekValue: {
        type: PropType<CyclePeriod[]>;
        default: () => never[];
        required: true;
    };
    isEachWeek: {
        type: BooleanConstructor;
        required: true;
    };
    start: {
        type: PropType<Start>;
        default: string;
        required: false;
    };
    sunday: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
}>>, {
    start: Start;
    sunday: boolean;
    weekValue: CyclePeriod[];
}>;
export default _default;
//# sourceMappingURL=WeeklySelector.d.ts.map