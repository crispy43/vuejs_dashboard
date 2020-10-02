import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';
import { mapMutation } from './common/utils';



// 진입 path 와 상단 메뉴 selection 설정
router.beforeEach((to)=> {
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



createApp(App).use(store).use(router).mount('#app');
