<template>
<div class="employee-details">
   <div class="employee-details-header">
      <TitleA>직원 상세 정보</TitleA>
      <FontAwesomeIcon icon="times" @click="setModal(false)" />
   </div>
</div>
</template>



<script>
import { useStore } from 'vuex';
import { mapMutation } from '../../../common/mappers';
import TitleA from '../../../components/titles/TitleA';
// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTimes);

export default {
   name: 'EmployeeDetails',
   components: {
      TitleA,
      FontAwesomeIcon
   },
   setup() {
      const store = useStore();
      const setModal = () => {
         mapMutation(store, 'setIsModalOn')(false);
      }

      return {
         setModal
      };
   }
}
</script>



<style scoped>
.employee-details {
   display: flex;
   flex-direction: column;
   width: 750px;
   height: 900px;
}
.employee-details-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.employee-details-header svg {
   cursor: pointer;
   font-size: 23px;
   color: #555;
   margin-right: 10px;
}
</style>
