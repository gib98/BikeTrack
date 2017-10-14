// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Hello from '@/components/Hello'
import Goodbye from '@/components/Goodbye'
<<<<<<< HEAD
import Login from '@/components/Login'
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from './helpers/firebaseConfig'
import Home from '@/components/Home'
import {UserState} from './helpers/state'

=======
import rackTemplate from '@/components/rackTemplate'
>>>>>>> Parker/RackList
Vue.config.productionTip = false;

/* eslint-disable no-new */

<<<<<<< HEAD
// Vue.component('hello',Hello);
// Vue.component('goodbye',Goodbye);
// Vue.prototype.firebaseInited = false;
// function checkLoginState() {
//     return new Promise((resolve, reject) => {
//         console.log("firebase init ran: " + Vue.firebaseInited);
//         let x = firebase.auth().currentUser();
//         resolve(x);
//     });
// }
//

//lifesaver: https://forum.vuejs.org/t/firebase-auth-and-vue-router/3086/3
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

Vue.component('login', Login);
Vue.component('home', Home)

//lifesaver: https://forum.vuejs.org/t/firebase-auth-and-vue-router/3086/3
const unsubscribe = firebase.initializeApp(config).auth().onAuthStateChanged(() => {
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
    unsubscribe();

=======
Vue.component('hello',Hello);
Vue.component('goodbye',Goodbye);
Vue.component('racktemplate',rackTemplate);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
>>>>>>> Parker/RackList
});
