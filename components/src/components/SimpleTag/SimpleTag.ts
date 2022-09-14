import { defineComponent, h } from 'vue-demi';
import { CloseCross } from '@simple-education-dev/icons';
import { SimpleIcon } from '../SimpleIcon';
import './SimpleTag.scss';
export default defineComponent({
    setup(_, context) {
        const hundleClickRemove = () => {
            context.emit('remove');
        };
        return () =>
            h(
                'div',
                {
                    class: [{ simple_tag__base: true }],
                },
                [
                    h(
                        'span',
                        {
                            class: [{ simple_tag__text: true }],
                        },
                        context.slots.default ? context.slots.default() : undefined
                    ),
                    h(SimpleIcon, {
                        class: [{ simple_tag__remove_icon: true }],
                        source: CloseCross,
                        size: '12px',
                        clickable: true,
                        props: {
                            source: CloseCross,
                            size: '12px',
                            clickable: true,
                        },
                        onClick: hundleClickRemove,
                        on: {
                            click: hundleClickRemove,
                        },
                    }),
                ]
            );
    },
});
