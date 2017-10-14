// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Home from '@/components/Home'

import rackTemplate from '@/components/rackTemplate'
import maps from '@/components/maps'
Vue.config.productionTip = false;
Vue.use(require('vue-script2'))


/* eslint-disable no-new */




Vue.component('home',Home);
Vue.component('racktemplate',rackTemplate);
Vue.component('maps',maps);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
