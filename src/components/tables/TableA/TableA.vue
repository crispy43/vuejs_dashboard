<template>
<table class="table-a">
   <thead>
      <tr>
         <th
            v-for="(item, index) in headers"
            :key="index"
            :index="index"
            :style="{ width: item.width }"
         >
            <p>{{ item.name }}</p>
         </th>
      </tr>
   </thead>
   <tbody :style="{ maxHeight: tbodyMaxHeight }">
      <tr v-is="'RowA'"
         v-for="(rowData, index) in typedData"
         :key="index"
         :index="index"
         :rowData="rowData"
      />
   </tbody>
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
      headers: {
         type: Array,
         required: true
      },
      data: {
         type: Array,
         required: true
      },
      tbodyMaxHeight: {
         type: String,
         default: '750px'
      }
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
   margin: 20px 0;
}
.table-a thead {
   float: left;
   width: 100%;
}
.table-a thead tr {
   display: table;
   table-layout: fixed;
   width: 100%;
}
.table-a tbody {
   float: left;
   width: calc(100% + var(--scrollbar-width));
   overflow-y: scroll;
}
.table-a tbody tr {
   display: table;
   table-layout: fixed;
   width: 100%;
}
.table-a tbody tr:last-child {
   border-bottom: none;
}
.table-a th, td {
   height: 27px;
   border: solid 1px rgb(160, 160, 160);
   font-size: 13px;
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
   font-size: 12px;
   margin: auto;
}
.table-a tr:nth-child(2n) {
   background-color: white;
}
.table-a tr:nth-child(2n+1) {
   background-color: rgb(250, 250, 250);
}
</style>
