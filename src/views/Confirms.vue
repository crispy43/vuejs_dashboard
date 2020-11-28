<template>
<div class="confirms">
   <ButtonB @click="isAlertA = true">ConfirmA</ButtonB>
   <ButtonB @click="isAlertB = true">ConfirmB</ButtonB>
</div>
<AlertA
   v-if="isAlertA"
   :title="'ConfirmA'"
   :canCancel="true"
   @confirm="isAlertA = false"
   @cancel="isAlertA = false"
>ConfirmA</AlertA>
<AlertB
   v-if="isAlertB"
   :canCancel="true"
   @confirm="isAlertB = false"
   @cancel="isAlertB = false"
>ConfirmB</AlertB>
</template>



<script>
import AlertA from '../components/alerts/AlertA';
import AlertB from '../components/alerts/AlertB';
import ButtonB from '../components/buttons/ButtonB';
import { ref } from 'vue';

export default {
   name: 'Confirms',
   components: {
      AlertA,
      AlertB,
      ButtonB
   },
   setup() {
      const isAlertA = ref(false);
      const isAlertB = ref(false);

      return {
         isAlertA,
         isAlertB
      };
   }
}
</script>



<style scoped>
.confirms {
   display: block;
}
.confirms > * {
   margin: 20px;
}
</style>
