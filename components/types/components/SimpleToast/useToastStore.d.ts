/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { InjectionKey } from 'vue-demi';
export default function useToastTimerStore(): {
    readonly timerKeyArray: {
        hasRef: () => boolean;
        refresh: () => NodeJS.Timeout;
        [Symbol.toPrimitive]: () => number;
        ref: () => NodeJS.Timeout;
        unref: () => NodeJS.Timeout;
    }[];
    setTimerKey(timerKey: NodeJS.Timeout): void;
    resetTimerKey(timerKey: NodeJS.Timeout | null): void;
};
export declare type ToastTimerStore = ReturnType<typeof useToastTimerStore>;
export declare const ToastTimerKey: InjectionKey<ToastTimerStore>;
//# sourceMappingURL=useToastStore.d.ts.map