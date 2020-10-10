<template>
<table class="table-b">
   <tbody :style="{ height: tbodyHeight, maxHeight: tbodyMaxHeight }">
      <tr v-is="'TableRowB'"
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
import TableRowB from './TableRowB';

export default {
   name: 'TableB',
   components: {
      TableRowB
   },
   props: {
      data: {
         type: Array,
         required: true
      },
      tbodyHeight: {
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
.table-b {
   display: table;
   width: 100%;
   border-collapse: collapse;
   border: var(--table-b-border);
   table-layout: fixed;
   margin: 10px 0;
}
.table-b td {
   height: auto;
   border: var(--table-b-cell-border);
}
.table-b td > div {
   display: flex;
   width: 100%;
}
.table-b td > div > div {
   flex: 1 1 50%;
   display: flex;
   align-items: center;
   height: 36px;
   padding: 5px 15px;
}
.table-b td > div > div:first-child {
   background-color: var(--table-b-th-background-color);
   color: var(--table-b-th-color);
}
.table-b td > div > div:first-child > p {
   font-size: var(--table-b-th-font-size);
   font-weight: var(--table-b-th-font-weight);
}
.table-b td > div > div:last-child {
   background-color: var(--table-b-td-background-color);
   color: var(--table-b-td-color);
   font-size: var(--table-b-td-font-size);
   font-weight: var(--table-b-td-font-weight);
}
.table-b td > div > div:last-child > p {
   font-size: var(--table-b-td-font-size);
   font-weight: var(--table-b-td-font-weight);
}
</style>
