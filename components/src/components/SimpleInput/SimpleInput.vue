<template>
    <div class="simple-input_container" :style="widthStyle()">
        <div
            :class="{
                caption: caption !== undefined,
            }"
            class="simple-input_caption-hidden"
        >
            {{ caption === undefined ? '_' : caption }}
        </div>
        <div class="simple-input_input-field">
            <input
                v-model="text"
                :placeholder="placeholder"
                class="simple-input_input-element"
                :class="{
                    inputError: isError,
                }"
                :readonly="readonly"
                @focus="handleFocusIn"
                @focusout="handleFocusOut"
            />
            <div v-show="appearRemoveButton" class="simple-input_remove">
                <DeleteCross class="simple-input_remove-icon" @click="hundleRemove" />
            </div>
        </div>
        <div v-show="isError" class="simple-input_error-message">
            <ExclamationMark class="simple-input_error-exclamation" />
            <span class="simple-input_error-text">{{ error }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue-demi';
import { DeleteCross, ExclamationMark } from '@simple-education-dev/icons';
export default defineComponent({
    components: {
        DeleteCross,
        ExclamationMark,
    },
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
        caption: {
            type: String,
            default: undefined,
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
        const isError = computed(() => {
            if (props.error) {
                return props.error.length > 0;
            } else {
                return false;
            }
        });
        const widthStyle = () => ({
            '--simple-input-width': props.width,
        });
        return {
            handleFocusIn,
            handleFocusOut,
            hundleRemove,
            text,
            appearRemoveButton,
            isError,
            widthStyle,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-input_container {
    text-align: left;
    width: var(--simple-input-width);
}
.simple-input_input-field {
    display: flex;
    align-items: center;
}
.simple-input_caption-hidden {
    font-size: $font-size-3;
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
.simple-input_input-element {
    width: 100%;
    flex-shrink: 0;
    padding: $space-025 $space-3;
    font-size: $font-size-5;
    border-radius: $border-radius-1;
    border: 1px solid $border-weak;
    transition-delay: 0.1s;
    box-sizing: border-box;
}
.simple-input_input-element:focus {
    border: 1px solid $theme-color;
    z-index: 10;
    outline: 0;
}
.simple-input_remove {
    height: 18px;
    position: relative;
    right: $space-8;
    cursor: pointer;
    z-index: 110;
}
.simple-input_remove-icon {
    width: 18px;
    height: 18px;
    fill: $surface-black;
}
.inputError {
    border: 1px solid $surface-error;
    background: $surface-error-alpha;
}
.inputError:focus {
    border: 1px solid $surface-error;
    background: $surface-error-alpha;
}
.simple-input_error-message {
    display: inline-flex;
    align-items: center;
}
.simple-input_error-text {
    font-size: $font-size-3;
    color: $text-error;
}
.simple-input_error-exclamation {
    width: 15px;
    height: 15px;
    fill: $surface-error;
    margin: 0 $space-2 0 $space-1;
}
</style>
