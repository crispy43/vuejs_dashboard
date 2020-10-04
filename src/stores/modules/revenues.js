import { parseAndMapObjectProps } from '../../common/parsers';
import { witPer } from '../../common/utils';



export default {
   namespaced: true,



   state: () => ({
      pendings: new Map(),
      pendingsHeaders: [],
      pendingsData: [],

      deposits: new Map(),
      depositsHeaders: [],
      depositsData: [],

      paymentConfirms: new Map(),
      paymentConfirmsHeaders: [],
      paymentConfirmsData: []
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
            let type, filter, width;
            switch (props[i]) {
               case 'checked':
                  type = 'checkbox';
                  width = witPer(0.5, props.length);
                  break;
               case 'remark':
                  type = 'input';
                  width = witPer(1.5, props.length);
                  break;
               case 'amount':
                  filter = 'comma';
                  width = witPer(1, props.length);
                  break;
               case 'bankAccount':
                  width = witPer(1.5, props.length);
                  break;
               case 'status':
                  width = witPer(0.75, props.length);
                  break;
               case 'createdAt':
                  filter = 'date/yMD';
                  width = witPer(0.75, props.length);
                  break;
               default:
                  width = witPer(1, props.length);
                  break;
            }
            pendingsHeaders.push({
               type,
               filter,
               width,
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
            let type, filter, width;
            switch (props[i]) {
               case 'checked':
                  type = 'checkbox';
                  width = witPer(0.5, props.length);
                  break;
               case 'key':
                  width = witPer(0.75, props.length);
                  break;
               case 'contractor':
                  width = witPer(0.75, props.length);
                  break;
               case 'amount':
                  filter = 'comma';
                  width = witPer(1, props.length);
                  break;
               case 'bankAccount':
                  width = witPer(1.5, props.length);
                  break;
               case 'depositedAt':
                  filter = 'date/YMDHMS';
                  width = witPer(1.5, props.length);
                  break;
               default:
                  width = witPer(1, props.length);
                  break;
            }
            depositsHeaders.push({
               type,
               filter,
               width,
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
      },
      setPaymentConfirms(state, payload) {
         state.paymentConfirms.clear();
         state.paymentConfirmsHeaders = [];
         state.paymentConfirmsData = [];
         const { props, namedProps } = parseAndMapObjectProps(payload, 'revenues');
         // set headers
         const paymentConfirmsHeaders = [];
         for (const i in props) {
            let type, filter, width;
            switch (props[i]) {
               case 'remark':
                  type = 'input';
                  width = witPer(1, props.length);
                  break;
               case 'amount':
                  filter = 'comma';
                  width = witPer(1, props.length);
                  break;
               case 'createdAt':
                  filter = 'date/yMDHM';
                  width = witPer(1, props.length);
                  break;
               case 'updatedAt':
                  filter = 'date/yMDHM';
                  width = witPer(1, props.length);
                  break;
               default:
                  width = witPer(1, props.length);
                  break;
            }
            paymentConfirmsHeaders.push({
               type,
               filter,
               width,
               value: namedProps[i]
            });
         }
         state.paymentConfirmsHeaders = paymentConfirmsHeaders;
         // set map and data
         const paymentConfirmsData = [];
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
            state.paymentConfirms.set(parsedData.key, parsedData);
            paymentConfirmsData.push(parsedValues);
         }
         state.paymentConfirmsData = paymentConfirmsData;
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
