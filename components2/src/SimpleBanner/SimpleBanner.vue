<template>
    <div class="base">
        <div class="header">
            <SimpleIcon color="rgba(196, 113, 67, 1)">
                <ExclamationMark />
            </SimpleIcon>
            <div v-show="title !== undefined" class="heading">{{ title }}</div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
        <SimpleButton v-show="buttonLabel !== undefined" plain class="button" @click="hundleClick">{{ buttonLabel }}</SimpleButton>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SimpleIcon from '../SimpleIcon/SimpleIcon.vue';
import { ExclamationMark } from '@simple-education/icons2';
import SimpleButton from '../SimpleButton/SimpleButton.vue';
export default defineComponent({
    components: {
        SimpleButton,
        SimpleIcon,
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
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.base {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background: $theme-color-alpha;
    border: 1px solid $theme-color;
    border-radius: $border-radius-1;
    box-sizing: border-box;
    padding: $space-2 $space-3;
}
.header {
    font-size: $font-size-4;
    display: flex;
    align-items: center;
}
.heading {
    margin: 0 $space-5;
}
.content {
    font-size: $font-size-4;
    padding: $space-1 0;
    text-align: left;
    display: inline;
}
.button {
    margin: 0 0 0 auto;
}
</style>
