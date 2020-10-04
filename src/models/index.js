import dictionary from './dictionary';
import pendings from './revenues/pendings';
import deposits from './revenues/deposits';
import paymentConfirms from './revenues/paymentConfirms';



export default {
   dictionary,
   revenues: {
      pendings,
      deposits,
      paymentConfirms
   }
};
