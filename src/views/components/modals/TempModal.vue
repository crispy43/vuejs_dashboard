<template>
<div class="temp-modal">
   <TitleA>모달 테스트</TitleA>
   <ButtonA @click="setModal(false)">닫기</ButtonA>
</div>
</template>



<script>
import { useStore } from 'vuex';
import { mapMutation } from '../../../common/mappers';
import TitleA from '../../../components/titles/TitleA';
import ButtonA from '../../../components/buttons/ButtonA';

export default {
   name: 'TempModal',
   components: {
      TitleA,
      ButtonA
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
.temp-modal {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 50vw;
   height: 50vh;
}
</style>
