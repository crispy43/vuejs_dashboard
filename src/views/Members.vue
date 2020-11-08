<template>
<div class="deposit">
   <SearchBoxA
      :date="{
         id: 'deposit-date',
         label: '입금일'
      }"
      :text="{
         id: 'contractor',
         label: '입금자명',
         placeholder: '입금자명을 입력하세요...'
      }"
   />
   <div class="deposit-table-header">
      <TitleA>리스트</TitleA>
      <div class="deposit-table-header-right">
         <ButtonB @click="setModal(true)">엑셀다운로드</ButtonB>
      </div>
   </div>
   <div
      class="deposit-table"
      :style="{ height: 'calc(' + theadHeight + ' + 40vh)' }"
   >
      <transition name="fade-i" mode="out-in" appear>
         <LoaderA v-if="isLoadDeposits" />
         <TableA
            v-else
            :headers="depositsFileHeaders"
            :data="depositsFileData"
            :theadHeight="theadHeight"
            :tbodyMaxHeight="tbodyMaxHeight"
            :thHeight="theadHeight"
         />
      </transition>
   </div>
</div>
</template>



<script>
import { ref } from 'vue';
import SearchBoxA from '../components/forms/SearchBoxA';
import TableA from '../components/tables/TableA/TableA';
import TitleA from '../components/titles/TitleA';
import ButtonB from '../components/buttons/ButtonB';
import LoaderA from '../components/loaders/LoaderA';

export default {
   name: 'Deposits',
   components: {
      SearchBoxA,
      TableA,
      TitleA,
      ButtonB,
      LoaderA
   },
   setup() {
      const isLoadDeposits = ref(false);

      return {
         theadHeight: '30px',
         tbodyMaxHeight: '50vh',
         depositsFileHeaders: {
            key: {
               name: '코드',
               width: '16.666%'
            },
            depositedAt: {
               name: '입금일시',
               width: '16.666%'
            },
            bank: {
               name: '입금은행',
               width: '16.666%'
            },
            bankAccount: {
               name: '입금계좌',
               width: '16.666%'
            },
            contractor: {
               name: '입금자',
               width: '16.666%'
            },
            amount: {
               name: '입금액',
               width: '16.666%'
            },
         },
         depositsFileData: [
            ['', '', '', '', '', '']
         ],
         isLoadDeposits
      };
   }
}
</script>



<style scoped>
.deposit-form {
   display: flex;
   width: 100%;
   border: var(--search-box-border);
   margin-bottom: 15px;
}
.deposit-prop {
   flex: 1 1 20%;
   display: flex;
   align-items: center;
   background-color: var(--search-box-background-color);
   padding: 20px;
}
.deposit-value {
   flex: 1 1 80%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
}
.deposit-input {
   flex: 1 1 auto;
   display: flex;
}
.deposit-input > select, .deposit-input > input {
   flex: 0 1 25%;
   height: 35px;
   border: var(--search-box-input-border);
   color: var(--search-box-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   margin-right: 15px;
   padding: 5px 10px;
}
.deposit-input > label {
   display: flex;
   align-items: center;
   justify-content: center;
   min-width: 100px;
   border: none;
   border-radius: 5px;
   background-color: var(--button-a-background-color);
   box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
   color: var(--button-a-color);
   font-size: var(--button-a-font-size);
   font-weight: var(--button-a-font-weight);
   cursor: pointer;
   margin-right: 15px;
   padding: 7.5px 10px;
}
.none {
   display: none;
}
.file-input-button {
   flex: 0 0 89px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #fafbfb;
   border-radius: 0 4px 4px 0 / 0 4px 4px 0;
   border-left: solid 1px #d8dbe0;
   font-size: 14px;
   color: #3c4b64;
}
.deposit-table-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 5px;
}
.deposit-table-header-right > * {
   margin-left: 10px;
}
.deposit-table-table {
   margin-bottom: 20px;
}
</style>
