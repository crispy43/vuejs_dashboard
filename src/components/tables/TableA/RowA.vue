<template>
<tr :class="{ 'selected': isSelect }">
   <td
      v-is="'DataA'"
      v-for="(data, index) in rowData"
      :key="index"
      :index="index"
      :data="data"
      @row-select="backgroundColorChange"
   />
</tr>
</template>



<script>
import { ref } from 'vue';
import DataA from './DataA';

export default {
   name: 'RowA',
   components: {
      DataA
   },
   props: {
      rowData: Array
   },
   setup() {
      const isSelect = ref(false);
      const backgroundColorChange = (v) => {
         isSelect.value = v;
      }

      return {
         isSelect,
         backgroundColorChange
      };
   }
}
</script>



<style scoped>
.selected {
   background-color: rgb(255, 244, 217) !important;
}
</style>
