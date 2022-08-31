import { defineComponent, ref, h, VNode, VNodeNormalizedChildren, isVue3 } from 'vue-demi';
import SimpleSpinner from '../SimpleSpinner';
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
        const target = () => {
            if (props.external) {
                return '_blank';
            } else {
                return '_self';
            }
        };
        const spinnerColor = () => {
            if (props.primary && !props.normal) {
                return [255, 255, 85];
            } else if (!props.primary && props.normal) {
                return [105, 105, 105];
            } else {
                return [255, 194, 85];
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
                                    simple_button__disabled_text_primary: props.primary,
                                },
                            ],
                            style: [textLengthVar()],
                            fill: props.fill,
                            attrs: {
                                fill: props.fill,
                            },
                        },
                        [context.slots.default ? context.slots.default() : 'Button']
                    ),
                ]
            );
        };
        const loadingSpinnerNode = (): VNode | undefined => {
            if (!props.plain) {
                return h(SimpleSpinner, {
                    size: 'normal',
                    color: spinnerColor(),
                    props: { size: 'normal', color: spinnerColor() },
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
                        [context.slots.default ? context.slots.default() : 'button']
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
        const primaryButtonNode = (): VNode | undefined => {
            return h('a', { class: [{ simple_button__base_prime: true }], style: [sizeToPixel()] }, [
                h(
                    'a',
                    {
                        class: { simple_button__wrapper_prime: true, simple_button__entered_prime: isEntered.value },
                        style: [sizeToPixel()],
                        ...buttonElement,
                    },
                    [
                        h(
                            'a',
                            {
                                class: [{ simple_button__text_prime: true }],
                                style: [textLengthVar()],
                                fill: props.fill,
                                attrs: {
                                    fill: props.fill,
                                },
                            },
                            [context.slots.default ? context.slots.default() : 'Button']
                        ),
                    ]
                ),
            ]);
        };
        const normalButtonNode = (): VNode | undefined => {
            return h(
                'a',
                {
                    class: [{ simple_button__base_normal: true, simple_button__entered_normal: isEntered.value }],
                    style: [sizeToPixel()],
                    ...buttonElement,
                },
                [
                    h(
                        'a',
                        {
                            class: [{ simple_button__text_normal: true }],
                            style: [textLengthVar()],
                            fill: props.fill,
                            attrs: {
                                fill: props.fill,
                            },
                        },
                        [context.slots.default ? context.slots.default() : 'Button']
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
                [context.slots.default ? context.slots.default() : 'Button']
            );
        };
        const button = (): VNode | undefined => {
            if (props.disabled) {
                return disabledButtonNode();
            } else if (props.loading) {
                return loadingButtonNode();
            } else if (props.primary) {
                return primaryButtonNode();
            } else if (props.normal) {
                return normalButtonNode();
            } else if (props.plain) {
                return plainButtonNode();
            }
        };
        return () => h('div', { class: [{ simple_button__container: true }] }, [button()]);
    },
});
