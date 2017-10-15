import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import maps from '@/components/maps';
import rackTemplate from '@/components/rackTemplate'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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

   },
   {
       path: '/maps',
       name: 'Maps',
       component: maps,

  }
  ],
});
