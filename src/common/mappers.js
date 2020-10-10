/**
 * @namespace mappers
 * @description 매퍼 유틸 모음
 */

/**
 * @function mapMutation
 * @description mutation 매핑 헬퍼
 * @param {Object} store vuex instance
 * @param {String} method mutation name
 * @param {String=} module module name
 * @example
 * await mapMutation(store, 'mutation', 'storeModule');
 * @return {Function} mutation function
 * @memberof mappers#
 */

export const mapMutation = (store, method, module) => {
   return (!module) ? 
      store._mutations[`${method}`][0] :
      store._mutations[`${module}/${method}`][0];
};



/**
 * @function mapAction
 * @description action 매핑 헬퍼
 * @param {Object} store vuex instance
 * @param {String} method action name
 * @param {String=} module module name
 * @example
 * await mapAction(store, 'action', 'storeModule');
 * @return {Function} action function
 * @memberof mappers#
 */

export const mapAction = (store, method, module) => {
   return (!module) ? 
      store._actions[`${method}`][0] :
      store._actions[`${module}/${method}`][0];
};



/**
 * @function mapGetter
 * @description getter 매핑 헬퍼
 * @param {Object} store vuex instance
 * @param {String} method getter name
 * @param {String=} module module name
 * @example
 * await mapGetter(store, 'getter', 'storeModule');
 * @return {Any} result
 * @memberof mappers#
 */

export const mapGetter = (store, method, module) => {
   return (!module) ? 
      store.getters[`${method}`] :
      store.getters[`${module}/${method}`];
};
