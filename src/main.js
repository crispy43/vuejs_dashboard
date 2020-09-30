import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';
import { removeSlash, mapMutation } from './common/utils';

// 진입 path 와 상단 메뉴 selection 설정
router.beforeEach((to)=> {
   const { tree } = store.state.treeMenu;
   const pathSplit = to.fullPath.split('/');
   if (!pathSplit[0]) pathSplit.shift();

   if (pathSplit[0]) {
      const currentPathIndex = [];
      pathSplit.reduce((acc, path) => {
         const i = acc.findIndex((el) => removeSlash(el.path) === path);
         currentPathIndex.push(i);
         return acc[i].child;
      }, tree);

      mapMutation(store, 'setCurrentPath', 'treeMenu')({ currentPath: pathSplit, currentPathIndex });
      mapMutation(store, 'setSelected', 'treeMenu')(currentPathIndex[0]);

   } else {
      mapMutation(store, 'clearCurrentPath', 'treeMenu')();
      mapMutation(store, 'clearSelected', 'treeMenu')();
   }
})

createApp(App).use(store).use(router).mount('#app');
