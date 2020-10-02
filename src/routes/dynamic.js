export default (store) => {

   const pathMap = store.state.treeMenu.pathMap;
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

   console.log(routes);

   return routes;
}
