<template>
<div class="revenue-sheet">
   <div class="revenue-sheet-left">
      <TitleA>매출</TitleA>
      <SearchBoxA
         :date="contract.date"
         :text="contract.text"
      />
      <TableA
         :headers="pendingsHeaders"
         :data="pendingsData"
      />
   </div>
   <div class="revenue-sheet-right">
      <TitleA>입금</TitleA>
      <SearchBoxA
         :date="deposit.date"
         :text="deposit.text"
      />
      <TableA
         :headers="depositsHeaders"
         :data="depositsData"
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
      const { pendingsHeaders, pendingsData, depositsHeaders, depositsData } = toRefs(store.state.revenues);

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
         pendingsHeaders,
         pendingsData,
         depositsHeaders,
         depositsData
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
   flex: 1 1 55%;
}
.revenue-sheet-right {
   flex: 1 1 45%;
}
.revenue-sheet-left {
   margin-right: 10px;
}
.revenue-sheet-right {
   margin-left: 10px;
}
</style>
