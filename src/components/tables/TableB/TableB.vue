<template>
<table class="table-b">
   <tr>
      <td>
         <div>
            <div>
               총 매출 건수
            </div>
            <div>
               0
            </div>
         </div>
      </td>
      <td>
         <div>
            <div>
               총 매매 대금
            </div>
            <div>
               0
            </div>
         </div>
      </td>
      <td>
         <div>
            <div>
               총 입금액
            </div>
            <div>
               0
            </div>
         </div>
      </td>
      <td>
         <div>
            <div>
               입금처리 건
            </div>
            <div>
               0
            </div>
         </div>
      </td>
   </tr>
</table>
</template>



<script>
export default {
   name: 'TableB'
}
</script>



<style>
.table-b {
   display: table;
   width: 100%;
   border-collapse: collapse;
   table-layout: fixed;
   margin: 10px 0;
}
.table-b td {
   height: auto;
   border: solid 2px rgb(160, 160, 160);
   font-size: 14px;
   font-weight: bold;
}
.table-b td > div {
   display: flex;
   width: 100%;
}
.table-b td > div > div {
   flex: 1 1 50%;
   padding: 10px;
}
.table-b td > div > div:first-child {
   background-color: rgb(100, 100, 100);
   color: white;
}
.table-b td > div > div:last-child {
   background-color: white;
   color: black;
}
</style>
