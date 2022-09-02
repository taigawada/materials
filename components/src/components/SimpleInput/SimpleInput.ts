import { defineComponent, h } from 'vue-demi';
import { DeleteCross, ExclamationMark } from '@simple-education-dev/icons';
import SimpleIcon from '../SimpleIcon';
import './SimpleInput.scss';
export default defineComponent({
    props: {
        width: {
            type: String,
            default: 'auto',
            required: false,
        },
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: undefined,
            required: false,
        },
        icon: {
            type: String,
            default: '',
            required: false,
        },
        caption: {
            type: String,
            default: undefined,
            required: false,
        },
        captionHidden: {
            type: Boolean,
            required: false,
        },
        remove: {
            type: Boolean,
            required: false,
        },
        readonly: {
            type: Boolean,
            require: false,
        },
        error: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        const handleRemove = () => {
            context.emit('remove');
        };
        const handleInputChange = (event: { target: HTMLInputElement }) => {
            context.emit('change:value', event.target.value);
        };
        const handleFocusin = () => {
            context.emit('focusin');
        };
        const handleFocusout = () => {
            context.emit('focusout');
        };
        const appearRemoveButton = () => {
            if (props.value) {
                return props.remove && props.value.length > 0;
            } else {
                return false;
            }
        };
        const isError = (): boolean => {
            if (props.error) {
                return props.error.length > 0;
            } else {
                return false;
            }
        };
        const widthStyle = () => ({
            '--simple-input-width': props.width,
        });
        const captionNode = () => {
            if (!props.captionHidden) {
                return h(
                    'div',
                    {
                        class: [
                            {
                                simple_input__caption_hidden: true,
                                simple_input__caption: props.caption !== undefined,
                            },
                        ],
                    },
                    [props.caption === undefined ? '_' : props.caption]
                );
            }
        };
        const iconsNode = () => {
            if (appearRemoveButton()) {
                return h(SimpleIcon, {
                    source: DeleteCross,
                    size: '18px',
                    clickable: true,
                    props: {
                        source: DeleteCross,
                        size: '18px',
                        clickable: true,
                    },
                    onClick: handleRemove,
                    on: {
                        click: handleRemove,
                    },
                });
            } else {
                return h(SimpleIcon, {
                    source: props.icon,
                    size: '15px',
                    props: {
                        source: props.icon,
                        size: '15px',
                    },
                });
            }
        };
        const inputElementNode = () =>
            h('div', { class: [{ simple_input__input_field: true }] }, [
                h('input', {
                    class: [{ simple_input__input_element: true, simple_input__input_error: isError() }],
                    domProps: {
                        placeholder: props.placeholder,
                        value: props.value,
                    },
                    attrs: {
                        readonly: props.readonly,
                    },
                    readonly: props.readonly,
                    placeholder: props.placeholder,
                    value: props.value,
                    onInput: (event: { target: HTMLInputElement }) => handleInputChange(event),
                    on: {
                        input: (event: { target: HTMLInputElement }) => handleInputChange(event),
                        // Vue2,3でinputのイベント名を合わせる
                        // Vue3: focusin, focusout
                        // Vue2:
                        //     focus -> focusin
                        //     blur -> focusout
                        focus: handleFocusin,
                        blur: handleFocusout,
                    },
                }),
                [h('div', { class: [{ simple_input__remove: true }] }, [iconsNode()])],
            ]);
        const inputErrorNode = () => {
            if (isError()) {
                return h('div', { class: [{ simple_input__error_message: true }] }, [
                    h(SimpleIcon, {
                        class: [{ simple_input__error_exclamation: true }],
                        source: ExclamationMark,
                        size: '15px',
                        fill: 'rgba(255, 121, 121, 1)',
                        props: {
                            source: ExclamationMark,
                            size: '15px',
                            fill: 'rgba(255, 121, 121, 1)',
                        },
                    }),
                    [h('span', { class: [{ simple_input__error_text: true }] }, props.error)],
                ]);
            }
        };
        return () =>
            h('div', { class: [{ simple_input__container: true }], style: [widthStyle()] }, [
                h('div', [captionNode()]),
                h('div', [inputElementNode()]),
                h('div', [inputErrorNode()]),
            ]);
    },
});
