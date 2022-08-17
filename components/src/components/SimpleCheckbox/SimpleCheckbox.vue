<template>
    <div class="simple-checkbox_base">
        <div
            ref="childBox"
            class="simple-checkbox_checkbox-container"
            :class="{
                checkedBackground: value,
            }"
            :style="CheckboxSize()"
            @click="hundleChange"
        >
            <CheckMark v-show="!indeterminate" :style="CheckboxSize()" class="simple-checkbox_checkmark-icon" />
            <HyphenBar v-show="indeterminate" :style="CheckboxSize()" class="simple-checkbox_checkmark-icon" />
        </div>
        <span v-show="label !== undefined" class="simple-checkbox_label-text" @click="hundleChange">
            {{ label }}
        </span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { CheckMark, HyphenBar } from '@simple-education-dev/icons';
export default defineComponent({
    components: {
        CheckMark,
        HyphenBar,
    },
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
        const hundleChange = () => {
            context.emit('change', !props.value);
        };
        const CheckboxSize = () => ({
            '--checkbox-size': props.size,
        });
        return {
            hundleChange,
            CheckboxSize,
        };
    },
});
</script>

<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-checkbox_base {
    display: inline-flex;
    align-items: center;
}
.simple-checkbox_label-text {
    padding: $space-3 0;
    margin-left: $space-4;
    cursor: pointer;
}
.simple-checkbox_checkbox-container {
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    background: $surface;
    border: 1px solid $border;
    border-radius: calc(var(--checkbox-size) / 4);
    transition: background 0.1s, border 0.1s;
    cursor: pointer;
}
.checkedBackground {
    border: 1px solid $checked;
    background: $checked;
}
.simple-checkbox_checkmark-icon {
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    fill: $surface;
}
</style>
