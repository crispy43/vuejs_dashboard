import dictionary from './dictionary';
import pendings from './revenues/pendings';
import deposits from './revenues/deposits';
import paymentConfirms from './revenues/paymentConfirms';
import contracts from './revenues/contracts';



export default {
   dictionary,
   revenues: {
      pendings,
      deposits,
      paymentConfirms,
      contracts
   }
};
