<template>
    <div class="base">
        <div
            :class="{
                caption: caption !== '_caption_initial',
            }"
            class="caption-hidden"
        >
            {{ caption }}
        </div>
        <div class="wrapper">
            <input v-model="text" :placeholder="placeholder" class="input" :readonly="readonly" @focus="handleFocusIn" @focusout="handleFocusOut" />
            <div v-show="appearRemoveButton" class="remove">
                <DeleteCross class="delete-icon" @click="hundleRemove" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { DeleteCross } from '@simple-education/icons2';
export default defineComponent({
    components: {
        DeleteCross,
    },
    props: {
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: undefined,
            required: false,
        },
        caption: {
            type: String,
            default: '_caption_initial',
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
    },
    setup(props, context) {
        const handleFocusIn = () => {
            context.emit('focusIn');
        };
        const handleFocusOut = () => {
            context.emit('focusOut');
        };
        const hundleRemove = () => {
            console.log('click');
            context.emit('remove');
        };
        const text = computed({
            get: () => props.value,
            set: (value) => context.emit('change:value', value),
        });
        const appearRemoveButton = computed(() => {
            if (text.value) {
                return props.remove && text.value.length > 0;
            } else {
                return false;
            }
        });
        return {
            handleFocusIn,
            handleFocusOut,
            hundleRemove,
            text,
            appearRemoveButton,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.wrapper {
    display: flex;
    align-items: center;
}
.caption-hidden {
    pointer-events: none;
    padding: 0 $space-1;
    display: block;
    text-align: left;
    opacity: 0;
}
.caption {
    pointer-events: auto;
    opacity: 1;
}
.input {
    width: 100%;
    flex-shrink: 0;
    padding: $space-025 $space-3;
    font-size: $font-size-5;
    border-radius: $border-radius-1;
    border: 1px solid $border-weak;
    transition-delay: 0.1s;
    box-sizing: border-box;
}
.input:focus {
    border: 1px solid $theme-color;
    z-index: 10;
    outline: 0;
}
.remove {
    height: 18px;
    position: relative;
    right: $space-8;
    cursor: pointer;
    z-index: 110;
}
.delete-icon {
    width: 18px;
    height: 18px;
    fill: $surface-black;
}
</style>
