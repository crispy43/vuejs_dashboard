import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './stores';
import staticRoutes from './routes/static';
import dynamicRoutes from './routes/dynamic';
import { mapMutation, mapAction } from './common/mappers';



(async ()=> {

   /**
    * @name FetchTreeMenu
    * @global
    * @description 메뉴 데이터 패치
    */
   
   await mapAction(store, 'fetch', 'treeMenu')();



   /**
    * @name Router
    * @global
    * @description Router 인스턴스 생성
    * @param {Array} [routes = staticRoutes] 라우트 배열 (동적 생성 또는 staticRoutes)
    */

   const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: dynamicRoutes(store) || staticRoutes
   });



   /**
    * @name beforeEach
    * @global
    * @description 라우터 진입시 인증 여부 확인
    * @param {Function} callback
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
    * @name afterEach
    * @global
    * @description 라우터 진입 이후마다 menu selection 및 current location 적용
    * @param {Function} callback
    */

   router.afterEach((to)=> {
      console.log('--- router to ---');
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
         if (!to.params.key) 
            to.params.key = store.state.treeMenu.currentKeys[store.state.treeMenu.currentKeys.length - 1];
         
         console.log('--- router to params ---');
         console.log(to.params);

      } catch (error) {
         console.error(error);
         mapMutation(store, 'clearCurrentPath', 'treeMenu')();
         mapMutation(store, 'clearSelected', 'treeMenu')();
      }
   });

   

   createApp(App).use(store).use(router).mount('#app');
})();
