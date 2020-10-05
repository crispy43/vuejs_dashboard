<template>
<tr
   v-if="!isHide"
   :class="{ 'selected': isSelect }"
>
   <td
      v-is="'DataA'"
      v-for="(data, index) in rowData"
      :key="index"
      :index="index"
      :data="data"
      @row-select="checking"
   />
</tr>
</template>



<script>
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../../../common/mappers';
import DataA from './DataA';

export default {
   name: 'RowA',
   components: {
      DataA
   },
   props: {
      index: Number,
      rowData: Array,
      checkMutName: String,
      hideStateName: String,
      storeName: String
   },
   setup(props) {
      const store = useStore();
      const isSelect = ref(false);
      const hideState = (props.storeName && props.hideStateName) ?
         reactive(store.state[props.storeName][props.hideStateName]) : undefined;
      const isHide = computed(() => {
         console.log(typeof hideState);
         if (hideState) return hideState.has(props.index);
         else return false;
      });

      const checking = (v) => {
         isSelect.value = v;
         if (props.checkMutName && props.storeName)
            mapMutation(store, props.checkMutName, props.storeName)(props.index);
      }

      return {
         isSelect,
         checking,
         isHide
      };
   }
}
</script>



<style scoped>
.selected {
   background-color: rgb(255, 244, 217) !important;
}
</style>
