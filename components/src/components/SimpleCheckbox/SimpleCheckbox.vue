<template>
    <div class="simple-checkbox_base">
        <div
            class="simple-checkbox_checkbox-container"
            :class="{
                checkedBackground: value,
            }"
            @click="hundleChange"
        >
            <CheckMark class="simple-checkbox_checkmark-icon" />
        </div>
        <span v-show="label !== undefined" class="simple-checkbox_label-text" @click="hundleChange">
            {{ label }}
        </span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { CheckMark } from '@simple-education-dev/icons';
export default defineComponent({
    components: {
        CheckMark,
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
    },
    setup(props, context) {
        const hundleChange = () => {
            context.emit('change', !props.value);
        };
        return {
            hundleChange,
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
    width: 17px;
    height: 17px;
    background: $surface;
    border: 1px solid $border;
    border-radius: 4px;
    transition: background 0.1s, border 0.1s;
    cursor: pointer;
    margin: 10px 0;
}
.checkedBackground {
    border: 1px solid $checked;
    background: $checked;
}
.simple-checkbox_checkmark-icon {
    width: 17px;
    height: 17px;
    fill: $surface;
}
</style>
