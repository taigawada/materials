<template>
    <div class="simple-card_base" :style="cardWidth()">
        <slot></slot>
        <div v-if="mainAction !== undefined || subAction !== undefined" class="simple-card_actions">
            <div>
                <SimpleButton
                    v-if="subAction"
                    normal
                    :disabled="subAction.disabled"
                    :loading="subAction.loading"
                    @click="hundleSubActionClick"
                >
                    {{ subAction.text }}
                </SimpleButton>
            </div>
            <div>
                <SimpleButton
                    v-if="mainAction"
                    primary
                    :disabled="mainAction.disabled"
                    :loading="mainAction.loading"
                    @click="hundleMainActionClick"
                >
                    {{ mainAction.text }}
                </SimpleButton>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue-demi';
import SimpleButton from '../SimpleButton/SimpleButton.vue';

interface Action {
    text: string;
    disabled?: boolean;
    loading?: boolean;
}
export default defineComponent({
    components: {
        SimpleButton,
    },
    props: {
        width: {
            type: String,
            default: '100%',
            require: false,
        },
        mainAction: {
            type: Object as PropType<Action>,
            default: () => ({
                text: '',
                disabled: false,
                loading: false,
            }),
            require: false,
        },
        subAction: {
            type: Object as PropType<Action>,
            default: () => ({
                text: '',
                disabled: false,
                loading: false,
            }),
            require: false,
        },
    },
    setup(props, context) {
        const hundleMainActionClick = () => {
            context.emit('mainAction');
        };
        const hundleSubActionClick = () => {
            context.emit('subAction');
        };
        const cardWidth = () => ({
            '--card-width': props.width,
        });
        return {
            hundleMainActionClick,
            hundleSubActionClick,
            cardWidth,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-card_base {
    display: inline-block;
    box-sizing: border-box;
    width: var(--card-width);
    background: $surface;
    border-radius: $border-radius-2;
    padding: $space-4 $space-10;
    box-shadow: $boxshadow;
}
.simple-card_actions {
    margin-top: $space-8;
    margin-bottom: $space-3;
    display: flex;
    justify-content: flex-end;
}
</style>
