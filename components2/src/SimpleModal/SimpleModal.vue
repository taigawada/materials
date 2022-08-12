<template>
    <div v-if="open" class="overlay">
        <div class="card">
            <div class="header">
                <div class="title">{{ title }}</div>
                <div class="close" @click="handleDestroy">
                    <SimpleIcon size="24px">
                        <CloseButton />
                    </SimpleIcon>
                </div>
            </div>
            <div class="content">
                <slot></slot>
            </div>
            <div class="footer">
                <div class="actions">
                    <SimpleButton normal :disabled="subAction?.disabled" :loading="subAction?.loading" @click="onSubAction">
                        {{ subAction?.text }}
                    </SimpleButton>
                    <SimpleButton primary :disabled="mainAction?.disabled" :loading="mainAction?.loading" @click="onMainAction">
                        {{ mainAction?.text }}
                    </SimpleButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect, PropType } from '@vue/composition-api';
import SimpleIcon from '../SimpleIcon/SimpleIcon.vue';
import { CloseButton } from '@simple-education/icons2';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
interface MainAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
}
interface SubAction {
    text: string;
    disabled?: boolean;
    loading?: boolean;
}
export default defineComponent({
    components: {
        SimpleButton,
        SimpleIcon,
        CloseButton,
    },
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
        const onMainAction = () => {
            context.emit('mainAction');
        };
        const onSubAction = () => {
            context.emit('subAction');
        };
        const handleDestroy = () => {
            context.emit('destroy');
        };
        watchEffect(() => {
            if (props.open === true) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
        });
        return {
            onMainAction,
            onSubAction,
            handleDestroy,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
}
.overlay {
    z-index: 100;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-size: $font-size-9;
    border-bottom: 0.2px solid #a8a8a8;
}
.title {
    margin-left: $space-4;
}
.content {
    width: 80%;
    margin: 10px auto;
    max-height: 360px;
}
.footer {
    position: relative;
    display: block;
    height: 70px;
    border-top: 0.2px solid #a8a8a8;
}
.actions {
    display: inline-flex;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}
.close {
    height: 24px;
    margin-right: $space-4;
    cursor: pointer;
}
</style>
