// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Hello from '@/components/Hello'
import Goodbye from '@/components/Goodbye'
import rackTemplate from '@/components/rackTemplate'
Vue.config.productionTip = false;

/* eslint-disable no-new */

Vue.component('hello',Hello);
Vue.component('goodbye',Goodbye);
Vue.component('racktemplate',rackTemplate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
