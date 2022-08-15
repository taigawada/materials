<template>
    <div class="simple-banner_base">
        <div class="simple-banner_header">
            <ExclamationMark class="simple-banner_exclamation_mark" />
            <div v-show="title !== undefined" class="simple-banner_heading">{{ title }}</div>
        </div>
        <div class="simple-banner-content">
            <slot></slot>
        </div>
        <SimpleButton v-show="buttonLabel !== undefined" plain class="simple-banner_button" @click="hundleClick">
            {{ buttonLabel }}
        </SimpleButton>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { ExclamationMark } from '@simple-education-dev/icons';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
export default defineComponent({
    components: {
        SimpleButton,
        ExclamationMark,
    },
    props: {
        title: {
            type: String,
            default: undefined,
            required: false,
        },
        buttonLabel: {
            type: String,
            required: true,
        },
    },
    setup(_, context) {
        const hundleClick = () => {
            context.emit('action');
        };
        return {
            hundleClick,
        };
    },
});
</script>
<style scoped lang="scss">
@use '@simple-education-dev/tokens/styles' as *;
.simple-banner_base {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: $surface-warning-alpha;
    border: 1px solid $surface-warning;
    border-radius: $border-radius-1;
    box-sizing: border-box;
    padding: $space-2 $space-3;
}
.simple-banner_header {
    font-size: $font-size-4;
    display: flex;
    align-items: center;
}
.simple-banner_heading {
    margin: 0 $space-5;
}
.simple-banner_content {
    font-size: $font-size-4;
    padding: $space-1 0;
    text-align: left;
    display: inline;
}
.simple-banner_button {
    margin: 0 0 0 auto;
}
.simple-banner_exclamation_mark {
    width: 18px;
    height: 18px;
    fill: $surface-warning-deep;
}
</style>
