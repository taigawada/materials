import { PropType, VNode } from 'vue-demi';
import { CyclePeriod } from '@/utils/utils';
import './SimpleCalender.scss';
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
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
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
}>>, {
    selected: Date;
    start: "monday" | "sunday";
    select: boolean;
    allowPast: boolean;
    showRelatedDays: boolean;
    highLights: CyclePeriod[];
}>;
export default _default;
//# sourceMappingURL=SimpleCalender.d.ts.map