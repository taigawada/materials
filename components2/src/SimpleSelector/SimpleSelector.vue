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
        <div class="form">
            <select
                v-model="select"
                class="select-box"
                :disabled="disabled"
                :class="{
                    selectBoxError: isError,
                }"
            >
                <option hidden value="">{{ initialValue }}</option>
                <option
                    v-for="(item, index) in items"
                    :key="item.value + index"
                    :value="item.value"
                >
                    {{ item.label }}
                </option>
            </select>
            <SimpleIcon class="select-icon" size="15px">
                <SelectArrow />
            </SimpleIcon>
        </div>
        <div v-show="isError" class="error">
            <SimpleIcon class="exclamation">
                <ExclamationMark size="16px" color="rgba(255, 121, 121, 1)" />
            </SimpleIcon>
            <span class="error-text">{{ error }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api';
import { ExclamationMark, SelectArrow } from '@simple-education/icons2';
import SimpleIcon from '../SimpleIcon/SimpleIcon.vue';
interface Item {
    value: string;
    label: string;
}
export default defineComponent({
    components: {
        ExclamationMark,
        SelectArrow,
        SimpleIcon,
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
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.form {
    display: flex;
    align-items: center;
}
.select-box {
    font-size: $font-size-4;
    appearance: none;
    padding: $space-025 $space-8 $space-025 $space-2;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background: #fff;
}
.caption-hidden {
    padding: 0 5px;
    display: block;
    text-align: left;
    opacity: 0;
}
.caption {
    opacity: 1;
}
.selectBoxError {
    border: 1px solid #ff7979;
    background: rgb(255, 240, 240);
}
.select-box:focus {
    border: 1px solid #ffc255;
    z-index: 10;
    outline: 0;
}
.select-icon {
    enable-background: new 0 0 512 512;
    position: relative;
    right: $space-6;
    z-index: 11;
}
.error {
    display: flex;
}
.exclamation {
    enable-background: new 0 0 512 512;
    margin-left: 3px;
    margin-right: 5px;
}
.error-text {
    color: #c40000;
}
</style>
