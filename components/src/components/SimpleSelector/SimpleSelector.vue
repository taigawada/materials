<template>
    <div class="simple-selector_base">
        <div
            :class="{
                captionText: caption !== '_caption_initial',
            }"
            class="simple-selector_caption-hidden"
        >
            {{ caption }}
        </div>
        <div class="simple-selector_form-element">
            <select
                v-model="select"
                class="simple-selector_select-box"
                :disabled="disabled"
                :class="{
                    selectBoxError: isError,
                }"
            >
                <option hidden value="">{{ initialValue }}</option>
                <option v-for="(item, index) in items" :key="item.value + index" :value="item.value">
                    {{ item.label }}
                </option>
            </select>
            <SelectArrow class="simple-selector_select-icon" />
        </div>
        <div v-show="isError" class="simple-selector_error-message">
            <ExclamationMark class="simple-selector_error-exclamation" />
            <span class="simple-selector_error-text">{{ error }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue-demi';
import { ExclamationMark, SelectArrow } from '@simple-education-dev/icons';
interface Item {
    value: string;
    label: string;
}
export default defineComponent({
    components: {
        ExclamationMark,
        SelectArrow,
    },
    props: {
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
        const select = computed({
            get: () => props.value,
            set: (value: unknown) => {
                context.emit('change', value);
            },
        });
        const isError = computed(() => {
            if (props.error) {
                return props.error.length > 0;
            } else {
                return false;
            }
        });
        return {
            select,
            isError,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-selector_base {
    text-align: left;
}
.simple-selector_form-element {
    display: flex;
    align-items: center;
}
.simple-selector_select-box {
    font-size: $font-size-4;
    appearance: none;
    padding: $space-025 $space-8 $space-025 $space-2;
    box-sizing: border-box;
    border: 1px solid $border;
    border-radius: 5px;
    background: $surface;
}
.simple-selector_caption-hidden {
    padding: 0 5px;
    display: block;
    text-align: left;
    opacity: 0;
}
.captionText {
    opacity: 1;
}
.simple-selector_select-box:focus {
    border: 1px solid $theme-color;
    z-index: 10;
    outline: 0;
}
.simple-selector_select-icon {
    width: 15px;
    height: 15px;
    fill: $surface-black;
    position: relative;
    right: $space-6;
    z-index: 11;
}
.selectBoxError {
    border: 1px solid $surface-error;
    background: $surface-error-alpha;
}
.selectBoxError:focus {
    border: 1px solid $surface-error;
    background: $surface-error-alpha;
}
.simple-selector_error-message {
    display: inline-flex;
    align-items: center;
}
.simple-selector_error-text {
    font-size: $font-size-3;
    color: $text-error;
}
.simple-selector_error-exclamation {
    width: 15px;
    height: 15px;
    fill: $surface-error;
    margin: 0 $space-2 0 $space-1;
}
</style>
