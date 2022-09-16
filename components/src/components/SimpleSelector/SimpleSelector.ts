import { defineComponent, PropType, h, VNode, isVue3 } from 'vue-demi';
import { ExclamationMark, SelectArrow } from '@simple-education-dev/icons';
import { SimpleStack } from '../SimpleStack';
import { SimpleIcon } from '../SimpleIcon';
import './SimpleSelector.scss';
interface Item {
    value: string;
    label: string;
    disabled?: boolean;
    helpText?: string;
}
export default defineComponent({
    props: {
        radio: {
            type: Boolean,
            default: false,
            required: false,
        },
        initialValue: {
            type: String,
            default: '選択してください',
            required: false,
        },
        value: {
            type: String,
            default: '',
            required: true,
        },
        items: {
            type: Array as PropType<Item[]>,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },
        caption: {
            type: String,
            default: undefined,
            required: false,
        },
        error: {
            type: String,
            default: undefined,
            required: false,
        },
    },
    setup(props, context) {
        const handleRadioClick = (newSelect: string) => {
            context.emit('change:select', newSelect);
        };
        const handleSelectChange = (event: { target: HTMLSelectElement }) => {
            context.emit('change:select', event.target.value);
        };
        const isError = () => {
            if (props.error) {
                return props.error.length > 0;
            } else {
                return false;
            }
        };
        const simpleSelectorCaptionNode = () =>
            h(
                'div',
                {
                    class: [
                        {
                            simple_selector__caption_hidden: true,
                            simple_selector__caption_text: props.caption !== undefined,
                        },
                    ],
                },
                [props.caption === undefined ? ' ' : props.caption]
            );
        const radioNode = () => {
            return props.items.map((item) => {
                return h('div', { class: [{ simple_selector__radio_elements: true }], key: item.value }, [
                    h('div', { class: [{ simple_selector__radio_container: true }] }, [
                        h(
                            'div',
                            {
                                class: [
                                    {
                                        simple_selector__radio_circle: true,
                                        radio_circle__selected: props.value === item.value,
                                    },
                                ],
                                onClick: () => handleRadioClick(item.value),
                                on: { click: () => handleRadioClick(item.value) },
                            },
                            [h('div', { class: [{ radio_circle__inside: props.value === item.value }] })]
                        ),
                        [
                            h(
                                'div',
                                {
                                    class: [{ simple_selector__radio_text: true }],
                                    onClick: () => handleRadioClick(item.value),
                                    on: { click: () => handleRadioClick(item.value) },
                                },
                                item.label
                            ),
                        ],
                    ]),
                    [h('div', { class: [{ simple_selector__radio_helptext: true }] }, item.helpText)],
                ]);
            });
        };
        const simpleSelecorRadioNode = () => {
            if (props.radio) {
                return h('div', { class: [{ classTest: true }] }, [
                    h(
                        SimpleStack,
                        { vertical: true, props: { vertical: true } },
                        isVue3 ? () => radioNode() : radioNode()
                    ),
                ]);
            }
        };
        const selectBoxElements = () => [
            h(
                'option',
                {
                    value: '',
                    domProps: { hidden: true, value: '' },
                    attrs: { disabled: true },
                    disabled: true,
                    hidden: true,
                },
                props.initialValue
            ),
            ...props.items.map((item) => {
                return h(
                    'option',
                    {
                        key: item.value,
                        value: item.value,
                        domProps: { value: item.value, disabled: item.disabled ? item.disabled : false },
                        disabled: item.disabled ? item.disabled : false,
                    },
                    item.label
                );
            }),
        ];
        const simpleSelectorSelectElement = (): VNode | undefined => {
            if (!props.radio) {
                return h('div', { class: [{ simple_selector__form_element: true }] }, [
                    h(
                        'select',
                        {
                            class: [{ simple_selector__select_box: true, select_box__error: isError() }],
                            value: props.value,
                            domProps: {
                                value: props.value,
                            },
                            onChange: (event: { target: HTMLSelectElement }) => handleSelectChange(event),
                            on: {
                                change: (event: { target: HTMLSelectElement }) => handleSelectChange(event),
                            },
                        },
                        selectBoxElements()
                    ),
                    h(SimpleIcon, {
                        class: [{ simple_selector__select_icon: true }],
                        source: SelectArrow,
                        size: '15px',
                        props: {
                            source: SelectArrow,
                            size: '15px',
                        },
                    }),
                ]);
            }
        };
        const simpleSelectorErrorNode = () => {
            if (isError()) {
                return h('div', { class: [{ simple_selector__error_message: true }] }, [
                    h(SimpleIcon, {
                        class: [{ simple_selector__error_exclamation: true }],
                        source: ExclamationMark,
                        size: '15px',
                        fill: 'rgba(255, 121, 121, 1)',
                        props: {
                            source: ExclamationMark,
                            size: '15px',
                            fill: 'rgba(255, 121, 121, 1)',
                        },
                    }),
                    [h('span', { class: [{ simple_selector__error_text: true }] }, props.error)],
                ]);
            }
        };
        return () =>
            h('div', { class: [{ simple_selector__base: true }] }, [
                simpleSelectorCaptionNode(),
                simpleSelecorRadioNode(),
                simpleSelectorSelectElement(),
                simpleSelectorErrorNode(),
            ]);
    },
});
