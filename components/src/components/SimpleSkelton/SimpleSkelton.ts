import { defineComponent, h } from 'vue-demi';
import './SimpleSkelton.scss';

export default defineComponent({
    props: {
        line: {
            type: Number,
            default: 1,
            required: false,
        },
    },
    setup() {
        return () =>
            h('div', { class: [{ simple_skelton__base: true }] }, [
                h('div', {
                    class: [{ simple_skelton__background: true }],
                }),
            ]);
    },
});
