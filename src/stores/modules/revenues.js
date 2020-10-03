import { parseAndMapObjectProps } from '../../common/parsers';



export default {
   namespaced: true,



   state: () => ({
      pendings: new Map(),
      pendingsHeaders: [],
      pendingsData: [],

      deposits: new Map(),
      depositsHeaders: [],
      depositsData: []
   }),



   mutations: {
      setPendings(state, payload) {
         state.pendings.clear();
         state.pendingsHeaders = [];
         state.pendingsData = [];
         const { props, namedProps } = parseAndMapObjectProps(payload, 'revenues', [
            'updatedAt'
         ]);
         // set headers
         const pendingsHeaders = [];
         for (const i in props) {
            let type, filter;
            switch (props[i]) {
               case 'checked': type = 'checkbox'; break;
               case 'remark': type = 'input'; break;
               case 'amount': filter = 'comma'; break;
               case 'createdAt': filter = 'date/yMD'; break;
               default: type = 'text'; break;
            }
            pendingsHeaders.push({
               type,
               filter,
               value: namedProps[i]
            });
         }
         state.pendingsHeaders = pendingsHeaders;
         // set map and data
         const pendingsData = [];
         for (const data of payload) {
            if (!data.key) continue;
            const parsedData = {};
            const parsedValues = [];
            for (const prop of props) {
               const parsedValue = 
                  (typeof data[prop] === 'undefined' || data[prop] === 'null') ?
                     "" : data[prop];
               parsedData[prop] = parsedValue;
               parsedValues.push(parsedValue);
            }
            state.pendings.set(parsedData.key, parsedData);
            pendingsData.push(parsedValues);
         }
         state.pendingsData = pendingsData;
      },
      setDeposits(state, payload) {
         state.deposits.clear();
         state.depositsHeaders = [];
         state.depositsData = [];
         const { props, namedProps } = parseAndMapObjectProps(payload, 'revenues', [
            'createdAt', 'updatedAt'
         ]);
         // set headers
         const depositsHeaders = [];
         for (const i in props) {
            let type, filter;
            switch (props[i]) {
               case 'checked': type = 'checkbox'; break;
               case 'amount': filter = 'comma'; break;
               case 'depositedAt': filter = 'date/YMDHMS'; break;
               default: type = 'text'; break;
            }
            depositsHeaders.push({
               type,
               filter,
               value: namedProps[i]
            });
         }
         state.depositsHeaders = depositsHeaders;
         // set map and data
         const depositsData = [];
         for (const data of payload) {
            if (!data.key) continue;
            const parsedData = {};
            const parsedValues = [];
            for (const prop of props) {
               const parsedValue = 
                  (typeof data[prop] === 'undefined' || data[prop] === 'null') ?
                     "" : data[prop];
               parsedData[prop] = parsedValue;
               parsedValues.push(parsedValue);
            }
            state.deposits.set(parsedData.key, parsedData);
            depositsData.push(parsedValues);
         }
         state.depositsData = depositsData;
      }
   },



   actions: {

      /**
       * @function fetch
       * @description 전체 데이터 커밋
       * @param {Object} context vuex instance
       * @param {function} context.commit commit handler
       * @param {Object=} params arguments
       * @return {Boolean} is resolved
       */
      async fetch({ commit }) {
         const pendingsData = require('../../assets/pendings.json');
         console.log('--- pendings data ---');
         console.log(pendingsData);
         commit('setPendings', pendingsData);

         const depositsData = require('../../assets/deposits.json');
         console.log('--- deposits data ---');
         console.log(depositsData);
         commit('setDeposits', depositsData);
         return true;
      }
   }
};
