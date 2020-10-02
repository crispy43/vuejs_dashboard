import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Welcome.vue')
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: () => import(/* webpackChunkName: "home" */ '../views/NotFound.vue')
   },
   {
      path: '/assets',
      name: 'Assets',
      component: () => import(/* webpackChunkName: "home" */ '../components/MainHeader.vue'),
      children: [
         {
            path: '/assets/internal/:key',
            name: 'Internal Asset',
            component: () => import(/* webpackChunkName: "home" */ '../views/TempView.vue')
         },
         {
            path: '/assets/external/:key',
            name: 'External Asset',
            component: () => import(/* webpackChunkName: "home" */ '../views/TempView.vue')
         }
      ]
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
});

export default router;
