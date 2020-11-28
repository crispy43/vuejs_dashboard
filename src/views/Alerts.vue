<template>
<div class="alerts">
   <ButtonB @click="isAlertA = true">AlertA</ButtonB>
   <ButtonB @click="isAlertB = true">AlertB</ButtonB>
</div>
<AlertA
   v-if="isAlertA"
   :title="'AlertA'"
   @confirm="isAlertA = false"
   @cancel="isAlertA = false"
>AlertA</AlertA>
<AlertB
   v-if="isAlertB"
   @confirm="isAlertB = false"
   @cancel="isAlertB = false"
>AlertB</AlertB>
</template>



<script>
import AlertA from '../components/alerts/AlertA';
import AlertB from '../components/alerts/AlertB';
import ButtonB from '../components/buttons/ButtonB';
import { ref } from 'vue';

export default {
   name: 'Alerts',
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
.alerts {
   display: block;
}
.alerts > * {
   margin: 20px;
}
</style>
