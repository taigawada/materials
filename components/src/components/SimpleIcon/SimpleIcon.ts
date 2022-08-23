import { defineComponent, h } from 'vue-demi';

export default defineComponent({
    props: {
        source: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: '16px',
            required: false,
        },
        fill: {
            type: String,
            default: 'rgba(44, 62, 80, 1)',
            required: false,
        },
        clickable: {
            type: Boolean,
            required: false,
        },
    },
    setup(props) {
        return () =>
            h('svg', {
                class: [{ simpleIconBase: true }],
                style: [
                    { width: props.size },
                    { height: props.size },
                    { fill: props.fill },
                    { cursor: props.clickable ? 'pointer' : 'default' },
                ],
                innerHTML: props.source,
                domProps: { innerHTML: props.source },
            });
    },
});
