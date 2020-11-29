<template>
<div class="tree-view">
   <!-- depth0 -->
   <div
      v-for="(depth0, index0) in reactiveData"
      :key="depth0.key"
      :index="index0"
      :item="depth0"
      class="indent"
   >
      <span
         v-if="depth0.type === 'list'"
         @click="reactiveData[index0].isOpen = !reactiveData[index0].isOpen"
      >
         <FontAwesomeIcon
            v-if="!depth0.isOpen"
            icon="caret-right"
         />
         <FontAwesomeIcon
            v-else
            icon="caret-down"
         />
      </span>
      <p
         :class="depth0.type === 'list' ? 'list' : 'item'"
         @click="modalOn(depth0.type)"
      >
         {{ depth0.name }}
      </p>
      <!-- depth1 -->
      <div v-show="depth0.isOpen">
         <div
            v-for="(depth1, index1) in depth0.child"
            :key="depth1.key"
            :index="index1"
            :item="depth1"
            class="indent"
         >
            <span
               v-if="depth1.type === 'list'"
               @click="reactiveData[index0].child[index1].isOpen = !reactiveData[index0].child[index1].isOpen"
            >
               <FontAwesomeIcon
                  v-if="!depth1.isOpen"
                  icon="caret-right"
               />
               <FontAwesomeIcon
                  v-else
                  icon="caret-down"
               />
            </span>
            <p
               :class="depth1.type === 'list' ? 'list' : 'item'"
               @click="modalOn(depth1.type)"
            >
               {{ depth1.name }}
            </p>
            <!-- depth2 -->
            <div v-show="depth1.isOpen">
               <div
                  v-for="(depth2, index) in depth1.child"
                  :key="depth2.key"
                  :index="index"
                  :item="depth2"
                  class="indent"
               >
                  <span v-if="depth2.type === 'list'">
                     <FontAwesomeIcon
                        v-if="!depth2.isOpen"
                        icon="caret-right"
                     />
                     <FontAwesomeIcon
                        v-else
                        icon="caret-down"
                     />
                  </span>
                  <p
                     class="item"
                     @click="modalOn(depth2.type)"
                  >
                     {{ depth2.name }}
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- modal -->
<Modal :modalName="modalName" />
</template>



<script>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../../common/mappers';
import Modal from '../../layouts/Modal';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCaretRight, faCaretDown);

export default {
   name: 'TreeView',
   components: {
      FontAwesomeIcon,
      Modal
   },
   props: {
      data: {
         type: Array,
         required: true
      }
   },
   setup(props) {
      const store = useStore();
      const reactiveData = reactive(props.data);

      const modalName = ref('EmployeeDetails');

      const modalOn = (type) => {
         if (type === 'item')
            mapMutation(store, 'setIsModalOn')(true);
      }

      for (let a in reactiveData) {
         reactiveData[a].isOpen = true;
         reactiveData[a].isChecked = false;

         if (reactiveData[a].type === 'list') {

            for (let b in reactiveData[a].child) {
               reactiveData[a].child[b].isOpen = true;
               reactiveData[a].child[b].isChecked = false;

               if (reactiveData[a].child[b].type === 'list') {

                  for (let c in reactiveData[a].child[b].child) {
                     reactiveData[a].child[b].child[c].isOpen = true;
                     reactiveData[a].child[b].child[c].isChecked = false;
                  }
               }
            }
         }
      }

      return {
         reactiveData,
         modalName,
         modalOn,
      };
   }
}
</script>



<style scoped>
.tree-view {
   display: block;
   -ms-user-select: none; 
   -moz-user-select: -moz-none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   user-select: none;
}
.tree-view p {
   display: inline-block;
}
.tree-view span {
   display: inline-block;
   width: 20px;
   cursor: pointer;
}
.indent {
   margin-left: 30px;
   padding: 5px 0;
}
.list {
   font-size: 15px;
   font-weight: 700;
   margin: 5px 0;
}
.item {
   font-size: 14px;
   cursor: pointer;
}
</style>
