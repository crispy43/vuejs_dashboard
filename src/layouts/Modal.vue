<template>
<teleport to="#modal">
   <div
      v-if="isModalOn"
      class="modal-container"
      :style="cssRootVar"
      @mousedown="modalOff"
   >
      <div
         class="modal"
         @mousedown.stop
      >
         <ModalComponent />
      </div>
   </div>
</teleport>
</template>



<script>
import { toRefs, reactive, defineAsyncComponent, watch } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../common/mappers';
import defaultVars from '../assets/styles/defaultVars';

export default {
   name: 'Modal',
   props: {
      modalName: {
         type: String,
         required: true
      }
   },
   setup(props) {
      const cssRootVar = reactive(defaultVars);
      const store = useStore();
      const { isModalOn } = toRefs(store.state);
      const target = document.querySelector('#modal');
      
      watch(isModalOn, (value) => {
         target.style.display = (value) ? 'block' : 'none';
      });

      const modalOff = () => {
         mapMutation(store, 'setIsModalOn')(false);
      }

      const ModalComponent = defineAsyncComponent(
         () => import(`../views/components/modals/${props.modalName}`)
      );

      return {
         cssRootVar,
         isModalOn,
         modalOff,
         ModalComponent
      };
   }
}
</script>



<style>
#modal {
   display: none;
   position: fixed;
   z-index: 15;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.2);
}
.modal-container {
   width: 100%;
   height: 100%;
}
.modal {
   display: block;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: auto;
   height: auto;
   border-radius: 10px;
   background-color: white;
   box-shadow: 0 3px 7px rgba(0, 0, 0, 0.2);
   padding: 15px;
}
</style>
