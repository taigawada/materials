import Vue from 'vue';
import { install, isVue3 } from 'vue-demi';
install();

console.log(`running on ${isVue3 ? 'Vue3' : 'Vue2'}`);

import PlayGround from './PlayGround.vue';

new Vue({
    /* @ts-ignore */
    render: (h) => h(PlayGround),
}).$mount('#app');
