<template>
<table class="table-a">
   <tr>
      <th
         v-for="(prop, index) in headers"
         :key="index"
         :index="index"
      >
         <p>{{ prop.value }}</p>
      </th>
   </tr>
   <tr v-is="'RowA'"
      v-for="(rowData, index) in typedData"
      :key="index"
      :index="index"
      :rowData="rowData"
   />
</table>
</template>



<script>
import { reactive } from 'vue';
import { mapTableData } from '../../../common/mappers';
import RowA from './RowA';

export default {
   name: 'TableA',
   components: {
      RowA
   },
   props: {
      headers: Array,
      data: Array
   },
   setup(props) { 
      const data = reactive(props.data);
      const typedData = mapTableData(data, props.headers);
      
      return {
         typedData
      };
   }
}
</script>



<style>
.table-a {
   display: table;
   width: 100%;
   border-collapse: collapse;
   table-layout: auto;
   margin: 20px 0;
}
.table-a th, td {
   height: 27px;
   border: solid 1px rgb(160, 160, 160);
   font-size: 12px;
   padding: 5px;
}
.table-a th {
   background-color: rgb(100, 100, 100);
   color: white;
}
.table-a th > p {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 26px;
}
.table-a td > input, td > p {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 26px;
   margin: auto;
}
.table-a td > input[type=text] {
   width: 100%;
   margin: auto;
}
.table-a tr:nth-child(2n) {
   background-color: white;
}
.table-a tr:nth-child(2n+1) {
   background-color: rgb(240, 240, 240);
}
</style>
