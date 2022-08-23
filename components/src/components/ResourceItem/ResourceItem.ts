import { defineComponent, h, isVue3, ref } from 'vue-demi';
import { ArrowDown, ArrowUp } from '@simple-education-dev/icons';
import SimpleStack from '../SimpleStack/SimpleStack';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
export default defineComponent({
    props: {
        sort: {
            type: Boolean,
            required: false,
        },
    },
    setup(props, context) {
        const sortStatus = ref(true);
        const handleSortClick = (order: 'asc' | 'desc') => {
            if (order === 'asc') {
                sortStatus.value = true;
            } else if (order === 'desc') {
                sortStatus.value = false;
            }
            context.emit('sort', order);
        };
        const sortIcons = (style: { spacing: object }) => {
            return h(SimpleIcon, {
                style: [style.spacing],
                props: {
                    source: sortStatus.value ? ArrowDown : ArrowUp,
                    size: '13px',
                    clickable: true,
                },
                source: sortStatus.value ? ArrowDown : ArrowUp,
                size: '13px',
                clickable: true,
                onClick: sortStatus.value ? () => handleSortClick('desc') : () => handleSortClick('asc'),
                on: {
                    click: sortStatus.value ? () => handleSortClick('desc') : () => handleSortClick('asc'),
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
