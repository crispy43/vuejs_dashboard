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
import { reactive, computed } from 'vue';
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
      checkStateName: String,
      hideStateName: String,
      storeName: String
   },
   setup(props) {
      const store = useStore();
      const checkState = (props.storeName && props.checkStateName) ?
         reactive(store.state[props.storeName][props.checkStateName]) : undefined;
      const isSelect = computed(() => {
         if (checkState) return checkState.has(props.index);
         else return false;
      });
      const hideState = (props.storeName && props.hideStateName) ?
         reactive(store.state[props.storeName][props.hideStateName]) : undefined;
      const isHide = computed(() => {
         if (hideState) return hideState.has(props.index);
         else return false;
      });

      const checking = () => {
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
