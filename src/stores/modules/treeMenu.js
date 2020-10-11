/**
 * @namespace treeMenu
 * @description 메뉴 트리 데이터 모듈
 * @memberof store#
 */

export default {
   namespaced: true,



   state: () => ({
      tree: [],
      pathMap: new Map(),
      selected: -1,
      currentPath: '',
      currentIndexes: [],
      currentKeys: []
   }),



   mutations: {
      setTree(state, payload) {
         state.tree = payload;
         state.pathMap.clear();

         // depth 1
         for (let a = 0; a < payload.length; a++) {
            if (payload[a].header)
               state.pathMap.set(`/${payload[a].key}`, {
                  indexes: [a],
                  keys: [payload[a].key],
                  printNames: [payload[a].name],
                  lastKey: payload[a].key,
                  name: payload[a].key,
                  component: payload[a].component
               });

            if (payload[a].child) {
               const aChild = payload[a].child;

               // depth 2
               for (let b = 0; b < aChild.length; b++) {
                  if (aChild[b].component) {
                     state.pathMap.set(`/${payload[a].key}/${aChild[b].key}`, {
                        indexes: [a, b],
                        keys: [payload[a].key, aChild[b].key],
                        printNames: [payload[a].name, aChild[b].name],
                        lastKey: aChild[b].key,
                        name: `${payload[a].key}-${aChild[b].key}`,
                        parentsName: (payload[a].component) ? payload[a].key : undefined,
                        childPath: (payload[a].component) ? aChild[b].key : undefined,
                        component: aChild[b].component
                     });
                  }

                  if (aChild[b].child) {
                     const bChild = aChild[b].child;

                     // depth 3
                     for (let c = 0; c < bChild.length; c++) {
                        if (bChild[c].component) {
                           state.pathMap.set(`/${payload[a].key}/${aChild[b].key}/${bChild[c].key}`, {
                              indexes: [a, b, c],
                              keys: [payload[a].key, aChild[b].key, bChild[c].key],
                              printNames: [payload[a].name, aChild[b].name, bChild[c].name],
                              lastKey: bChild[c].key,
                              name: `${payload[a].key}-${aChild[b].key}-${bChild[c].key}`,
                              parentsName: (aChild[b].component) ? `${payload[a].key}-${aChild[b].key}` : undefined,
                              childPath: (aChild[b].component) ? bChild[c].key : undefined,
                              component: bChild[c].component
                           });
                        }
                     }
                  }
               }
            }
         }

         state.selected = -1;
         state.currentIndexes = [];
         state.currentPath = '';
         state.currentKeys = [];
      },
      setSelected(state, payload) {
         state.selected = payload;
      },
      clearSelected(state) {
         state.selected = -1;
      },
      setCurrentLocation(state, payload) {
         state.currentPath = payload;
         if (state.pathMap.has(payload)) {
            state.currentIndexes = state.pathMap.get(payload).indexes;
            state.currentKeys = state.pathMap.get(payload).keys;
         } else {
            state.currentIndexes = [];
            state.currentKeys = [];
         }
      },
      clearCurrentLocation(state) {
         state.currentPath = '';
         state.currentIndexes = [];
         state.currentKeys = [];
      }
   },



   actions: {

      /**
       * @function fetch
       * @description 메뉴 트리 fetch
       * @async
       * @example
       * import { mapAction } from './common/mappers';
       * await mapAction(store, 'fetch', 'treeMenu')();
       * @return {Boolean} is resolved
       * @memberof store#treeMenu#
       */
      async fetch({ commit }) {
         const data = require('../../assets/examples/treeMenu.json').tree;
         console.log('--- tree menu data ---');
         console.log(data);
         commit('setTree', data);
         return true;
      }
   }
};
