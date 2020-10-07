export default (store) => {

   const pathMap = store.state.treeMenu.pathMap;
   const routes = [
      {
         path: '/',
         name: 'Home',
         component: () => import('../views/Welcome.vue')
      },
      {
         path: '/:pathMatch(.*)*',
         name: 'NotFound',
         component: () => import('../views/NotFound.vue')
      },
      {
        path: '/signin/:pathMatch(.*)*',
        name: 'SignIn',
        component: () => import('../views/SignIn.vue')
     }
   ];

   for (const [path, { name, parentsName, childPath, component, params }] of pathMap) {

      if (parentsName) {
         const parentsIndex = routes.findIndex((el)=> el.name === parentsName);
         if (parentsIndex > -1) routes[parentsIndex].children.push({
            path: (params) ? `${childPath}${params}` : childPath,
            name,
            component: () => import(`../views/${component}.vue`),
            children: []
         });

      } else {
         routes.push({
            path: (params) ? `${path}${params}` : path,
            name,
            component: () => import(`../views/${component}.vue`),
            children: []
         });
      }
   }

   console.log('--- dynamic routes ---');
   console.log(routes);

   return routes;
}
