import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './stores';
// import staticRoutes from './routes/static';
import dynamicRoutes from './routes/dynamic';
import { mapMutation, mapAction } from './common/utils';



(async ()=> {
   // fetch treeMap
   await mapAction(store, 'fetch', 'treeMenu')();

   // routes
   const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      // routes: staticRoutes
      routes: dynamicRoutes(store)
   });

   // router nav guard
   // 라우터 진입 후 selection 및 current location 적용
   router.afterEach((to)=> {
      console.log(to);
      let fullPath = to.fullPath.split('/');
      for (let i in fullPath) {
         if (!fullPath[i]) fullPath.shift();
         else break;
      }
      fullPath = '/' + fullPath.join('/');

      try {
         mapMutation(store, 'setCurrentLocation', 'treeMenu')(fullPath);
         mapMutation(store, 'setSelected', 'treeMenu')(store.state.treeMenu.currentIndexes[0]);

      } catch (error) {
         console.error(error);
         mapMutation(store, 'clearCurrentPath', 'treeMenu')();
         mapMutation(store, 'clearSelected', 'treeMenu')();
      }
   });

   // createApp
   createApp(App).use(store).use(router).mount('#app');
})();
