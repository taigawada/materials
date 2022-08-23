import { defineComponent, h } from 'vue-demi';
import { ExclamationMark } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton/SimpleButton';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
import './SimpleBanner.scss';
export default defineComponent({
    props: {
        title: {
            type: String,
            default: undefined,
            required: false,
        },
        buttonLabel: {
            type: String,
            required: true,
        },
    },
    setup(props, context) {
        const handleClick = () => {
            context.emit('action');
        };
        const buttonNode = () => {
            if (props.buttonLabel !== undefined) {
                return h(SimpleButton, {
                    class: [{ simple_banner__button: true }],
                    plain: true,
                    props: { plain: true },
                    onClick: handleClick,
                    on: { click: handleClick },
                });
            }
        };
        return () =>
            h('div', { class: [{ simple_banner__base: true }] }, [
                h('div', { class: [{ simple_banner__header: true }] }, [
                    h(SimpleIcon, {
                        source: ExclamationMark,
                        size: '18px',
                        fill: 'rgba(196, 113, 67, 1)',
                        props: { source: ExclamationMark, size: '18px', fill: 'rgba(196, 113, 67, 1)' },
                    }),
                    props.title !== undefined
                        ? h('div', { class: [{ simple_banner__heading: true }] }, props.title)
                        : null,
                ]),
                h(
                    'div',
                    { class: [{ simple_banner__content: true }] },
                    context.slots.default ? context.slots.default() : ''
                ),
                buttonNode(),
            ]);
    },
});
