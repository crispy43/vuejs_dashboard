import { parseTableData, getDataFromMap } from '../../common/parsers';
import { tmpPromise } from '../../common/utils';



export default {
   namespaced: true,



   state: () => ({
      // pendings
      pendings: new Map(),
      pendingsHeaders: [],
      pendingsData: [],
      pendingsChecked: new Set(),

      // deposits
      deposits: new Map(),
      depositsHeaders: [],
      depositsData: [],
      depositsChecked: new Set(),

      // paymentConfirms
      paymentConfirms: new Map(),
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
      checkPending(state, payload) {
         (state.pendingsChecked.has(payload)) ?
            state.pendingsChecked.delete(payload) :
            state.pendingsChecked.add(payload);
      },
      checkDeposit(state, payload) {
         (state.depositsChecked.has(payload)) ?
            state.depositsChecked.delete(payload) :
            state.depositsChecked.add(payload);
      },
      confirm(state) {
         console.log('--- confirm ---');
         const pendingsChecked = Array.from(state.pendingsChecked);
         const depositsChecked = Array.from(state.depositsChecked);
         const pendingItems = Array.from(state.pendings[Symbol.iterator]());
         const depositItems = Array.from(state.deposits[Symbol.iterator]());

         console.log(pendingsChecked);
         console.log(depositsChecked);
         console.log(pendingItems);
         console.log(depositItems);

         const pendings = pendingsChecked.map((i) => {
            return pendingItems[i][1];
         });
         const deposits = depositsChecked.map((i) => {
            return depositItems[i][1];
         });

         console.log(pendings);
         console.log(deposits);

         const matchedArray = [];
         const matchedPendings = [];
         const matchedDeposits = [];

         for (const pending of pendings) {
            for (const deposit of deposits) {
               if (
                  pending.contractor === deposit.contractor &&
                  pending.amount === deposit.amount
               ) {
                  matchedPendings.push(pending.key);
                  matchedDeposits.push(deposit.key);
                  matchedArray.push({
                     key: pending.key,
                     contractor: pending.contractor,
                     type: '테스트',
                     amount: pending.amount,
                     bank: pending.bank,
                     bankAccount: pending.bankAccount,
                     status: 5,
                     remark: '',
                     operator: '관리자',
                     createdAt: pending.createdAt,
                     updatedAt: new Date().toISOString()
                  });
               }
            }
         }

         console.log('--- matched ---');
         console.log(matchedArray);
         console.log('--- matched p ---');
         console.log(matchedPendings);
         console.log('--- matched d ---');
         console.log(matchedDeposits);

         state.pendingsChecked.clear();
         state.depositsChecked.clear();

         for (const key of matchedPendings) {
            state.pendings.delete(key);
         }

         for (const key of matchedDeposits) {
            state.deposits.delete(key);
         }

         const pendingsData = getDataFromMap(state.pendings, ['updatedAt']);
         state.pendingsData = pendingsData;

         console.log('--- pendingsData ---');
         console.log(pendingsData);

         const depositsData = getDataFromMap(state.deposits, ['createdAt', 'updatedAt']);
         state.depositsData = depositsData;

         console.log('--- depositsData ---');
         console.log(depositsData);

         const { map, headers, data } = parseTableData(matchedArray, {
            model: 'revenues/paymentConfirms'
         });
         state.paymentConfirms = map;
         state.paymentConfirmsHeaders = headers;
         state.paymentConfirmsData = data;
      }
   },



   actions: {

      /**
       * @function fetchPendings
       * @description 매출내역 데이터 커밋
       * @param {Object} context vuex instance
       * @param {function} context.commit commit handler
       * @param {Object=} options arguments
       * @return {Boolean} is resolved
       */
      async fetchPendings({ commit }) {
         await tmpPromise(500);
         const pendingsData = require('../../assets/examples/pendings.json');
         commit('setPendings', pendingsData);
         return true;
      },



      /**
       * @function fetchDeposits
       * @description 입금내역 데이터 커밋
       * @param {Object} context vuex instance
       * @param {function} context.commit commit handler
       * @param {Object=} options arguments
       * @return {Boolean} is resolved
       */
      async fetchDeposits({ commit }) {
         await tmpPromise(250);
         const depositsData = require('../../assets/examples/deposits.json');
         commit('setDeposits', depositsData);
         return true;
      },



      /**
       * @function fetchPaymentConfirms
       * @description 입금확인 데이터 커밋
       * @param {Object} context vuex instance
       * @param {function} context.commit commit handler
       * @param {Object=} options arguments
       * @return {Boolean} is resolved
       */
      async fetchPaymentConfirms({ commit }) {
         const paymentConfirmsData = require('../../assets/examples/paymentConfirms.json');
         commit('setPaymentConfirms', paymentConfirmsData);
         return true;
      }
   }
};
