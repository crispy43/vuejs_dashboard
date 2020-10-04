<template>
<div class="revenue-sheet">
   <div class="revenue-sheet-a">
      <div class="revenue-sheet-a-left">
         <TitleA>매출 내역</TitleA>
         <SearchBoxA
            :date="contract.date"
            :text="contract.text"
         />
         <div class="scroll-div">
            <TableA
               :headers="pendingsHeaders"
               :data="pendingsData"
               :tbodyMaxHeight="tbodyMaxHeight"
            />
         </div>
      </div>
      <div class="revenue-sheet-a-right">
         <TitleA>입금 내역</TitleA>
         <SearchBoxA
            :date="deposit.date"
            :text="deposit.text"
         />
         <TableA
            :headers="depositsHeaders"
            :data="depositsData"
            :tbodyMaxHeight="tbodyMaxHeight"
         />
      </div>
   </div>
   <div class="revenue-sheet-b">
      <TitleA>입금 확인</TitleA>
      <TableA
         :headers="paymentConfirmsHeaders"
         :data="paymentConfirmsData"
         :tbodyMaxHeight="tbodyMaxHeight"
      />
   </div>
</div>
</template>



<script>
import { onBeforeMount, toRefs } from 'vue';
import { useStore } from 'vuex';
import { mapAction } from '../common/mappers';
import TitleA from '../components/titles/TitleA';
import SearchBoxA from '../components/forms/SearchBoxA';
import TableA from '../components/tables/TableA/TableA';

export default {
   name: 'RevenueSheet',
   components: {
      TitleA,
      SearchBoxA,
      TableA
   },
   setup() {
      const store = useStore();
      onBeforeMount(() => {
         mapAction(store, 'fetch', 'revenues')();
      });
      const {
         pendingsHeaders,
         pendingsData,
         depositsHeaders,
         depositsData,
         paymentConfirmsHeaders,
         paymentConfirmsData
      } = toRefs(store.state.revenues);

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
         tbodyMaxHeight: '40vh',
         pendingsHeaders,
         pendingsData,
         depositsHeaders,
         depositsData,
         paymentConfirmsHeaders,
         paymentConfirmsData
      };
   }
}
</script>



<style scoped>
.revenue-sheet {
   display: flex;
   flex-direction: column;
   width: 100%;
}
.revenue-sheet-a {
   flex: 1 1 100%;
   display: flex;
}
.revenue-sheet-a-left {
   flex: 1 1 55%;
   margin-right: 10px;
}
.revenue-sheet-a-right {
   flex: 1 1 45%;
   margin-left: 10px;
}
.revenue-sheet-b {
   flex: 1 1 100%;
   display: block;
}
</style>
