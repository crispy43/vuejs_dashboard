<template>
<div class="revenue-sheet">
   <div class="revenue-sheet-left">
      <TitleA>매출</TitleA>
      <SearchBoxA
         :date="contract.date"
         :text="contract.text"
      />
   </div>
   <div class="revenue-sheet-right">
      <TitleA>입금</TitleA>
      <SearchBoxA
         :date="deposit.date"
         :text="deposit.text"
      />
   </div>
</div>
</template>



<script>
import TitleA from '../components/titles/TitleA';
import SearchBoxA from '../components/forms/SearchBoxA';

export default {
   name: 'RevenueSheet',
   components: {
      TitleA,
      SearchBoxA
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
         }
      };
   }
}
</script>



<style scoped>
.revenue-sheet {
   display: flex;
   width: 100%;
   padding: 0 var(--main-padding-left-right);
   margin: 10px 0;
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
