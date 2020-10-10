import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './stores';
import staticRoutes from './routes/static';
import dynamicRoutes from './routes/dynamic';
import { mapMutation, mapAction } from './common/mappers';



(async ()=> {
   // treeMenu fetch
   await mapAction(store, 'fetch', 'treeMenu')();

   // router instance create (dynamic or static)
   const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: dynamicRoutes(store) || staticRoutes,
   });



   /**
    * @namespace router
    * @description router 인스턴스
    */

   /**
    * @function beforeEach
    * @description 라우터 진입시 인증 여부 확인
    * @param {Function} callback
    * @memberof router#
    */

   router.beforeEach((to, from, next) => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (to.name !== 'SignIn' && !accessToken && !refreshToken) {
         mapMutation(store, 'setIsAuthenticated')(false);
         next({ path: '/signin' });
      }
      next();
   });



   /**
    * @function afterEach
    * @description 라우터 진입 이후 menu selection 및 current location 적용
    * @param {Function} callback
    * @memberof router#
    */

   router.afterEach((to)=> {
      let fullPath = to.fullPath.split('/');
      for (let i in fullPath) {
         if (!fullPath[i]) fullPath.shift();
         else break;
      }
      fullPath = '/' + fullPath.join('/');

      try {
         mapMutation(store, 'setCurrentLocation', 'treeMenu')(fullPath);
         mapMutation(store, 'setSelected', 'treeMenu')(store.state.treeMenu.currentIndexes[0]);
         if (!to.params.key) 
            to.params.key = store.state.treeMenu.currentKeys[store.state.treeMenu.currentKeys.length - 1];

      } catch (error) {
         console.error(error);
         mapMutation(store, 'clearCurrentPath', 'treeMenu')();
         mapMutation(store, 'clearSelected', 'treeMenu')();
      }
   });



   // create app
   createApp(App).use(store).use(router).mount('#app');
})();
