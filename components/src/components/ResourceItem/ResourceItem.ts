import { defineComponent, h, isVue3, onUpdated, PropType, ref } from 'vue-demi';
import { ArrowDown, ArrowUp, ThreePointLeader } from '@simple-education-dev/icons';
import { SimpleStack } from '../SimpleStack';
import { SimpleIcon } from '../SimpleIcon';
import './ResourceItem.scss';
import { SimplePopover } from '../SimplePopover';
import { useElementBounding } from '@vueuse/core';
export default defineComponent({
    props: {
        popupMenu: {
            type: Boolean,
            required: false,
        },
        sort: {
            type: Boolean,
            required: false,
        },
        asc: {
            type: Boolean,
            required: false,
        },
        distribution: {
            type: String as PropType<'left' | 'center' | 'right'>,
            default: 'center',
            required: false,
        },
    },
    setup(props, context) {
        const popupMenuRef = ref<HTMLElement | null>(null);
        const popupMenuRect = useElementBounding(popupMenuRef);
        onUpdated(() => {
            if (!isVue3) {
                // @ts-ignore
                popupMenuRef.value = context.refs.popupMenuRef;
            }
        });
        const popupMenuEnter = ref(false);
        const handlePopoverMenuEnter = () => {
            popupMenuEnter.value = true;
        };
        const handlePopoverMenuLeave = () => {
            popupMenuEnter.value = false;
        };
        const popupMenuOpen = ref(false);
        const handlePopoverMenuOpen = (event: Event) => {
            event.stopPropagation();
            popupMenuOpen.value = !popupMenuOpen.value;
        };
        const handlePopoverMenuClose = () => {
            popupMenuOpen.value = false;
        };
        const handleSortClick = () => {
            context.emit('sort', !props.asc);
        };
        const justifySelf = () => {
            switch (props.distribution) {
                case 'left':
                    return 'start';
                case 'center':
                    return 'normal';
                case 'right':
                    return 'end';
            }
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
        const popoverNode = () =>
            h(
                SimplePopover,
                {
                    open: popupMenuOpen.value,
                    activatorRect: popupMenuRect,
                    translateY: '10px',
                    props: {
                        open: popupMenuOpen.value,
                        activatorRect: popupMenuRect,
                        translateY: '10px',
                    },
                    onClose: handlePopoverMenuClose,
                    on: { close: handlePopoverMenuClose },
                },
                // prettier-ignore
                isVue3
                    ? () => (context.slots.default ? context.slots.default() : undefined) : 
                    context.slots.default? context.slots.default(): undefined
            );
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
            } else if (props.popupMenu) {
                // @ts-ignore
                return h(
                    'div',
                    {
                        class: [{ popup_menu_base: true }],
                        ref: isVue3 ? popupMenuRef : 'popupMenuRef',
                        onMouseenter: handlePopoverMenuEnter,
                        onMouseleave: handlePopoverMenuLeave,
                        on: { mouseenter: handlePopoverMenuEnter, mouseleave: handlePopoverMenuLeave },
                    },
                    [
                        h(SimpleIcon, {
                            style: [{ float: 'right' }],
                            source: ThreePointLeader,
                            size: '20px',
                            clickable: true,
                            fill: popupMenuEnter.value ? 'rgba(60, 130, 214, 1)' : 'rgba(44, 62, 80, 1)',
                            props: {
                                source: ThreePointLeader,
                                size: '20px',
                                clickable: true,
                                fill: popupMenuEnter.value ? 'rgba(60, 130, 214, 1)' : 'rgba(44, 62, 80, 1)',
                            },
                            onClick: (e: Event) => handlePopoverMenuOpen(e),
                            on: {
                                click: (e: Event) => handlePopoverMenuOpen(e),
                            },
                        }),
                        popoverNode(),
                    ]
                );
            } else {
                return context.slots.default ? context.slots.default() : undefined;
            }
        };
        return () =>
            h(
                'div',
                {
                    class: [{ resource_item__child: true }],
                    style: [{ '--item-distribution': justifySelf(), display: 'inline-block' }],
                },
                [childItemNode()]
            );
    },
});
