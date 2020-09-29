import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/TempView.vue')
   }
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
});

export default router;
