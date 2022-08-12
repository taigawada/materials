<template>
    <div id="app">
        <h1>Playground</h1>
        <CloseButton />
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CloseButton from "./icons/CloseButton.vue";
export default defineComponent({
    components: {
        CloseButton
    }
})
</script>
<style>
body {
    background: #f4f4f4;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 50px;
}
</style>
