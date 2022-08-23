import Vue, { VNode } from 'vue';

declare global {
    // eslint-disable-next-line no-unused-vars
    namespace JSX {
        // eslint-disable-next-line no-unused-vars
        interface Element extends VNode {}
        // eslint-disable-next-line no-unused-vars
        interface ElementClass extends Vue {}
        // eslint-disable-next-line no-unused-vars
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}

declare module 'vue/types/options' {
    // eslint-disable-next-line no-unused-vars
    interface ComponentOptions<V extends Vue> {
        [key: string]: any;
    }
}
