import { format } from 'date-fns';



/**
 * @namespace filters
 * @description 필터 모음
 */

export default {

   /**
    * @function date
    * @description 날짜 포멧팅
    * @param {Any} originDate 원본 Date 포멧
    * @param {String} [type = yMDHMS] 변결할 포멧 타입
    * @example date(new Date().toISOString, 'yMDHM');
    * @return {String} filtered
    * @memberof filters#
    */
   
   date: (originDate, type = 'yMDHMS') => {
      try {
         let formated;
         switch (type) {
            case 'YMD':
               formated = format(new Date(originDate), 'yyyy.MM.dd');
               break;
            case 'yMD':
               formated = format(new Date(originDate), 'yy.MM.dd');
               break;
            case 'YMDHM':
               formated = format(new Date(originDate), 'yyyy.MM.dd HH:mm');
               break;
            case 'yMDHM':
               formated = format(new Date(originDate), 'yy.MM.dd HH:mm');
               break;
            case 'YMDHMS':
               formated = format(new Date(originDate), 'yyyy.MM.dd HH:mm:ss');
               break;
            case 'yMDHMS':
               formated = format(new Date(originDate), 'yy.MM.dd HH:mm:ss');
               break;
            case 'YMDHMSF':
               formated = format(new Date(originDate), 'yyyy.MM.dd HH:mm:ss.SSS');
               break;
            case 'yMDHMSF':
               formated = format(new Date(originDate), 'yy.MM.dd HH:mm:ss.SSS');
               break;
         }
         return (formated) ? formated : '';
      } catch (error) {
         return '';
      }
   },



   /**
    * @function comma
    * @description 숫자 세자리 콤마
    * @param {Number|String} amount 변경할 수
    * @param {Number} [float = 4] maximumFractionDigits
    * @example comma(300000000.25005814536, 8);
    * @return {String} filtered
    * @memberof filters#
    */

   comma(amount, float = 4) {
      const parsedAmount = parseFloat(amount);
      return (!isNaN(parsedAmount)) ? parsedAmount.toLocaleString(undefined, { maximumFractionDigits: float }) : NaN;
   }
}
