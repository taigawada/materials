<template>
    <div class="simple-checkbox_base">
        <div
            class="simple-checkbox_checkbox-container"
            :class="{
                checkedBackground: value,
            }"
            :style="CheckboxSize()"
            @click="hundleChange"
        >
            <!-- <CheckMark :style="CheckboxSize()" class="simple-checkbox_checkmark-icon" /> -->
            <HyphenBar :style="CheckboxSize()" class="simple-checkbox_checkmark-icon" />
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
    display: flex;
    align-items: center;
}
.simple-checkbox_label-text {
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
    margin: 10px 0;
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
