<template>
<div class="get-employee">
   <div class="get-employee-header">
      <TitleA>직원 검색</TitleA>
      <FontAwesomeIcon icon="times" @click="setModal(false)" />
   </div>
   <div class="search-employee">
      <div class="search-employee-form">
         <div class="search-employee-text">
            <label for="search-employee-input">검색조건</label>
            <select>
               <option>이름</option>
            </select>
            <input
               id="search-employee-input"
               name="search-employee-input"
               type="text" 
            >
         </div>
      </div>
      <ButtonA>검색</ButtonA>
   </div>
   <div>
      <TitleB>타이틀 (총 XX명)</TitleB>
      <TableA
         :headers="headers"
         :data="data"
         :tableWidth="'100%'"
         :theadHeight="theadHeight"
         :tbodyMaxHeight="tbodyMaxHeight"
         :thHeight="'50px'"
      />
   </div>
</div>
</template>



<script>
import { useStore } from 'vuex';
import { mapMutation } from '../../../common/mappers';
import TitleA from '../../../components/titles/TitleA';
import TitleB from '../../../components/titles/TitleB';
import ButtonA from '../../../components/buttons/ButtonA';
import TableA from '../../../components/tables/TableA/TableA';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTimes);

export default {
   name: 'GetEmployee',
   components: {
      TitleA,
      TitleB,
      ButtonA,
      FontAwesomeIcon,
      TableA
   },
   setup() {
      const store = useStore();
      const setModal = () => {
         mapMutation(store, 'setIsModalOn')(false);
      }

      return {
         setModal,
         theadHeight: '30px',
         tbodyMaxHeight: '50vh',
         headers: {
            key: {
               name: '사번',
               width: '25%'
            },
            depositedAt: {
               name: '이름',
               width: '25%'
            },
            bank: {
               name: '본부',
               width: '25%'
            },
            bankAccount: {
               name: '직급',
               width: '25%'
            },
            contractor: {
               name: '이사',
               width: '25%'
            }
         },
         data: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
         ],
      };
   }
}
</script>



<style scoped>
.get-employee {
   display: flex;
   flex-direction: column;
   width: 750px;
   height: 900px;
}
.get-employee-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.get-employee-header svg {
   cursor: pointer;
   font-size: 23px;
   color: #555;
   margin-right: 10px;
}
.search-employee {
   display: flex;
   width: calc(100% - 10px);
   align-items: center;
   justify-content: space-between;
   background-color: var(--search-box-background-color);
   border: var(--search-box-border);
   padding: 12.5px 15px;
   margin: 10px 5px;
}
.search-employee-form {
   flex: 1 1 auto;
   display: flex;
   align-items: center;
}
.search-employee-form > div {
   flex: 1 1 auto;
   display: flex;
   margin-right: 20px;
}
.search-employee-form > div > label {
   flex: 1 1 30%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   color: var(--search-box-prop-color);
   font-size: var(--search-box-prop-font-size);
   font-weight: var(--search-box-prop-font-weight);
   margin-right: 20px;
}
.search-employee-form > div > select {
   flex: 1 1 40%;
}
.search-employee-form > div > input {
   flex: 1 1 60%;
}
.search-employee-form > div > input, .search-employee-form > div > select {
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
.search-employee button {
   flex: 0 1 100px;
}
</style>
