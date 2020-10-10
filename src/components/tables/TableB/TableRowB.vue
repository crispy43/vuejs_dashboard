<template>
<tr
   v-if="!isHide"
   :class="{ 'selected': isSelected }"
>
   <td
      v-is="'TableCellB'"
      v-for="(cellData, index) in rowData"
      :key="cellData.key || index"
      :index="index"
      :cellData="cellData"
      @row-select="select"
   />
</tr>
</template>



<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../../../common/mappers';
import TableCellB from './TableCellB';

export default {
   name: 'TableRowB',
   components: {
      TableCellB
   },
   props: {
      rowData: {
         type: Array,
         required: true
      },
      selectRowMutName: String,
      selectRowStateName: String,
      hideRowMutName: String,
      hideRowStateName: String,
      storeName: String
   },
   setup(props) {
      const store = useStore();
      const selectRowState = (props.storeName && props.selectRowStateName) ?
         reactive(store.state[props.storeName][props.selectRowStateName]) : undefined;
      const isSelected = computed(() => {
         if (selectRowState) return selectRowState.has(props.index);
         else return false;
      });
      const hideRowState = (props.storeName && props.hideRowStateName) ?
         reactive(store.state[props.storeName][props.hideRowStateName]) : undefined;
      const isHide = computed(() => {
         if (hideRowState) return hideRowState.has(props.index);
         else return false;
      });

      const select = () => {
         if (props.selectRowMutName && props.storeName)
            mapMutation(store, props.selectRowMutName, props.storeName)(props.index);
      }

      return {
         isSelected,
         select,
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
