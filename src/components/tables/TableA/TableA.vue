<template>
<div
   class="table-a"
   :style="{ 'overflow-x': overflowX }"
>
   <table :style="{ 'width': tableWidth }">
      <thead>
         <tr>
            <th
               v-for="(item, index) in headers"
               :key="index"
               :index="index"
               :style="{
                  width: item.width,
                  height: theadHeight
               }"
            >
               <p>{{ item.name }}</p>
            </th>
         </tr>
      </thead>
      <tbody :style="{ height: tbodyHeight, maxHeight: tbodyMaxHeight }">
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
</div>
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
      tableWidth: {
         type: String,
         default: '100%'
      },
      theadHeight: {
         type: String,
         default: 'auto'
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
   },
   setup(props) {
      const tableWidthNum = parseInt(props.tableWidth.replace(/%/, ''));
      const overflowX = (tableWidthNum > 100) ? 'scroll' : 'visible';

      return {
         overflowX
      };
   }
}
</script>



<style>
.table-a {
   display: block;
   margin: 0 0 20px;
}
.table-a > table {
   display: table;
   border-collapse: collapse;
   border-left: var(--table-a-border);
}
.table-a > table > thead {
   float: left;
   width: 100%;
}
.table-a > table > thead > tr {
   display: table;
   table-layout: fixed;
   width: 100%;
}
.table-a > table > tbody {
   float: left;
   width: calc(100% + var(--scrollbar-width));
   overflow-y: scroll;
}
.table-a > table > tbody > tr {
   display: table;
   table-layout: fixed;
   width: 100%;
}
.table-a > table > thead th {
   border-top: var(--table-a-cell-border);
   border-right: var(--table-a-cell-border);
   border-bottom: var(--table-a-cell-border);
}
.table-a > table > tbody td {
   border-right: var(--table-a-cell-border);
   border-bottom: var(--table-a-cell-border);
}
.table-a > table > thead th:last-child, .table-a > tbody td:last-child {
   border-right: none;
}
.table-a > table th {
   background-color: var(--table-a-th-background-color);
}
.table-a > table th > p {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 30px;
   color: var(--table-a-th-color);
   font-size: var(--table-a-th-font-size);
   font-weight: var(--table-a-th-font-weight);
   padding: 0 5px 0;
}
.table-a > table td > input, td > p {
   display: flex;
   align-items: center;
   height: 30px;
   color: var(--table-a-td-color);
   font-size: var(--table-a-td-font-size);
   font-weight: var(--table-a-td-font-weight);
}
.table-a > table td > input {
   padding: 0 5px 0;
   margin: auto;
}
.table-a > table td > p {
   padding: 0 5px 0;
}
.table-a > table td > input[type=text] {
   width: 100%;
   border: var(--table-a-td-input-border);
}
.table-a > table tr:nth-child(2n+1) {
   background-color: var(--table-a-td-odd-background-color);
}
.table-a > table tr:nth-child(2n) {
   background-color: var(--table-a-td-even-background-color);
}
</style>
