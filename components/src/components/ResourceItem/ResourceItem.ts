import { defineComponent, h, isVue3 } from 'vue-demi';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleStack from '../SimpleStack/SimpleStack';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
import './ResourceItem.scss';
export default defineComponent({
    props: {
        sort: {
            type: Boolean,
            required: false,
        },
        asc: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, context) {
        const handleSortClick = () => {
            context.emit('sort', !props.asc);
        };
        const sortIcons = (style: { spacing: object }) => {
            return h(SimpleIcon, {
                style: [style.spacing],
                props: {
                    source: props.asc ? ArrowDown : ArrowUp,
                    size: '13px',
                    clickable: true,
                },
                source: props.asc ? ArrowDown : ArrowUp,
                size: '13px',
                clickable: true,
                onClick: handleSortClick,
                on: {
                    click: handleSortClick,
                },
            });
        };
        const childItemNode = () => {
            if (props.sort) {
                return h(
                    SimpleStack,
                    {
                        scopedSlots: {
                            default: (style: { spacing: object }) => [
                                context.slots.default ? context.slots.default() : 'header',
                                sortIcons(style),
                            ],
                        },
                    },
                    /* eslint-disable */
                    isVue3
                        ? {
                              default: (style: { spacing: object }) => [
                                  context.slots.default ? context.slots.default() : 'header',
                                  sortIcons(style),
                              ],
                          }
                        : undefined
                    /* eslint-enable */
                );
            } else {
                return h('div', context.slots.default ? context.slots.default() : 'header');
            }
        };
        return () => h('div', { class: [{ resource_item__child: true }] }, [childItemNode()]);
    },
});