export default {
   namespaced: true,



   state: () => ({
      menuTree: {}
   }),



   mutations: {
      setMenuTree(state, payload) {
         state.menuTree = JSON.parse(JSON.stringify(payload));
      },
      clearMenuTree(state) {
         state.menuTree = {};
      }
   },



   actions: {

      /**
       * @function fetch
       * @param {Object} context vuex instance
       * @param {Object=} payload payload
       * @return {Boolean} is resolved
       */
      async fetch({ commit }) {
         commit('setMenuTree', require('../../assets/treeMenu.json').tree);
         return true;
      }
   },



   getters: {
   }
};
