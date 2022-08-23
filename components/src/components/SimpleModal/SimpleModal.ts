import { defineComponent, ref, watchEffect, PropType, h, isVue3 } from 'vue-demi';
import { useScrollLock, onKeyStroke, onKeyPressed } from '@vueuse/core';
import { CloseCross } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton/SimpleButton';
import SimpleIcon from '../SimpleIcon/SimpleIcon';
import './SimpleModal.scss';
interface MainAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    onAction?: () => unknown;
}
interface SubAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    onAction?: () => unknown;
}
export default defineComponent({
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: null,
            required: false,
        },
        mainAction: {
            type: Object as PropType<MainAction>,
            default: null,
            required: false,
        },
        subAction: {
            type: Object as PropType<SubAction>,
            default: null,
            required: false,
        },
    },
    setup(props, context) {
        const documentRef = ref(document.documentElement);
        const scrollLock = useScrollLock(documentRef);
        const onMainAction = () => {
            context.emit('mainAction');
        };
        const onSubAction = () => {
            context.emit('subAction');
        };
        const handleDestroy = () => {
            context.emit('destroy');
        };
        onKeyPressed(['Enter'], () => {
            if (props.open === true) context.emit('mainAction');
        });
        onKeyPressed(['Escape'], () => {
            if (props.open === true) context.emit('destroy');
        });
        onKeyStroke(['Tab'], (e) => {
            if (props.open === true) e.preventDefault();
        });
        watchEffect(() => {
            if (props.open === true) {
                scrollLock.value = true;
            } else {
                scrollLock.value = false;
            }
        });
        const headerNode = () =>
            h('div', { class: [{ simple_modal__card_header: true }] }, [
                h('div', { class: [{ simple_modal__card_title: true }] }, props.title),
                h(SimpleIcon, {
                    class: [{ simple_modal__close_icon: true }],
                    source: CloseCross,
                    size: '24px',
                    clickable: true,
                    props: { source: CloseCross, size: '24px', clickable: true },
                    onClick: handleDestroy,
                    on: { click: handleDestroy },
                }),
            ]);
        const contentNode = () =>
            h(
                'div',
                { class: [{ simple_modal__content_container: true }] },
                context.slots.default ? context.slots.default() : ''
            );
        const footerNode = () =>
            h('div', { class: [{ simple_modal__card_footer: true }] }, [
                h('div', { class: [{ simple_modal__card_actions: true }] }, [
                    h(
                        SimpleButton,
                        {
                            normal: true,
                            disabled: props.subAction.disabled,
                            loading: props.subAction.loading,
                            props: {
                                normal: true,
                                disabled: props.subAction.disabled,
                                loading: props.subAction.loading,
                            },
                            onClick: onSubAction,
                            on: {
                                click: onSubAction,
                            },
                        },
                        isVue3 ? () => props.subAction.text : props.subAction.text
                    ),
                    h(
                        SimpleButton,
                        {
                            primary: true,
                            disabled: props.mainAction.disabled,
                            loading: props.mainAction.loading,
                            props: {
                                primary: true,
                                disabled: props.mainAction.disabled,
                                loading: props.mainAction.loading,
                            },
                            onClick: onMainAction,
                            on: {
                                click: onMainAction,
                            },
                        },
                        isVue3 ? () => props.mainAction.text : props.mainAction.text
                    ),
                ]),
            ]);
        const mainNode = () => {
            if (props.open) {
                return h('div', { class: [{ simple_modal__overlay: true }] }, [
                    h('div', { class: [{ simple_modal__card: true }] }, [
                        headerNode(),
                        contentNode(),
                        props.mainAction !== undefined || props.subAction !== undefined ? footerNode() : null,
                    ]),
                ]);
            } else {
                return h('div');
            }
        };
        return () => mainNode();
        // <div v-if="open" class="simple-modal_overlay">
        //     <div class="simple-modal_card">
        //         <div class="simple-modal_card-header">
        //             <div class="simple-modal_card-title">{{ title }}</div>
        //             <CloseCross class="simple-modal_close-icon" @click="handleDestroy" />
        //         </div>
        //         <div class="simple-modal_content-container">
        //             <slot></slot>
        //         </div>
        //         <div class="simple-modal_card-footer">
        //             <div class="simple-modal_card-actions">
        //                 <SimpleButton
        //                     normal
        //                     :disabled="subAction?.disabled"
        //                     :loading="subAction?.loading"
        //                     @click="onSubAction"
        //                 >
        //                     {{ subAction?.text }}
        //                 </SimpleButton>
        //                 <SimpleButton
        //                     primary
        //                     :disabled="mainAction?.disabled"
        //                     :loading="mainAction?.loading"
        //                     @click="onMainAction"
        //                 >
        //                     {{ mainAction?.text }}
        //                 </SimpleButton>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    },
});
