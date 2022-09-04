import { defineComponent, computed, h } from 'vue-demi';
import './SimpleSkelton.scss';

export default defineComponent({
    props: {
        body: {
            type: Boolean,
        },
        width: {
            type: String,
            default: '80%',
            required: false,
        },
        height: {
            type: String,
            default: '100px',
            required: false,
        },
        text: {
            type: Boolean,
        },
        heading: {
            type: Boolean,
        },
        line: {
            type: Number,
            default: 1,
            required: false,
        },
    },
    setup(props) {
        const bodyStyles = computed(() => ({
            '--simple-skelton-body-width': props.width,
            '--simple-skelton-body-height': props.height,
        }));
        const bodyNode = () =>
            h('div', {
                class: [{ simple_skelton__body: true }],
                style: [bodyStyles.value],
            });
        const textLineNode = () =>
            [...new Array(props.line).keys()].map(() =>
                h('div', {
                    class: [{ simple_skelton__text_line: true }],
                })
            );
        const headerNode = () => h('div', { class: [{ simple_skelton__header: true }] });
        const propsNode = () => {
            if (props.body) return bodyNode();
            else if (props.text) return textLineNode();
            else if (props.heading) return headerNode();
        };
        return () => h('div', { class: [{ simple_skelton__base: true }] }, [propsNode()]);
    },
});
