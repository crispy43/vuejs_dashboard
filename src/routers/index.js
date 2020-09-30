import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/Welcome.vue')
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
   },
   {
      path: '/assets/internal/:pathMatch(.*)*',
      name: 'Internal Assets',
      component: () => import(/* webpackChunkName: "about" */ '../views/TempView.vue')
   },
   {
      path: '/assets/external/:pathMatch(.*)*',
      name: 'External Assets',
      component: () => import(/* webpackChunkName: "about" */ '../views/TempView.vue')
   }
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
});

export default router;
