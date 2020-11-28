<template>
<div class="employee">
   <ButtonB @click="modalOn">직원 검색</ButtonB>
</div>
<!-- modal -->
<Modal :modalName="modalName" />
</template>



<script>
import Modal from '../layouts/Modal';
import ButtonB from '../components/buttons/ButtonB';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../common/mappers';

export default {
   name: 'Employee',
   components: {
      Modal,
      ButtonB
   },
   setup() {
      const store = useStore();
      onMounted(() => {
        mapMutation(store, 'setIsModalOn')(true);
      });

      const modalName = ref('GetEmployee');

      const modalOn = () => {
         mapMutation(store, 'setIsModalOn')(true);
      }

      return {
         modalName,
         modalOn
      };
   }
}
</script>



<style scoped>
.employee {
   display: block;
}
.employee > * {
   margin: 20px;
}
</style>
