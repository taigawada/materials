<template>
    <div class="simple-tag_base">
        <span class="text"><slot></slot></span>
        <CloseCross class="simple-tag_remove-icon" @click="hundleClickRemove" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi';
import { CloseCross } from '@simple-education-dev/icons';
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
@use '@simple-education-dev/tokens/styles' as *;
.simple-tag_base {
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
.simple-tag_remove-icon {
    width: 17px;
    height: 16px;
    fill: $surface;
    cursor: pointer;
    margin-left: 10px;
}
</style>
