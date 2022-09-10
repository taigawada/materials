import { defineComponent, ref, PropType, h, VNode, VNodeNormalizedChildren, isVue3, computed } from 'vue-demi';
import SimpleSpinner from '../SimpleSpinner';
import SimpleIcon from '../SimpleIcon';
import './SimpleButton.scss';

export default defineComponent({
    props: {
        primary: {
            type: Boolean,
            required: false,
        },
        normal: {
            type: Boolean,
            required: false,
        },
        error: {
            type: Boolean,
            required: false,
        },
        plain: {
            type: Boolean,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        loading: {
            type: Boolean,
            required: false,
        },
        url: {
            type: String,
            default: undefined,
            required: false,
        },
        external: {
            type: Boolean,
            required: false,
        },
        fill: {
            type: Boolean,
            required: false,
        },
        size: {
            type: Number,
            default: 10,
            required: false,
        },
        icon: {
            type: String,
            default: undefined,
            required: false,
        },
        textColor: {
            type: String,
            default: undefined,
            required: false,
        },
        iconSide: {
            type: String as PropType<'left' | 'right'>,
            default: 'right',
            required: false,
        },
    },
    setup(props, context) {
        const isEntered = ref(false);
        const handleClick = () => {
            context.emit('click');
        };
        const mousedown = (): void => {
            isEntered.value = true;
        };
        const mouseup = (): void => {
            isEntered.value = false;
        };
        const mouseenter = (): void => {
            isEntered.value = true;
        };
        const mouseleave = (): void => {
            isEntered.value = false;
        };
        const sizeToPixel = () => ({
            '--props-size': `${props.size + 'px'}`,
        });
        const textLengthVar = () => {
            const textChildren = (): VNodeNormalizedChildren | string => {
                if (isVue3) {
                    return context.slots.default ? context.slots.default()[0].children : '';
                } else {
                    // @ts-ignore
                    return context.slots.default ? context.slots.default()[0].text : '';
                }
            };
            let textLength = 0;
            if (typeof textChildren() === 'string') {
                // @ts-ignore
                textLength = textChildren ? textChildren()?.replace(/ /g, '').length : 0;
            }
            if (!props.fill) textLength = 0;
            return {
                '--slot-text-length': textLength,
            };
        };
        const target = () => (props.external ? '_blank' : '_self');
        const iconColor = computed(() => {
            if (props.textColor) return props.textColor;
            else if (props.primary) return 'rgba(255, 255, 255, 1)';
            else if (props.normal) return 'rgba(114, 114, 114, 1)';
            else if (props.error) return 'rgba(255, 255, 255, 1)';
            else if (props.plain) return 'rgba(53, 146, 185, 1)';
            else return 'rgba(255, 255, 255, 1)';
        });
        const spinnerColor = computed(() => {
            if (props.primary) return [255, 255, 85];
            else if (props.normal) return [105, 105, 105];
            else if (props.error) return [255, 255, 255];
            else return [255, 194, 85];
        });
        const sideSwitch = (domArray: unknown[]): VNode[] => {
            if (props.iconSide === 'left') {
                return domArray.reverse() as VNode[];
            } else {
                return domArray as VNode[];
            }
        };
        const disabledButtonNode = () => {
            return h(
                'a',
                {
                    class: [
                        {
                            simple_button__disable_prime: props.primary,
                            simple_button__disable_normal: props.normal,
                            simple_button__disable_error: props.error,
                            simple_button__disable_plain: props.plain,
                        },
                    ],
                    style: [sizeToPixel()],
                },
                [
                    h(
                        'a',
                        {
                            class: [
                                {
                                    simple_button__disabled_text: !props.plain,
                                    simple_button__disabled_text_primary: props.primary || props.error,
                                },
                            ],
                            style: [textLengthVar()],
                            fill: props.fill,
                            attrs: {
                                fill: props.fill,
                            },
                        },
                        sideSwitch([
                            h('span', context.slots.default ? context.slots.default() : 'Button'),
                            props.icon
                                ? /* eslint-disable */
                                  h(SimpleIcon, {
                                      props: {
                                          source: props.icon,
                                          size: props.size + 'px',
                                          fill: iconColor.value,
                                          clickable: true,
                                      },
                                      source: props.icon,
                                      size: props.size + 'px',
                                      fill: iconColor.value,
                                      clickable: true,
                                  })
                                : undefined,
                            /* eslint-enable */
                        ])
                    ),
                ]
            );
        };
        const loadingSpinnerNode = (): VNode | undefined => {
            if (!props.plain) {
                return h(SimpleSpinner, {
                    size: 'normal',
                    color: spinnerColor.value,
                    props: { size: 'normal', color: spinnerColor.value },
                });
            }
        };
        const loadingButtonNode = () => {
            return h(
                'a',
                {
                    class: [
                        {
                            simple_button__disable_prime: props.primary,
                            simple_button__disable_normal: props.normal,
                            simple_button__disable_error: props.error,
                            simple_button__disable_plain: props.plain,
                        },
                    ],
                    style: [sizeToPixel()],
                },
                [
                    h(
                        'a',
                        {
                            class: [{ simple_button__text_loading: !props.plain }],
                            style: [textLengthVar()],
                            fill: props.fill,
                            attrs: {
                                fill: props.fill,
                            },
                        },
                        sideSwitch([
                            h('span', context.slots.default ? context.slots.default() : 'Button'),
                            props.icon
                                ? /* eslint-disable */
                                  h(SimpleIcon, {
                                      props: {
                                          source: props.icon,
                                          size: props.size + 'px',
                                          fill: iconColor.value,
                                          clickable: true,
                                      },
                                      source: props.icon,
                                      size: props.size + 'px',
                                      fill: iconColor.value,
                                      clickable: true,
                                  })
                                : undefined,
                            /* eslint-enable */
                        ])
                    ),
                    h('div', { class: [{ simple_button__spinner: true }] }, [loadingSpinnerNode()]),
                ]
            );
        };
        const buttonElement: object = {
            attr: { href: props.url, target: target() },
            onMouseenter: mouseenter,
            onMouseleave: mouseleave,
            onMousedown: mousedown,
            onMouseup: mouseup,
            on: {
                mouseenter: mouseenter,
                mouseleave: mouseleave,
                mousedown: mousedown,
                mouseup: mouseup,
                click: handleClick,
            },
        };
        const buttonNode = (): VNode | undefined => {
            return h(
                'a',
                {
                    class: [
                        {
                            simple_button__base_prime: props.primary,
                            simple_button__entered_prime: props.primary && isEntered.value,
                            simple_button__base_normal: props.normal,
                            simple_button__entered_normal: props.normal && isEntered.value,
                            simple_button__base_error: props.error,
                            simple_button__entered_error: props.error && isEntered.value,
                        },
                    ],
                    style: [sizeToPixel()],
                    ...buttonElement,
                },
                [
                    h(
                        'a',
                        {
                            class: [
                                {
                                    simple_button__text_normal: props.normal,
                                    simple_button__text_prime: props.primary,
                                    simple_button__text_error: props.error,
                                },
                            ],
                            style: [textLengthVar()],
                            fill: props.fill,
                            attrs: {
                                fill: props.fill,
                            },
                        },
                        sideSwitch([
                            h('span', context.slots.default ? context.slots.default() : 'Button'),
                            props.icon
                                ? /* eslint-disable */
                                  h(SimpleIcon, {
                                      props: {
                                          source: props.icon,
                                          size: props.size + 'px',
                                          fill: iconColor.value,
                                          clickable: true,
                                      },
                                      source: props.icon,
                                      size: props.size + 'px',
                                      fill: iconColor.value,
                                      clickable: true,
                                  })
                                : undefined,
                            /* eslint-enable */
                        ])
                    ),
                ]
            );
        };
        const plainButtonNode = (): VNode | undefined => {
            return h(
                'a',
                {
                    class: [{ simple_button__base_plain: true, simple_button__entered_plain: isEntered.value }],
                    style: [sizeToPixel()],
                    ...buttonElement,
                },
                sideSwitch([
                    h('span', context.slots.default ? context.slots.default() : 'Button'),
                    props.icon
                        ? /* eslint-disable */
                          h(SimpleIcon, {
                              props: {
                                  source: props.icon,
                                  size: props.size + 'px',
                                  fill: iconColor.value,
                                  clickable: true,
                              },
                              source: props.icon,
                              size: props.size + 'px',
                              fill: iconColor.value,
                              clickable: true,
                          })
                        : undefined,
                    /* eslint-enable */
                ])
            );
        };
        const button = (): VNode | undefined => {
            if (props.disabled) {
                return disabledButtonNode();
            } else if (props.loading) {
                return loadingButtonNode();
            } else if (props.plain) {
                return plainButtonNode();
            } else {
                return buttonNode();
            }
        };
        return () => h('div', { class: [{ simple_button__container: true }] }, [button()]);
    },
});
