<template>
<div class="contracts">
   <ContractsSearchBox />
   <div class="contracts-search-buttons">
      <ButtonA>검색</ButtonA>
      <ButtonA>초기화</ButtonA>
   </div>
   <TableB />
   <div>
      <div class="contracts-sheet-header">
         <TitleA>리스트</TitleA>
         <div class="contracts-sheet-header-right">
            <ButtonB>행추가</ButtonB>
            <ButtonB>행삭제</ButtonB>
            <ButtonB>엑셀업로드</ButtonB>
         </div>
      </div>
      <transition name="fade-i" mode="out-in" appear>
         <TableA
            :headers="contractsHeaders"
            :data="contractsData"
            :thHeight="'50px'"
         />
      </transition>
   </div>
</div>
</template>



<script>
import { useStore } from 'vuex';
import ContractsSearchBox from './components/ContractsSearchBox';
import TableA from '../components/tables/TableA/TableA';
import TableB from '../components/tables/TableB/TableB';
import TitleA from '../components/titles/TitleA';
import ButtonA from '../components/buttons/ButtonA';
import ButtonB from '../components/buttons/ButtonB';

export default {
   name: 'Contracts',
   components: {
      ContractsSearchBox,
      TableA,
      TableB,
      TitleA,
      ButtonA,
      ButtonB
   },
   setup() {
      const store = useStore();
      console.log(store);

      return {
         contractsHeaders: [
            {
               name: '코드',
               width: '5%'
            },
            {
               name: '계약일',
               width: '5%'
            },
            {
               name: '종목명',
               width: '5%'
            },
            {
               name: '기준가격',
               width: '5%'
            },
            {
               name: '매매수량',
               width: '5%'
            },
            {
               name: '총매매대금',
               width: '5%'
            },
            {
               name: '서비스신청수량',
               width: '5%'
            },
            {
               name: '서비스기간',
               width: '5%'
            },
            {
               name: '신청인',
               width: '5%'
            },
            {
               name: '연락처',
               width: '5%'
            },
            {
               name: '계약일',
               width: '5%'
            },
            {
               name: '상품명',
               width: '5%'
            },
            {
               name: '기준가격',
               width: '5%'
            },
            {
               name: '신청인주소',
               width: '5%'
            },
            {
               name: '담당자/사번',
               width: '5%'
            },
            {
               name: '직급',
               width: '5%'
            },
            {
               name: '은행명',
               width: '5%'
            },
            {
               name: '은행계좌',
               width: '5%'
            },
            {
               name: '전자지갑주소',
               width: '5%'
            },
            {
               name: '등록처리',
               width: '5%'
            }
         ],
         contractsData: [
            ['','','','','','','','','','','','','','','','','','','','',],
            ['','','','','','','','','','','','','','','','','','','','',],
            ['','','','','','','','','','','','','','','','','','','','',],
            ['','','','','','','','','','','','','','','','','','','','',],
            ['','','','','','','','','','','','','','','','','','','','',]
         ]
      };
   }
}
</script>



<style scoped>
.contracts {
   display: block;
   width: 100%;
}
.contracts-search-buttons {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 10px;
}
.contracts-search-buttons > button {
   margin: 0 5px 0;
}
.contracts-sheet-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.contracts-sheet-header-right > * {
   margin-left: 10px;
}
</style>
