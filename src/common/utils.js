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