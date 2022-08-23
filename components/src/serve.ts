import { createApp } from 'vue';
import { isVue3 } from 'vue-demi';

console.log(`running on ${isVue3 ? 'Vue3' : 'Vue2'}`);

import PlayGround from './PlayGround.vue';

createApp(PlayGround).mount('#app');
