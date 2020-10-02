import { createStore } from 'vuex';
import treeMenu from './modules/treeMenu';
const { name, version, bugs } = require('../../package.json');

export default createStore({
   state: () => ({
      name,
      version,
      env: process.env.NODE_ENV,
      bugs
   }),
   mutations: {
   },
   actions: {
   },


   
   modules: {
      treeMenu
   }
});
