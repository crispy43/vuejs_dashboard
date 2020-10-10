import models from '../models';



/**
 * @namespace parsers
 * @description 파서 유틸 모음
 */

 /**
 * @function parseObjectProps
 * @description 원본 배열 객체 property만 가져오기
 * @param {Object[]} payload
 * @param {Array=} bannedProps 제외할 property 목록
 * @example
 * const props = parseObjectProps(dataArray);
 * @return {Array} properties
 * @memberof parsers#
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
 * @description 원본 배열 객체 모델 매핑 후 리턴
 * @param {Object[]} payload
 * @param {String=} model 매핑할 모델 네임
 * @param {Boolean=} strict 엄격한 매핑 여부
 * @param {Array=} bannedProps 제외할 property 목록
 * @example
 * const { props, propModels } = parseAndMapObjectProps(dataArray, 'pathName/modelName');
 * @return {Object} props, propModels
 * @memberof parsers#
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
 * @param {Object[]} payload 파싱할 원본 테이블 데이터 배열
 * @param {Object=} options 파싱 옵션
 * @param {String} [options.model = dictionary] 모델 네임
 * @param {Boolean} [options.strict = true] 엄격한 매핑 여부
 * @param {Array=} options.bannedProps 제외할 property 목록
 * @example
 * const { map, headers, data } = parseTableData(dataArray, {
 *    model: 'pathName/modelName',
 *    bannedProps: ['prop']
 * });
 * @return {Object} map, headers, data
 * @memberof parsers#
 */

export const parseTableData = (payload, {
   model = 'dictionary', strict = true, bannedProps
} = {}) => {
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
