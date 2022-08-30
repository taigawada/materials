import { defineComponent, isVue3, h, VNode, getCurrentInstance } from 'vue-demi';
import { CheckMark, HyphenBar } from '@simple-education-dev/icons';
import SimpleIcon from '../SimpleIcon';
import './SimpleCheckbox.scss';
export default defineComponent({
    props: {
        label: {
            type: String,
            default: undefined,
            required: false,
        },
        value: {
            type: Boolean,
            required: true,
        },
        indeterminate: {
            type: Boolean,
            required: false,
        },
        size: {
            type: String,
            default: '17px',
            required: false,
        },
    },
    setup(props, context) {
        const handleChange = () => {
            context.emit('change', !props.value);
        };
        // Vue3では、context.expose({})で関数を親コンポーネントに公開
        // Vue2では、コンポーネントのインスタンスに直接アクセスして、関数を公開
        if (isVue3) {
            context.expose({ handleChange });
        } else {
            const internalInstance = getCurrentInstance();
            // @ts-ignore
            Object.assign(internalInstance.proxy, { handleChange });
        }
        const CheckboxSize = () => ({
            '--checkbox-size': props.size,
        });
        const insideIconNode = () => {
            if (!props.indeterminate) {
                return h(SimpleIcon, {
                    source: CheckMark,
                    size: props.size,
                    fill: 'rgba(255, 255, 255, 1)',
                    clickable: true,
                    props: { source: CheckMark, size: props.size, fill: 'rgba(255, 255, 255, 1)', clickable: true },
                });
            } else {
                return h(SimpleIcon, {
                    source: HyphenBar,
                    size: props.size,
                    fill: 'rgba(255, 255, 255, 1)',
                    props: { source: HyphenBar, size: props.size, fill: 'rgba(255, 255, 255, 1)' },
                });
            }
        };
        const labelTextNode = (): VNode | undefined => {
            if (props.label !== undefined) {
                return h(
                    'span',
                    {
                        class: [{ simple_checkbox__label_text: true }],
                        onClick: handleChange,
                        on: {
                            click: handleChange,
                        },
                    },
                    props.label
                );
            }
        };
        return () =>
            h('div', { class: [{ simple_checkbox__base: true }] }, [
                h(
                    'div',
                    {
                        class: [
                            {
                                simple_checkbox__checkbox_container: true,
                                simple_checkbox__checked_background: props.value,
                            },
                        ],
                        style: [CheckboxSize()],
                        onClick: handleChange,
                        on: {
                            click: handleChange,
                        },
                    },
                    [insideIconNode()]
                ),
                labelTextNode(),
            ]);
    },
});
