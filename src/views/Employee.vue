<template>
<div class="employee">
</div>
<!-- modal -->
<Modal :modalName="modalName" />
</template>



<script>
import Modal from '../layouts/Modal';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../common/mappers';

export default {
   name: 'Employee',
   components: {
      Modal
   },
   setup() {
      const store = useStore();
      onMounted(() => {
        mapMutation(store, 'setIsModalOn')(true);
      });

      const modalName = ref('GetEmployee');

      return {
         modalName,
      };
   }
}
</script>



<style scoped>
.employee {
   display: block;
}
</style>
