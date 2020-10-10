<template>
<div class="revenue-sheet">
   <div class="revenue-sheet-a">
      <div class="revenue-sheet-a-left">
         <div class="revenue-sheet-header">
            <TitleA>매출 내역</TitleA>
            <ButtonB @click="refreshPendings">새로고침</ButtonB>
         </div>
         <SearchBoxA
            :date="contract.date"
            :text="contract.text"
         />
         <div class="revenue-sheet-header">
            <TitleB>입금대기</TitleB>
            <!-- <ButtonB>저장</ButtonB> -->
         </div>
         <div
            class="revenue-sheet-a-table"
            :style="{ height: 'calc(' + theadHeight + ' + ' + tbodyMaxHeight + ')' }"
         >
            <transition name="fade-i" mode="out-in" appear>
               <LoaderA v-if="isLoadPendings" />
               <TableA
                  v-else
                  :headers="pendingsHeaders"
                  :data="pendingsData"
                  :theadHeight="theadHeight"
                  :tbodyMaxHeight="tbodyMaxHeight"
                  :selectRowMutName="'checkPending'"
                  :selectRowStateName="'pendingsChecked'"
                  :hideRowStateName="'pendingsMatched'"
                  :storeName="'revenues'"
               />
            </transition>
         </div>
      </div>
      <div class="revenue-sheet-a-right">
         <div class="revenue-sheet-header">
            <TitleA>입금 내역</TitleA>
            <ButtonB @click="refreshDeposits">새로고침</ButtonB>
         </div>
         <SearchBoxA
            :date="deposit.date"
            :text="deposit.text"
         />
         <div class="revenue-sheet-header">
            <TitleB>은행 거래내역</TitleB>
            <ButtonB @click="confirm">업로드</ButtonB>
         </div>
         <div
            class="revenue-sheet-a-table"
            :style="{ height: 'calc(' + theadHeight + ' + ' + tbodyMaxHeight + ')' }"
         >
            <transition name="fade-i" mode="out-in" appear>
               <LoaderA v-if="isLoadDeposits" />
               <TableA
                  v-else
                  :headers="depositsHeaders"
                  :data="depositsData"
                  :theadHeight="theadHeight"
                  :tbodyMaxHeight="tbodyMaxHeight"
                  :selectRowMutName="'checkDeposit'"
                  :selectRowStateName="'depositsChecked'"
                  :hideRowStateName="'depositsMatched'"
                  :storeName="'revenues'"
               />
            </transition>
         </div>
      </div>
   </div>
   <div class="revenue-sheet-b">
      <div class="revenue-sheet-header">
         <TitleA>입금 확인</TitleA>
         <div class="revenue-sheet-header-right">
            <ButtonB @click="cancelConfirm">입금 확인 취소</ButtonB>
            <!-- <ButtonB>저장</ButtonB> -->
         </div>
      </div>
      <TableA
         :headers="paymentConfirmsHeaders"
         :data="paymentConfirmsData"
         :theadHeight="theadHeight"
      />
   </div>
</div>
</template>



<script>
import { onBeforeMount, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import { mapAction, mapMutation } from '../common/mappers';
import TitleA from '../components/titles/TitleA';
import TitleB from '../components/titles/TitleB';
import ButtonB from '../components/buttons/ButtonB';
import SearchBoxA from '../components/forms/SearchBoxA';
import TableA from '../components/tables/TableA/TableA';
import LoaderA from '../components/loaders/LoaderA';

export default {
   name: 'RevenueSheet',
   components: {
      TitleA,
      TitleB,
      ButtonB,
      SearchBoxA,
      TableA,
      LoaderA
   },
   setup() {
      const store = useStore();
      onBeforeMount(() => {
         refreshPendings();
         refreshDeposits();
         if (store.state.revenues.paymentConfirms.size === 0)
            mapMutation(store, 'setPaymentConfirms', 'revenues')([]);
      });
      const {
         pendingsHeaders,
         pendingsData,
         depositsHeaders,
         depositsData,
         paymentConfirmsHeaders,
         paymentConfirmsData
      } = toRefs(store.state.revenues);

      const isLoadPendings = ref(false);
      const isLoadDeposits = ref(false);

      const refreshPendings = async () => {
         isLoadPendings.value = true;
         mapMutation(store, 'clearMatched', 'revenues')();
         await mapAction(store, 'fetchPendings', 'revenues')();
         isLoadPendings.value = false;
      }

      const refreshDeposits = async () => {
         isLoadDeposits.value = true;
         mapMutation(store, 'clearMatched', 'revenues')();
         await mapAction(store, 'fetchDeposits', 'revenues')();
         isLoadDeposits.value = false;
      }

      const confirm = () => {
         mapMutation(store, 'confirm', 'revenues')();
      }

      const cancelConfirm = () => {
         mapMutation(store, 'clearMatched', 'revenues')();
      }

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
         theadHeight: '40px',
         tbodyMaxHeight: '40vh',
         pendingsHeaders,
         pendingsData,
         depositsHeaders,
         depositsData,
         paymentConfirmsHeaders,
         paymentConfirmsData,
         isLoadPendings,
         isLoadDeposits,
         refreshPendings,
         refreshDeposits,
         confirm,
         cancelConfirm
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
.revenue-sheet-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.revenue-sheet-header-right > * {
   margin-left: 10px;
}
.revenue-sheet-a {
   flex: 1 1 100%;
   display: flex;
}
.revenue-sheet-a-table {
   margin-bottom: 20px;
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
