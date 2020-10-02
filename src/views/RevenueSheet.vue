<template>
<div class="revenue-sheet">
   <div class="revenue-sheet-left">
      <TitleA>매출</TitleA>
      <SearchBoxA
         :date="contract.date"
         :text="contract.text"
      />
      <TableA
         :columns="contractData.columns"
         :rows="contractData.rows"
      />
   </div>
   <div class="revenue-sheet-right">
      <TitleA>입금</TitleA>
      <SearchBoxA
         :date="deposit.date"
         :text="deposit.text"
      />
      <TableA
         :columns="depositData.columns"
         :rows="depositData.rows"
      />
   </div>
</div>
</template>



<script>
import TitleA from '../components/titles/TitleA';
import SearchBoxA from '../components/forms/SearchBoxA';
import TableA from '../components/tables/TableA';

export default {
   name: 'RevenueSheet',
   components: {
      TitleA,
      SearchBoxA,
      TableA
   },
   setup() {

      return {
         contract: {
            date: {
               id: 'contract-date',
               label: '계약일'
            },
            text: {
               id: 'contract-text',
               label: '계약자명',
               placeholder: '이름을 입력하세요...'
            }
         },
         deposit: {
            date: {
               id: 'deposit-date',
               label: '입금일'
            },
            text: {
               id: 'deposit-text',
               label: '입금자명',
               placeholder: '이름을 입력하세요...'
            }
         },
         contractData: require('../assets/contracts.json'),
         depositData: require('../assets/deposits.json')
      };
   }
}
</script>



<style scoped>
.revenue-sheet {
   display: flex;
   width: 100%;
   padding: 0 var(--main-padding-left-right);
   margin: 20px 0;
}
.revenue-sheet > div {
   height: 500px;
}
.revenue-sheet-left {
   flex: 1 1 52.5%;
}
.revenue-sheet-right {
   flex: 1 1 47.5%;
}
.revenue-sheet-left {
   margin-right: 10px;
}
.revenue-sheet-right {
   margin-left: 10px;
}
</style>
