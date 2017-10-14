import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Goodbye from '@/components/Goodbye'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
        path: '/goodbye',
        name: 'Goodbye',
        component: Goodbye
    }
  ],
});
