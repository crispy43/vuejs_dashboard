import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';
import { mapMutation } from './common/utils';

// 진입 path 와 상단 메뉴 selection 설정
router.beforeEach((to)=> {
   const { tree } = store.state.treeMenu;
   const pathMatch = to.params.pathMatch;

   if (Array.isArray(pathMatch)) {
      const selected = tree.findIndex((el) => el.path.replace(/\//gi, "") === pathMatch[0]);
      mapMutation(store, 'setCurrentPath', 'treeMenu')(pathMatch);
      mapMutation(store, 'setSelected', 'treeMenu')(selected);

   } else {
      mapMutation(store, 'clearCurrentPath', 'treeMenu')();
      mapMutation(store, 'clearSelected', 'treeMenu')();
   }
})

createApp(App).use(store).use(router).mount('#app');
