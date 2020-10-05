// import { toRefs } from 'vue';



/**
 * @function mapMutation
 * @description map mutation helper
 * @param {Object} store vuex instance
 * @param {String} method mutation name
 * @param {String=} module module name
 * @return {Function} mutation function
 */

export const mapMutation = (store, method, module) => {
   return (!module) ? 
      store._mutations[`${method}`][0] :
      store._mutations[`${module}/${method}`][0];
};



/**
 * @function mapAction
 * @description map action helper
 * @param {Object} store vuex instance
 * @param {String} method mutation name
 * @param {String=} module module name
 * @return {Function} action function
 */

export const mapAction = (store, method, module) => {
   return (!module) ? 
      store._actions[`${method}`][0] :
      store._actions[`${module}/${method}`][0];
};



/**
 * @function mapGetter
 * @description map getter helper
 * @param {Object} store vuex instance
 * @param {String} method mutation name
 * @param {String=} module module name
 * @return {Any} result
 */

export const mapGetter = (store, method, module) => {
   return (!module) ? 
      store.getters[`${method}`] :
      store.getters[`${module}/${method}`];
};



/**
 * @function mapTableData
 * @description 테이블 데이터 해더 속성에 맵핑
 * @param {Object} data *ref data
 * @param {Object} target
 * @return {Array} result
 */

export const mapTableData = (data, target) => {
   const typedData = [];
   for (const row of data) {
      const typedRow = [];
      for (let i in row) {
         if (typeof row[i] !== 'object') {
            const typed = {
               tag: target[i].tag || 'p',
               type: target[i].type,
               filter: target[i].filter,
               width: target[i].width || 'auto',
               value: row[i]
            };
            typedRow.push(typed);
         }
      }
      typedData.push(typedRow);
   }
   return typedData;
};
