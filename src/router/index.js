import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Login from '@/components/Login';
import Home from '@/components/Home';

=======
import Hello from '@/components/Hello';
import Goodbye from '@/components/Goodbye'
import rackTemplate from '@/components/rackTemplate'
>>>>>>> Parker/RackList

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
<<<<<<< HEAD
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
    }
=======
        path: '/goodbye',
        name: 'Goodbye',
        component: Goodbye,
    },
   {
      path: '/rack1',
      name: 'Rack1',
      component: rackTemplate,


   },
       {
       path: '/rack2',
       name: 'Rack2',
       component: rackTemplate,

   },
    {
        path: '/rack3',
        name: 'Rack3',
        component: rackTemplate,

   }
>>>>>>> Parker/RackList
  ],
});
