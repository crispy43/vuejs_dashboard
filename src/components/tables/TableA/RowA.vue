<template>
<tr>
   <td
      v-is="'DataA'"
      v-for="(data, index) in rowData"
      :key="index"
      :index="index"
      :data="data"
   />
</tr>
</template>



<script>
import DataA from './DataA';

export default {
   name: 'RowA',
   components: {
      DataA
   },
   props: {
      rowData: Array
   }
}
</script>



<style scoped>
</style>
