<template>
<table class="table-a">
   <thead>
      <tr>
         <th
            v-for="(item, index) in headers"
            :key="index"
            :index="index"
            :style="{
               width: item.width,
               height: thHeight
            }"
         >
            <p>{{ item.name }}</p>
         </th>
      </tr>
   </thead>
   <tbody :style="{ maxHeight: tbodyMaxHeight }">
      <tr v-is="'TableRowA'"
         v-for="(rowData, index) in data"
         :key="index"
         :index="index"
         :rowData="rowData"
         :selectRowMutName="selectRowMutName"
         :selectRowStateName="selectRowStateName"
         :hideRowMutName="hideRowMutName"
         :hideRowStateName="hideRowStateName"
         :storeName="storeName"
      />
   </tbody>
</table>
</template>



<script>
import TableRowA from './TableRowA';

export default {
   name: 'TableA',
   components: {
      TableRowA
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
      thHeight: {
         type: String,
         default: 'auto'
      },
      tbodyMaxHeight: {
         type: String,
         default: 'auto'
      },
      selectRowMutName: String,
      selectRowStateName: String,
      hideRowMutName: String,
      hideRowStateName: String,
      storeName: String
   }
}
</script>



<style>
.table-a {
   display: table;
   width: 100%;
   border-collapse: collapse;
   border: var(--table-a-border);
   margin: 0 0 20px;
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
.table-a > thead th, .table-a > tbody td {
   height: 27px;
   border: var(--table-a-cell-border);
   font-size: 13px;
   padding: 5px;
}
.table-a th {
   background-color: var(--table-a-th-background-color);
}
.table-a th > p {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 26px;
   color: var(--table-a-th-color);
   font-size: var(--table-a-th-font-size);
   font-weight: normal;
}
.table-a td > input, td > p {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 26px;
   color: var(--table-a-td-color);
   font-size: var(--table-a-td-font-size);
   margin: auto;
}
.table-a td > input[type=text] {
   width: 100%;
   border: var(--table-a-td-input-border);
   font-size: var(--table-a-td-font-size);
}
.table-a tr:nth-child(2n+1) {
   background-color: var(--table-a-td-odd-background-color);
}
.table-a tr:nth-child(2n) {
   background-color: var(--table-a-td-even-background-color);
}
</style>
