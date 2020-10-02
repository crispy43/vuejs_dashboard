export default [
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
      path: '/assets/internal',
      name: 'internal',
      component: () => import(/* webpackChunkName: "home" */ '../views/MainHeader.vue'),
      children: [
         {
            path: 'asta',
            name: 'asta',
            component: () => import(/* webpackChunkName: "home" */ '../views/TempView.vue')
         }
      ]
   },
   {
      path: '/assets/external',
      name: 'external',
      component: () => import(/* webpackChunkName: "home" */ '../views/MainHeader.vue'),
      children: [
         {
            path: 'bmp',
            name: 'bmp',
            component: () => import(/* webpackChunkName: "home" */ '../views/TempView.vue')
         },
         {
            path: 'exe',
            name: 'exe',
            component: () => import(/* webpackChunkName: "home" */ '../views/TempView.vue')
         }
      ]
   }
];
