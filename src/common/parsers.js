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
 * @param {Array=} bannedProps except properties
 * @return {Object} props, propModels
 */

export const parseAndMapObjectProps = (payload, model = 'dictionary', bannedProps = []) => {
   const props = new Set();
   const propModels = [];
   let totalWidth = 0;
   const modelPath = model.split('/');

   for (const data of payload) {
      if (!data.key) continue;
      for (const prop in data) {
         if (bannedProps.indexOf(prop) > -1) continue;
         else if (props.has(prop)) continue;
         let propModel;
         switch (modelPath.length) {

            case 1:
               propModel = (models[model][prop]) ?
                  models[model][prop] : (models[model]._default(prop)) ?
                     models[model]._default(prop) : false;
               break;

            case 2:
               propModel = (models[modelPath[0]][modelPath[1]][prop]) ?
                  models[modelPath[0]][modelPath[1]][prop] : (models[modelPath[0]][modelPath[1]]._default(prop)) ?
                     models[modelPath[0]][modelPath[1]]._default(prop) : false;
               break;
         }
         if (!propModel) continue;

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
 * @param {String} model property model
 * @param {Array=} bannedProps except properties
 * @return {Object} map, headers, data
 */

export const parseTableData = (payload, model, bannedProps) => {
   const { props, propModels } = parseAndMapObjectProps(payload, model, bannedProps);
   const parsedPayload = [];
   const payloadMap = new Map();

   for (const data of payload) {
      if (!data.key) continue;
      const parsedValues = [];
      for (const prop of props) {
         if (typeof data[prop] === 'undefined' || data[prop] === null) {
            data[prop] = '';
         }
         parsedValues.push(data[prop]);
      }
      parsedPayload.push(parsedValues);
      payloadMap.set(data.key, data);
   }
   
   return {
      map: payloadMap,
      headers: propModels,
      data: parsedPayload
   };
};
