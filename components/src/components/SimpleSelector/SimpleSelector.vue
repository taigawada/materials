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
        <div v-if="radio === true">
            <SimpleStack vertical>
                <div
                    v-for="(item, index) in items"
                    :key="item.value + index"
                    :value="item.value"
                    class="simple-selector_radio-elements"
                >
                    <SimpleStack>
                        <div
                            class="simple-selector_radio-circle"
                            :class="{
                                radioCircleSelected: value === item.value,
                            }"
                            @click="handleRadioClick(item.value)"
                        >
                            <div
                                :class="{
                                    radioCircleInside: value === item.value,
                                }"
                            ></div>
                        </div>
                        <div class="simple-selector_radio-text">
                            {{ item.label }}
                        </div>
                    </SimpleStack>
                    <div class="simple-selector_radio-helptext">
                        {{ item.helpText }}
                    </div>
                </div>
            </SimpleStack>
        </div>
        <div v-else>
            <div class="simple-selector_form-element">
                <select
                    v-model="select"
                    class="simple-selector_select-box"
                    :disabled="disabled"
                    :class="{
                        selectBoxError: isError(),
                    }"
                >
                    <option hidden value="">{{ initialValue }}</option>
                    <option
                        v-for="(item, index) in items"
                        :key="item.value + index"
                        :value="item.value"
                        class="simple-selector_select-text"
                    >
                        {{ item.label }}
                    </option>
                </select>
                <SelectArrow class="simple-selector_select-icon" />
            </div>
        </div>
        <div v-show="isError()" class="simple-selector_error-message">
            <ExclamationMark class="simple-selector_error-exclamation" />
            <span class="simple-selector_error-text">{{ error }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue-demi';
import { ExclamationMark, SelectArrow } from '@simple-education-dev/icons';
import SimpleStack from '../SimpleStack/SimpleStack.vue';
interface Item {
    value: string;
    label: string;
    helpText?: string;
}
export default defineComponent({
    components: {
        SimpleStack,
        ExclamationMark,
        SelectArrow,
    },
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
            default: '_caption_initial',
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
            context.emit('change', newSelect);
        };
        const select = computed({
            get: () => props.value,
            set: (value: unknown) => {
                context.emit('change', value);
            },
        });
        const isError = () => {
            if (props.error) {
                return props.error.length > 0;
            } else {
                return false;
            }
        };
        return {
            handleRadioClick,
            select,
            isError,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-selector_base {
    display: inline-block;
    text-align: left;
}
.simple-selector_radio-elements {
    margin: $space-05 0;
}
.simple-selector_radio-text {
    font-size: $font-size-5;
}
.simple-selector_radio-helptext {
    margin-top: -8px;
    margin-left: calc(21px + $space-1);
    color: $text;
    font-size: $font-size-5;
}
.simple-selector_radio-circle {
    margin-right: $space-1;
    position: relative;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: $surface;
    border: 0.125rem solid $border-weak;
    transition: border 0.2s;
}
.radioCircleSelected {
    background: $surface;
    border: 0.125rem solid $selected;
}
.radioCircleInside {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $selected;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: background 0.2s;
}
.simple-selector_form-element {
    display: flex;
    align-items: center;
}
.simple-selector_select-box {
    font-size: $font-size-4;
    line-height: $font-size-4;
    appearance: none;
    padding: 11.5px $space-8 11.5px $space-2;
    box-sizing: border-box;
    border: 1px solid $border-weak;
    border-radius: 5px;
    background: $surface;
}
.simple-selector_caption-hidden {
    font-size: $font-size-3;
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
