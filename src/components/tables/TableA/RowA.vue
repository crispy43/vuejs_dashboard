<template>
<tr :class="{ 'selected': isSelect }">
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
import { ref } from 'vue';
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
      checkMutStore: String
   },
   setup(props) {
      const store = useStore();
      const isSelect = ref(false);
      const checking = (v) => {
         isSelect.value = v;
         if (props.checkMutName && props.checkMutStore)
            mapMutation(store, props.checkMutName, props.checkMutStore)(props.index);
      }

      return {
         isSelect,
         checking
      };
   }
}
</script>



<style scoped>
.selected {
   background-color: rgb(255, 244, 217) !important;
}
</style>
