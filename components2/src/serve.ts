import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);
import PlayGround from './PlayGround.vue';

Vue.config.productionTip = false;
console.log('running on playground');
new Vue({
    render: (h) => h(PlayGround),
}).$mount('#app');
