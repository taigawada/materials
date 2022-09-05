import { PropType } from 'vue-demi';
import { TimeObject } from '../../types/types';
import './TimePicker.scss';
declare const _default: import("vue-demi").DefineComponent<{
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
    minutesInterval: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    time: {
        type: PropType<TimeObject>;
        required: true;
    };
    interval: {
        type: PropType<12 | 24>;
        default: number;
        required: false;
    };
    minutesInterval: {
        type: NumberConstructor;
        default: number;
        required: false;
    };
}>>, {
    interval: 12 | 24;
    minutesInterval: number;
}>;
export default _default;
//# sourceMappingURL=TimePicker.d.ts.map