import Vue from 'vue';
import { install } from 'vue-demi';
install();

import PlayGround from './PlayGround.vue';

new Vue({
    render: (h) => h(PlayGround),
}).$mount('#app');
