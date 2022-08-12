<template>
    <div class="tag-base">
        <span class="text"><slot></slot></span>
        <CloseCross class="remove-icon" @click="hundleClickRemove" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { CloseCross } from '@simple-education/icons2';
export default defineComponent({
    components: {
        CloseCross,
    },
    setup(_, context) {
        const hundleClickRemove = () => {
            context.emit('remove');
        };
        return {
            hundleClickRemove,
        };
    },
});
</script>
<style scoped lang="scss">
@use '~/@simple-education/tokens/stylesheet.scss' as *;
.tag-base {
    display: inline-flex;
    align-items: center;
    background: #2c3e50;
    color: $surface;
    font-size: $font-size-4;
    border-radius: 3.5px;
    padding: 1px 10px;
    margin: 0 3px;
    opacity: 0.3;
}
.remove-icon {
    width: 17px;
    height: 16px;
    fill: $surface;
    cursor: pointer;
    margin-left: 10px;
}
</style>
