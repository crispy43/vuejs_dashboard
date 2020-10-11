import { parseTableData } from '../../common/parsers';
import { tmpPromise } from '../../common/utils';



/**
 * @namespace revenues
 * @description 매출 데이터 모듈
 * @memberof store#
 */

export default {
   namespaced: true,



   state: () => ({
      // pendings
      pendings: new Map(),
      pendingsHeaders: [],
      pendingsData: [],
      pendingsChecked: new Set(),
      pendingsMatched: new Set(),

      // deposits
      deposits: new Map(),
      depositsHeaders: [],
      depositsData: [],
      depositsChecked: new Set(),
      depositsMatched: new Set(),

      // paymentConfirms
      paymentConfirms: new Map(),
      paymentConfirmsHeaders: [],
      paymentConfirmsData: [],

      // contracts
      contracts: new Map(),
      contractsHeaders: [],
      contractsData: []
   }),



   mutations: {
      setPendings(state, payload) {
         const { map, headers, data } = parseTableData(payload, {
            model: 'revenues/pendings',
            bannedProps: ['updatedAt']
         });
         state.pendingsChecked.clear();
         state.pendings = map;
         state.pendingsHeaders = headers;
         state.pendingsData = data;
      },
      setDeposits(state, payload) {
         const { map, headers, data } = parseTableData(payload, {
            model: 'revenues/deposits',
            bannedProps: ['createdAt', 'updatedAt']
         });
         state.depositsChecked.clear();
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
      setContracts(state, payload) {
         const { map, headers, data } = parseTableData(payload, {
            model: 'revenues/contracts',
            bannedProps: ['createdAt'],
            tableWidth: 200
         });
         state.contracts = map;
         state.contractsHeaders = headers;
         state.contractsData = data;
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
      clearMatched(state) {
         const pendingsMatched = Array.from(state.pendingsMatched);
         const depositsMatched = Array.from(state.depositsMatched);
         for (const index of pendingsMatched) {
            state.pendingsChecked.delete(index);
         }
         for (const index of depositsMatched) {
            state.depositsMatched.delete(index);
         }
         state.pendingsMatched.clear();
         state.depositsMatched.clear();
         state.paymentConfirms = new Map;
         state.paymentConfirmsData = [];
      },
      confirm(state) {
         let pendingsChecked = Array.from(state.pendingsChecked);
         let depositsChecked = Array.from(state.depositsChecked);
         const pendingsItems = Array.from(state.pendings.values());
         const depositsItems = Array.from(state.deposits.values());
         pendingsChecked = pendingsChecked.map((i) => pendingsItems[i]);
         depositsChecked = depositsChecked.map((i) => depositsItems[i]);
         const matchedArray = [];

         for (const pending of pendingsChecked) {
            for (const deposit of depositsChecked) {
               if (
                  pending.contractor === deposit.contractor &&
                  pending.amount === deposit.amount
               ) {
                  if (
                     state.pendingsChecked.has(pending._.index) &&
                     state.depositsChecked.has(deposit._.index)
                  ) {
                     state.pendingsMatched.add(pending._.index);
                     state.pendingsChecked.delete(pending._.index);
                     state.depositsMatched.add(deposit._.index);
                     state.depositsChecked.delete(deposit._.index);
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
         }

         console.log('--- matched ---');
         console.log(matchedArray);

         if (matchedArray.length > 0) {
            const { map, headers, data } = parseTableData(matchedArray, {
               model: 'revenues/paymentConfirms'
            });
            for (const data of Array.from(map.values())) {
               state.paymentConfirms.set(data.key, data);
            }
            state.paymentConfirms = map;
            state.paymentConfirmsHeaders = headers;
            state.paymentConfirmsData = [state.paymentConfirmsData, data].flat();
         }
      }
   },



   actions: {
      
      /**
       * @function fetchPendings
       * @description 매출내역 데이터 커밋
       * @async
       * @example
       * import { mapAction } from './common/mappers';
       * await mapAction(store, 'fetchPendings', 'revenues')();
       * @return {Boolean} is resolved
       * @memberof store#revenues#
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
       * @async
       * @example
       * import { mapAction } from './common/mappers';
       * await mapAction(store, 'fetchDeposits', 'revenues')();
       * @return {Boolean} is resolved
       * @memberof store#revenues#
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
       * @async
       * @example
       * import { mapAction } from './common/mappers';
       * await mapAction(store, 'fetchPaymentConfirms', 'revenues')();
       * @return {Boolean} is resolved
       * @memberof store#revenues#
       */

      async fetchPaymentConfirms({ commit }) {
         const paymentConfirmsData = require('../../assets/examples/paymentConfirms.json');
         commit('setPaymentConfirms', paymentConfirmsData);
         return true;
      },



      /**
       * @function fetchContracts
       * @description 계약목록 데이터 커밋
       * @async
       * @example
       * import { mapAction } from './common/mappers';
       * await mapAction(store, 'fetchContracts', 'revenues')();
       * @return {Boolean} is resolved
       * @memberof store#revenues#
       */

      async fetchContracts({ commit }) {
         await tmpPromise(350);
         const contractsData = require('../../assets/examples/contracts.json');
         commit('setContracts', contractsData);
         return true;
      },
   }
};
