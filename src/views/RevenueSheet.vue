<template>
<div class="revenue-sheet">
   <div class="revenue-sheet-left">
      <SearchBoxA
         :dateId="dateId"
         :textId="textId"
      />
   </div>
   <div class="revenue-sheet-right">
      <SearchBoxA
         :dateId="dateId"
         :textId="textId"
      />
   </div>
</div>
</template>



<script>
import SearchBoxA from '../components/forms/SearchBoxA';

export default {
   name: 'RevenueSheet',
   components: {
      SearchBoxA
   },
   setup() {

      return {
         dateId: 'revenue_contract_date',
         textId: 'revenue_contract_text'
      };
   }
}
</script>



<style scoped>
.revenue-sheet {
   display: flex;
   width: 100%;
   padding: 20px var(--main-padding-left-right) 0;
}
.revenue-sheet > div {
   flex: 1 1 50%;
   height: 200px;
}
.revenue-sheet-left {
   margin-right: 10px;
}
.revenue-sheet-right {
   margin-left: 10px;
}
</style>
