import { createApp } from 'vue';
import { isVue3 } from 'vue-demi';

console.log(`running on ${isVue3 ? 'Vue3' : 'Vue2'}`);

// @ts-ignore
import PlayGround from './PlayGround.vue';

import themeInstall from './utils/theme/themeInstall';
const app = createApp(PlayGround);

// import switchJson from './switchTest.json';
app.use(themeInstall, {});
app.mount('#app');
