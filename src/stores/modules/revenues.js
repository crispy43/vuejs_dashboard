import { parseTableData } from '../../common/parsers';



export default {
   namespaced: true,



   state: () => ({
      // pendings
      pendings: {},
      pendingsHeaders: [],
      pendingsData: [],

      // deposits
      deposits: {},
      depositsHeaders: [],
      depositsData: [],

      // paymentConfirms
      paymentConfirms: {},
      paymentConfirmsHeaders: [],
      paymentConfirmsData: []
   }),



   mutations: {
      setPendings(state, payload) {
         const { map, headers, data } = parseTableData(payload, {
            model: 'revenues/pendings',
            bannedProps: ['updatedAt']
         });
         state.pendings = map;
         state.pendingsHeaders = headers;
         state.pendingsData = data;
      },
      setDeposits(state, payload) {
         const { map, headers, data } = parseTableData(payload, {
            model: 'revenues/deposits',
            bannedProps: ['createdAt', 'updatedAt']
         });
         state.deposits = map;
         state.depositsHeaders = headers;
         state.depositsData = data;
      },
      setPaymentConfirms(state, payload) {
         const { map, headers, data } = parseTableData(payload, {
            model: 'revenues/paymentConfirms'
         });
         state.paymentConfirms = map;
         state.paymentConfirmsHeaders = headers;
         state.paymentConfirmsData = data;
      },
      popPendings(state) {
         state.pendingsData.pop();
      },
      pushPendings(state, payload) {
         state.pendingsData.push(payload);
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
         const pendingsData = require('../../assets/examples/pendings.json');
         console.log('--- pendings data ---');
         console.log(pendingsData);
         commit('setPendings', pendingsData);

         const depositsData = require('../../assets/examples/deposits.json');
         console.log('--- deposits data ---');
         console.log(depositsData);
         commit('setDeposits', depositsData);

         const paymentConfirmsData = require('../../assets/examples/paymentConfirms.json');
         console.log('--- paymentConfirms data ---');
         console.log(paymentConfirmsData);
         commit('setPaymentConfirms', paymentConfirmsData);
         return true;
      }
   }
};
