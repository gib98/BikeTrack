import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Goodbye from '@/components/Goodbye'
import rackTemplate from '@/components/rackTemplate'

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
  ],
});
