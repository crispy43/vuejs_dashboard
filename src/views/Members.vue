<template>
<div class="members">
   <div class="search-box">
      <div class="search-box-form">
         <div class="search-box-date">
            <label for="member-search-date">입사일</label>
            <input
               type="date"
               name="member-search-date"
               id="member-search-date"
            >
         </div>
         <div class="search-box-text">
            <label for="member-search-text">검색어</label>
            <select>
               <option value="">이름</option>
               <option value="">사번</option>
               <option value="">부서</option>
            </select>
            <input
               type="text"
               name="member-search-text"
               id="member-search-text"
               placeholder="검색어를 입력하세요..." 
            >
            <div class="search-box-check">
               <input
                  type="checkbox"
                  name="member-search-option"
                  id="member-search-option"
               >
               <label for="member-search-option">퇴직자 포함</label>
            </div>
         </div>
      </div>
      <ButtonA>검색</ButtonA>
   </div>
   <div class="member-table-header">
      <TitleA>직원목록 (000)명</TitleA>
      <div class="member-table-header-right">
         <ButtonB @click="setModal(true)">엑셀다운로드</ButtonB>
      </div>
   </div>
   <div
      class="member-table"
      :style="{ height: 'calc(' + theadHeight + ' + 40vh)' }"
   >
      <div class="member-table-option">
         직원 검색창
      </div>
      <div class="member-table-result">
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
</div>
</template>



<script>
import { ref } from 'vue';
import TableA from '../components/tables/TableA/TableA';
import TitleA from '../components/titles/TitleA';
import ButtonA from '../components/buttons/ButtonA';
import ButtonB from '../components/buttons/ButtonB';
import LoaderA from '../components/loaders/LoaderA';

export default {
   name: 'Members',
   components: {
      TableA,
      TitleA,
      ButtonA,
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
               name: '사번',
               width: '16.666%'
            },
            depositedAt: {
               name: '이름',
               width: '16.666%'
            },
            bank: {
               name: '부서구분',
               width: '16.666%'
            },
            bankAccount: {
               name: '직원유형',
               width: '16.666%'
            },
            contractor: {
               name: '부서',
               width: '16.666%'
            },
            amount: {
               name: '직급',
               width: '16.666%'
            }
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
.search-box {
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   background-color: var(--search-box-background-color);
   border: var(--search-box-border);
   padding: 12.5px 15px;
   margin: 10px 0;
}
.search-box-form {
   flex: 1 1 auto;
   display: flex;
   align-items: center;
}
.search-box-form > div {
   flex: 1 1 auto;
   display: flex;
   margin-right: 20px;
}
.search-box-form > div > label {
   flex: 1 1 30%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   color: var(--search-box-prop-color);
   font-size: var(--search-box-prop-font-size);
   font-weight: var(--search-box-prop-font-weight);
   margin-right: 20px;
}
.search-box-form > div > input, .search-box-form > div > select {
   flex: 1 1 70%;
   display: flex;
   min-width: 50px;
   align-items: center;
   height: 35px;
   border: var(--search-box-input-border);
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   margin-right: 20px;
   padding: 5px 10px;
}
.search-box-check {
   min-width: 100px;
   display: flex;
   align-items: center;
}
.search-box-check label {
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   padding-left: 15px;
}
.search-box button {
   flex: 0 1 100px;
}
.member-table-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 5px;
}
.member-table-header-right > * {
   margin-left: 10px;
}
.member-table {
   display: flex;
   margin-bottom: 20px;
}
.member-table-option {
   flex: 1 1 33%;
   border: 1px solid black;
   margin-right: 30px;
}
.member-table-result {
   flex: 1 1 66%;
}
</style>
