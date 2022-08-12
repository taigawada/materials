<template>
    <div class="base">
        <div
            class="checkbox"
            :class="{
                checkedBackground: value,
            }"
            @click="hundleChange"
        >
            <CheckMark class="checkmark" />
        </div>
        <span v-show="label !== undefined" class="label-text" @click="hundleChange">
            {{ label }}
        </span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { CheckMark } from '@simple-education/icons2';
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
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.base {
    display: flex;
    align-items: center;
}
.label-text {
    margin-left: $space-4;
    cursor: pointer;
}
.checkbox {
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
.checkmark {
    width: 17px;
    height: 17px;
    fill: $surface;
}
</style>
