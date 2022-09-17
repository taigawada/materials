import { RendererElement } from 'vue';
import './useAccordionAnimation.scss';
export declare const nextFrame: (fn: () => void) => void;
export declare const useAccordionAnimation: (height?: number | undefined) => {
    nextFrame: (fn: () => void) => void;
    accordionEnter: (el: HTMLElement | RendererElement) => void;
    accordionLeave: (el: HTMLElement | RendererElement) => void;
    accordionAfterEnter: (el: HTMLElement | RendererElement) => void;
    accordionAfterLeave: (el: HTMLElement | RendererElement) => void;
};
//# sourceMappingURL=useAccordionAnimation.d.ts.map