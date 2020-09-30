export default {
   namespaced: true,



   state: () => ({
      tree: [],
      selected: -1
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
         commit('setTree', require('../../assets/treeMenu.json').tree);
         return true;
      }
   },



   getters: {
   }
};
