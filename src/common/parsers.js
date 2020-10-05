import models from '../models';
// import utils from '../common/utils';



/**
 * @function parseObjectProps
 * @description 오브젝트 property만 get
 * @param {Object[]} payload
 * @param {String} payload[].key object unique key
 * @param {Array=} bannedProps except properties
 * @return {Array} properties
 */

export const parseObjectProps = (payload, bannedProps = []) => {
   const props = new Set();
   for (const data of payload) {
      if (!data.key) continue;
      for (const prop in data) {
         if (bannedProps.indexOf(prop) > -1) continue;
         props.add(prop);
      }
   }
   return Array.from(props);
};



/**
 * @function parseAndMapObjectProps
 * @description 오브젝트 property 모델 맵핑 후 get
 * @param {Object[]} payload
 * @param {String} payload[].key object unique key
 * @param {String} model property model
 * @param {Boolean} strict mapping type
 * @param {Array} [bannedProps = []] except properties
 * @return {Object} props, propModels
 */

export const parseAndMapObjectProps = (payload, model, strict, bannedProps = []) => {
   const props = new Set();
   let propModels;
   let totalWidth = 0;
   const modelPathSplit = model.split('/');

   // refmodel
   const refModel = modelPathSplit.reduce((acc, path) => {
      return acc[path];
   }, models);
   if (!refModel) throw new Error('model not found');

   // no strict
   if (!strict) {
      propModels = [];

      for (const data of payload) {
         if (!data.key) continue;

         for (const prop in data) {
            if (bannedProps.indexOf(prop) > -1) continue;
            else if (props.has(prop)) continue;
            props.add(prop);
            const propModel = Object.assign({},
               (refModel[prop]) ?
                  (refModel[prop]) : (typeof refModel._default === 'function') ?
                     refModel._default(prop) : { name: prop, width: 100 }
            );
            propModels.push(propModel);
            totalWidth += propModel.width;
         }
      }

   // strict
   } else {
      propModels = [];
      for (const prop in refModel) {
         if (bannedProps.indexOf(prop) > -1) continue;
         const propModel = Object.assign({}, refModel[prop]);
         props.add(prop);
         propModels.push(propModel);
         totalWidth += propModel.width;
      }
   }

   for (let i in propModels) {
      propModels[i].width = parseInt(propModels[i].width) / totalWidth * 100 + '%';
   }

   return {
      props: Array.from(props),
      propModels
   };
};



/**
 * @function parseTableHeaders
 * @description 테이블 데이터 파서
 * @param {Object[]} payload
 * @param {String} payload[].key object unique key
 * @param {Object} options parse options
 * @param {String} [options.model = dictionary] property model
 * @param {Boolean} [options.strict = true] mapping type
 * @param {Array=} options.bannedProps except properties
 * @return {Object} map, headers, data
 */

export const parseTableData = (payload, {
   model = 'dictionary', strict = true, bannedProps
}) => {
   const { props, propModels } = parseAndMapObjectProps(payload, model, strict, bannedProps);
   const parsedPayload = [];
   const payloadMap = new Map();
   let skip = 0;

   for (let i in payload) {
      if (!payload[i].key) {
         skip++;
         continue;
      }
      const parsedValues = [];
      for (const prop of props) {
         if (typeof payload[i][prop] === 'undefined' || payload[i][prop] === null) {
            payload[i][prop] = '';
         }
         parsedValues.push(payload[i][prop]);
      }
      payload[i]._ = {
         index: parseInt(i) - skip
      }
      parsedPayload.push(parsedValues);
      payloadMap.set(payload[i].key, payload[i]);
   }
   
   return {
      map: payloadMap,
      headers: propModels,
      data: parsedPayload
   };
};



/**
 * @function parseTableHeaders
 * @description 테이블 데이터 파서
 * @param {Object[]} payload
 * @param {String} payload[].key object unique key
 * @param {Object} options parse options
 * @param {String} [options.model = dictionary] property model
 * @param {Boolean} [options.strict = true] mapping type
 * @param {Array=} options.bannedProps except properties
 * @return {Object} map, headers, data
 */

export const getDataFromMap = (payload, bannedProps) => {
   const array = Array.from(payload[Symbol.iterator]());

   const dataY = [];

   for (let i in array) {
      const data = array[i][1];
      const dataX = [];

      for (let prop in data) {
         if (bannedProps.indexOf(prop) > -1) continue;
         dataX.push(data[prop]);
      }
      dataY.push(dataX);
   }
   
   return dataY;
};
