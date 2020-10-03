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
      switch (type) {
         case 'YMD':
            return format(new Date(originDate), 'yyyy.MM.dd');
   
         case 'yMD':
            return format(new Date(originDate), 'yy.MM.dd');
   
         case 'YMDHM':
            return format(new Date(originDate), 'yyyy.MM.dd HH:mm');
   
         case 'yMDHM':
            return format(new Date(originDate), 'yy.MM.dd HH:mm');
   
         case 'YMDHMS':
            return format(new Date(originDate), 'yyyy.MM.dd HH:mm:ss');
   
         case 'yMDHMS':
            return format(new Date(originDate), 'yy.MM.dd HH:mm:ss');
   
         case 'YMDHMSF':
            return format(new Date(originDate), 'yyyy.MM.dd HH:mm:ss.SSS');
   
         case 'yMDHMSF':
            return format(new Date(originDate), 'yy.MM.dd HH:mm:ss.SSS');
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
