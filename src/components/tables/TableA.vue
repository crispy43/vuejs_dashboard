<template>
<table class="table-a">
   <tr>
      <th
         v-for="(item, index) in headerCells"
         :key="index"
         :index="index"
         :item="item"
      >{{ item }}</th>
   </tr>
   <tr
      v-for="(item, index) in standardCells"
      :key="index"
      :index="index"
      :item="item"
   >
      <td
         v-for="(payload, index) in item"
         :key="index"
         :index="index"
         :payload="payload"
      >
         <input
            v-if="payload.tag === 'input' && payload.type === 'checkbox'"
            :type="payload.type"
            :checked="(payload.value)"
         />
         <input
            v-else-if="payload.tag === 'input' && payload.type === 'text'"
            :type="payload.type"
            :value="payload.value"
         />
         <p v-else>{{ payload.value }}</p>
      </td>
   </tr>
</table>
</template>



<script>
import { reactive } from 'vue';
export default {
   name: 'TableA',
   props: {
      columns: Array,
      rows: Array
   },
   setup(props) {

      // parse columns
      const columns = reactive(props.columns);
      const headerCells = [];
      for (const cellOptions of columns) {

         let data;
         switch (cellOptions) {

            default:
               data = cellOptions.data
               break;
         }

         headerCells.push(data);
      }

      // parse rows
      const rows = reactive(props.rows);
      const standardCells = [];
      for (const row of rows) {
         
         const typedRows = [];
         for (let i in row) {

            let payload;
            switch (props.columns[i].colType) {
               
               case 'checkbox':
                  payload = {
                     tag: 'input',
                     type: props.columns[i].colType,
                     value: row[i]
                  };
                  break;
               
               case 'input':
                  payload = {
                     tag: 'input',
                     type: 'text',
                     value: row[i]
                  };
                  break;
               
               default:
                  payload = {
                     value: row[i]
                  };
                  break;
            }
            typedRows.push(payload);
         }
         standardCells.push(typedRows);
      }
      
      return {
         headerCells, standardCells
      };
   }
}
</script>



<style scoped>
.table-a {
   display: table;
   width: 100%;
   border-collapse: collapse;
   table-layout: auto;
   margin: 20px 0;
}
.table-a th, td {
   border: solid 1px rgb(160, 160, 160);
   text-align: center;
   font-size: 12px;
   padding: 5px;
}
.table-a th {
   background-color: rgb(100, 100, 100);
   color: white;
}
.table-a td {
   
}
.table-a tr:nth-child(2n) {
   background-color: white;
}
.table-a tr:nth-child(2n+1) {
   background-color: rgb(240, 240, 240);
}
</style>
