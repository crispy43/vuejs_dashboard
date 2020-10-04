import { format } from 'date-fns';



export default {

   /**
    * @function date
    * @description 날짜 포멧팅
    * @param {Any} originDate
    * @param {String} [type = yMDHMS]
    * @return {String} filtered
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
    * @param {Number|String} amount
    * @param {Number} [float = 4] maximumFractionDigits
    * @return {String} filtered
    */
   comma(amount, float = 4) {
      const parsedAmount = parseFloat(amount);
      return (!isNaN(parsedAmount)) ? parsedAmount.toLocaleString(undefined, { maximumFractionDigits: float }) : NaN;
   }
}
