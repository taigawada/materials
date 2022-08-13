import Vue from 'vue';
import { createApp } from 'vue3';
import { install, isVue3 } from 'vue-demi';
install();

console.log(`running on ${isVue3 ? 'Vue3' : 'Vue2'}`);

import PlayGround from './PlayGround.vue';

if (isVue3) {
    createApp(PlayGround).mount('#app');
} else {
    new Vue({
        render: (h) => h(PlayGround),
    }).$mount('#app');
}
