<template>
<div class="contracts">
   <ContractsSearchBox />
   <div class="contracts-search-buttons">
      <ButtonA>검색</ButtonA>
      <ButtonA>초기화</ButtonA>
   </div>
   <TableB
      :data="resultData"
   />
   <div>
      <div class="contracts-sheet-header">
         <TitleA>리스트</TitleA>
         <div class="contracts-sheet-header-right">
            <ButtonB>행추가</ButtonB>
            <ButtonB>행삭제</ButtonB>
            <ButtonB @click="setModal(true)">엑셀업로드</ButtonB>
         </div>
      </div>
      <div
         class="contracts-sheet-table"
         :style="{ height: 'calc(' + theadHeight + ' + 20vh)' }"
      >
         <transition name="fade-i" mode="out-in" appear>
            <LoaderA v-if="isLoadContracts" />
            <TableA
               v-else
               :headers="contractsHeaders"
               :data="contractsData"
               :tableWidth="'175%'"
               :theadHeight="theadHeight"
               :tbodyMaxHeight="tbodyMaxHeight"
               :thHeight="'50px'"
            />
         </transition>
      </div>
   </div>
</div>
<!-- modal -->
<Modal :modalName="modalName" />
</template>



<script>
import { onBeforeMount, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
import { mapMutation, mapAction } from '../common/mappers';
import ContractsSearchBox from './components/ContractsSearchBox';
import TableA from '../components/tables/TableA/TableA';
import TableB from '../components/tables/TableB/TableB';
import TitleA from '../components/titles/TitleA';
import ButtonA from '../components/buttons/ButtonA';
import ButtonB from '../components/buttons/ButtonB';
import LoaderA from '../components/loaders/LoaderA';
import Modal from '../layouts/Modal';

export default {
   name: 'Contracts',
   components: {
      ContractsSearchBox,
      TableA,
      TableB,
      TitleA,
      ButtonA,
      ButtonB,
      LoaderA,
      Modal
   },
   setup() {
      const store = useStore();
      onBeforeMount(() => {
         refreshContracts();
      });
      const {
         contractsHeaders,
         contractsData
      } = toRefs(store.state.revenues);

      const isLoadContracts = ref(false);

      const refreshContracts = async () => {
         isLoadContracts.value = true;
         await mapAction(store, 'fetchContracts', 'revenues')();
         isLoadContracts.value = false;
      }

      const setModal = (value) => {
         mapMutation(store, 'setIsModalOn')(value);
      }

      const modalName = ref('TempModal');

      return {
         theadHeight: '30px',
         tbodyMaxHeight: '50vh',
         contractsHeaders,
         contractsData,
         isLoadContracts,
         setModal,
         modalName,
         resultData: [
            [
               {
                  name: '총 매출건수',
                  filter: 'comma',
                  align: 'right',
                  value: 25
               },
               {
                  name: '총 매매대금',
                  filter: 'comma',
                  align: 'right',
                  value: 2000000000
               },
               {
                  name: '총 입금액',
                  filter: 'comma',
                  align: 'right',
                  value: 1000000000
               },
               {
                  name: '입금처리 건',
                  filter: 'comma',
                  align: 'right',
                  value: 12
               }
            ]
         ]
      };
   }
}
</script>



<style scoped>
.contracts {
   display: block;
   width: 100%;
   margin-bottom: 20px;
}
.contracts-search-buttons {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 10px 10px;
}
.contracts-search-buttons > button {
   margin: 0 5px 0;
}
.contracts-sheet-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 5px;
}
.contracts-sheet-header-right > * {
   margin-left: 10px;
}
.contracts-sheet-table {
   margin-bottom: 20px;
}
</style>
