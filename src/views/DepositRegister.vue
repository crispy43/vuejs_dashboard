<template>
<div class="deposit-register">
   <div class="deposit-register-form">
      <div class="deposit-register-prop">
         <label>
            파일 첨부
         </label>
      </div>
      <div class="deposit-register-value">
         <div class="deposit-register-input">
            <select>
               <option>은행명</option>
            </select>
            <input
               id="depositFileName"
               readonly
            />
            <input
               id="depositFile"
               type="file"
               class="none"
            />
            <label for="depositFile">
               파일찾기
            </label>
            <ButtonA>업로드</ButtonA>
         </div>
         <ButtonA>샘플다운로드</ButtonA>
      </div>
   </div>
   <div class="deposit-register-table-header">
      <TitleA>리스트</TitleA>
      <div class="deposit-register-table-header-right">
         <ButtonB @click="setModal(true)">엑셀다운로드</ButtonB>
      </div>
   </div>
   <div
      class="deposit-register-table"
      :style="{ height: 'calc(' + theadHeight + ' + 40vh)' }"
   >
      <transition name="fade-i" mode="out-in" appear>
         <LoaderA v-if="isLoadDepositsFile" />
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
<!-- modal -->
<Modal :modalName="modalName" />
</template>



<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../common/mappers';
import TableA from '../components/tables/TableA/TableA';
import TitleA from '../components/titles/TitleA';
import ButtonA from '../components/buttons/ButtonA';
import ButtonB from '../components/buttons/ButtonB';
import LoaderA from '../components/loaders/LoaderA';
import Modal from '../layouts/Modal';

export default {
   name: 'DepositRegister',
   components: {
      TableA,
      TitleA,
      ButtonA,
      ButtonB,
      LoaderA,
      Modal
   },
   setup() {
      const store = useStore();

      const isLoadDepositsFile = ref(false);

      const setModal = (value) => {
         mapMutation(store, 'setIsModalOn')(value);
      }

      const modalName = ref('TempModal');

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
         isLoadDepositsFile,
         setModal,
         modalName
      };
   }
}
</script>



<style scoped>
.deposit-register-form {
   display: flex;
   width: 100%;
   border: var(--search-box-border);
   margin-bottom: 15px;
}
.deposit-register-prop {
   flex: 1 1 20%;
   display: flex;
   align-items: center;
   background-color: var(--search-box-background-color);
   font-size: var(--search-box-prop-font-size);
   padding: 20px;
}
.deposit-register-value {
   flex: 1 1 80%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
}
.deposit-register-input {
   flex: 1 1 auto;
   display: flex;
   padding: 12.5px 0;
}
.deposit-register-input > select, .deposit-register-input > input {
   flex: 0 1 25%;
   height: 35px;
   border: var(--search-box-input-border);
   color: var(--search-box-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   margin-right: 15px;
   padding: 10px;
}
.deposit-register-input > label {
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
.deposit-register-table-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.deposit-register-table-header-right > * {
   margin-left: 10px;
}
.deposit-register-table-table {
   margin-bottom: 20px;
}
</style>
