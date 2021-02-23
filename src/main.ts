import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
