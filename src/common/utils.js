export const calcWidthPer = (width, sum) => {
   return parseInt(width) / sum * 100 + '%';
};



export const tmpPromise = (time) => {
   return new Promise(res => {
      setTimeout(() => {
         res(true)
      }, time)
   });
};
