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
 * @function parseObjectProps
 * @description 오브젝트 property 언어 맵핑 후 get
 * @param {Object[]} payload
 * @param {String} payload[].key object unique key
 * @param {String} lang json language file name
 * @param {Array=} bannedProps except properties
 * @return {Array} properties
 */

export const parseAndMapObjectProps = (payload, lang, bannedProps = []) => {
   let langMap;
   try { langMap = require(`../assets/languages/${lang}.json`);
   } catch (error) { throw new Error('language map not found'); }
   
   const props = new Set();
   const namedProps = new Set();
   for (const data of payload) {
      if (!data.key) continue;
      for (const prop in data) {
         if (bannedProps.indexOf(prop) > -1) continue;
         props.add(prop);
         namedProps.add((langMap[prop]) ? langMap[prop] : prop);
      }
   }
   return {
      props: Array.from(props),
      namedProps: Array.from(namedProps)
   };
};
