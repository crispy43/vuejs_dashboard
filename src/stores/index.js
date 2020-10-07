import { createStore } from 'vuex';
import treeMenu from './modules/treeMenu';
import revenues from './modules/revenues';
const { name, version, bugs } = require('../../package.json');



export default createStore({
   state: () => ({
      name,
      version,
      env: process.env.NODE_ENV,
      bugs,
      isAuthenticated: false
   }),
   mutations: {
      setIsAuthenticated(state, payload) {
         state.isAuthenticated = payload;
      }
   },
   actions: {
   },


   
   modules: {
      treeMenu,
      revenues
   }
});
