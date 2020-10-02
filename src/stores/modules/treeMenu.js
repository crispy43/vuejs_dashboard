export default {
   namespaced: true,



   state: () => ({
      tree: [],
      pathMap: new Map(),
      keyMap: new Map(),
      selected: -1,
      currentPath: '',
      currentIndexes: [],
      currentKeys: []
   }),



   mutations: {
      clearTree(state) {
         state.tree = [];
         state.pathMap.clear();
         state.keyMap.clear();
         state.selected = -1;
         state.currentIndexes = [];
         state.currentPath = '';
         state.currentKeys = [];
      },
      setTree(state, payload) {
         state.tree = payload;

         /* tree parser */

         // depth 1
         for (let a = 0; a < payload.length; a++) {

            // pathMap
            if (payload[a].header)
               state.pathMap.set(`/${payload[a].key}`, {
                  indexes: [a],
                  keys: [payload[a].key],
                  lastKey: payload[a].key,
                  name: payload[a].key,
                  component: payload[a].component
               });

            // keyMap
            state.keyMap.set(payload[a].key, [payload[a].name, null, null]);

            if (payload[a].child) {
               const aChild = payload[a].child;

               // depth 2
               for (let b = 0; b < aChild.length; b++) {

                  // pathMap
                  if (aChild[b].component) 
                     state.pathMap.set(`/${payload[a].key}/${aChild[b].key}`, {
                        indexes: [a, b],
                        keys: [payload[a].key, aChild[b].key],
                        lastKey: aChild[b].key,
                        name: `${payload[a].key}-${aChild[b].key}`,
                        parentsName: (payload[a].component) ? payload[a].key : undefined,
                        childPath: (payload[a].component) ? aChild[b].key : undefined,
                        component: aChild[b].component
                     });
                     
                  // keyMap
                  let bName; 
                  if (state.keyMap.has(aChild[b].key)) {
                     bName = state.keyMap.get(aChild[b].key);
                     bName[1] = aChild[b].name;
                  }
                  else bName = [null, aChild[b].name, null];
                  state.keyMap.set(aChild[b].key, bName);

                  if (aChild[b].child) {
                     const bChild = aChild[b].child;

                     // depth 3
                     for (let c = 0; c < bChild.length; c++) {

                        // pathMap
                        if (bChild[c].component)
                           state.pathMap.set(`/${payload[a].key}/${aChild[b].key}/${bChild[c].key}`, {
                              indexes: [a, b, c],
                              keys: [payload[a].key, aChild[b].key, bChild[c].key],
                              lastKey: bChild[c].key,
                              name: `${payload[a].key}-${aChild[b].key}-${bChild[c].key}`,
                              parentsName: (aChild[b].component) ? `${payload[a].key}-${aChild[b].key}` : undefined,
                              childPath: (aChild[b].component) ? bChild[c].key : undefined,
                              component: bChild[c].component
                           });

                        // keyMap
                        let cName; 
                        if (state.keyMap.has(bChild[c].key)) {
                           cName = state.keyMap.get(bChild[c].key);
                           cName[2] = bChild[c].name;
                        }
                        else cName = [null, null, bChild[c].name];
                        state.keyMap.set(bChild[c].key, cName);
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
       * @description 메뉴 데이터 커밋, 동적 Nav 생성
       * @param {Object} context vuex instance
       * @param {Object=} params arguments
       * @return {Boolean} is resolved
       */
      async fetch({ commit }) {
         const data = require('../../assets/treeMenu.json').tree;
         console.log('--- tree menu data ---');
         console.log(data);
         commit('setTree', data);
         return true;
      }
   }
};
