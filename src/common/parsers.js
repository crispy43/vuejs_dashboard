import models from '../models';
// import utils from '../common/utils';



/**
 * @function parseObjectProps
 * @description 오브젝트 property만 get
 * @param {Object[]} payload
 * @param {Array=} bannedProps except properties
 * @return {Array} properties
 */

export const parseObjectProps = (payload, bannedProps = []) => {
   const props = new Set();
   for (const i in payload) {
      for (const prop in payload[i]) {
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
   propModels = [];

   // no strict
   if (!strict) {
      for (const i in payload) {
         for (const prop in payload[i]) {
            if (bannedProps.indexOf(prop) > -1) continue;
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
      for (const prop in refModel) {
         if (bannedProps.indexOf(prop) > -1) continue;
         const propModel = Object.assign({}, refModel[prop]);
         props.add(prop);
         propModels.push(propModel);
         totalWidth += propModel.width;
      }
   }

   for (const i in propModels) {
      propModels[i].width = parseInt(propModels[i].width) / totalWidth * 100 + '%';
   }

   return {
      props: Array.from(props),
      propModels
   };
};



/**
 * @function parseTableData
 * @description 테이블 데이터 파서
 * @param {Object[]} payload
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

   for (const y in payload) {
      const parsedCellData = [];
      for (const x in props) {
         if (typeof payload[y][props[x]] === 'undefined' || payload[y][props[x]] === null)
            payload[y][props[x]] = '';
         parsedCellData.push({
            key: `${y}.${x}`,
            index: parseInt(x),
            tag: propModels[x].tag || 'p',
            type: propModels[x].type,
            filter: propModels[x].filter,
            width: propModels[x].width || 'auto',
            value: payload[y][props[x]]
         });
      }
      payload[y]._ = {
         key: y,
         index: parseInt(y),
         model,
         props,
         bannedProps
      }
      parsedPayload.push(parsedCellData);
      payloadMap.set(y, payload[y]);
   }
   
   return {
      map: payloadMap,
      headers: propModels,
      data: parsedPayload
   };
};
