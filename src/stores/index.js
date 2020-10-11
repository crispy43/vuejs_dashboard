import { createStore } from 'vuex';
import treeMenu from './modules/treeMenu';
import revenues from './modules/revenues';
const { name, version, bugs } = require('../../package.json');


/**
 * @namespace store
 * @description vuex 데이터 스토어
 */
export default createStore({
   state: () => ({
      name,
      version,
      env: process.env.NODE_ENV,
      bugs,
      isAuthenticated: false,
      isModalOn: false
   }),
   mutations: {
      setIsAuthenticated(state, payload) {
         state.isAuthenticated = payload;
      },
      setIsModalOn(state, payload) {
         state.isModalOn = payload;
      }
   },
   actions: {
   },


   
   modules: {
      treeMenu,
      revenues
   }
});
