export default {
   namespaced: true,



   state: () => ({
      tree: [],
      selected: -1,
      currentPath: [],
      currentPathIndex: []
   }),



   mutations: {
      setTree(state, payload) {
         state.tree = payload;
         state.selected = -1;
      },
      clearTree(state) {
         state.tree = [];
         state.selected = -1;
      },
      setSelected(state, payload) {
         state.selected = payload;
      },
      clearSelected(state) {
         state.selected = -1;
      },
      setCurrentPath(state, payload) {
         state.currentPath = payload.currentPath;
         state.currentPathIndex = payload.currentPathIndex;
      },
      clearCurrentPath(state) {
         state.currentPath = [];
         state.currentPathIndex = [];
      }
   },



   actions: {

      /**
       * @function fetch
       * @description 트리메뉴 fetch
       * @param {Object} context vuex instance
       * @param {Object=} params arguments
       * @return {Boolean} is resolved
       */
      async fetch({ commit }) {
         commit('setTree', require('../../assets/treeMenu.json').tree);
         return true;
      }
   },



   getters: {
      currentFullPath(state) {
         return '/' + state.currentPath.join('/');
      }
   }
};
