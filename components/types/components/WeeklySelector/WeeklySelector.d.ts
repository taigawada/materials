import { PropType, VNode } from 'vue-demi';
import './WeeklySelector.scss';
declare type Week = boolean[];
declare type Start = 'monday' | 'sunday';
declare const _default: import("vue-demi").DefineComponent<{
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
}, () => VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
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
}>>, {
    start: Start;
    sunday: boolean;
    weekValue: Week[];
}>;
export default _default;
//# sourceMappingURL=WeeklySelector.d.ts.map