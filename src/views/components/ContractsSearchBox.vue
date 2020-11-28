<template>
<table class="contract-search-box">
   <tr>
      <td class="prop">
         <label>기간</label>
      </td>
      <td class="value" colspan="3">
         <select>
            <option>계약일</option>
         </select>
         <input type="date" />
      </td>
      <td class="prop">
         <label>종목명</label>
      </td>
      <td class="value">
         <select>
            <option>전체</option>
         </select>
      </td>
   </tr>
   <tr>
      <td class="prop">
         <label>계약구분</label>
      </td>
      <td class="value">
         <div class="radio-container">
            <input type="radio">
            <label class="radio-label">전체</label>
            <input type="radio">
            <label class="radio-label">전자계약</label>
            <input type="radio">
            <label class="radio-label">수기계약</label>
         </div>
      </td>
      <td class="prop">
         <label>계약상태</label>
      </td>
      <td class="value">
         <select>
            <option>전체</option>
         </select>
      </td>
      <td class="prop">
         <label>입금상태</label>
      </td>
      <td class="value">
         <select>
            <option>전체</option>
         </select>
      </td>
   </tr>
   <tr>
      <td class="prop">
         <label>입금은행</label>
      </td>
      <td class="value">
         <select>
            <option>전체</option>
         </select>
      </td>
      <td class="prop">
         <label>마감여부</label>
      </td>
      <td class="value">
         <div class="radio-container">
            <input type="radio">
            <label class="radio-label">수기계약</label>
            <input type="radio">
            <label class="radio-label">Y</label>
            <input type="radio">
            <label class="radio-label">N</label>
         </div>
      </td>
      <td class="prop">
         <label>고객 연락처</label>
      </td>
      <td class="value">
         <select>
            <option>전체</option>
         </select>
      </td>
   </tr>
   <tr>
      <td class="prop">
         <label>검색어</label>
      </td>
      <td class="value" colspan="3">
         <select>
            <option>담당자명</option>
         </select>
         <input type="text" />
      </td>
      <td class="prop">
         <label>지점</label>
      </td>
      <td class="value">
         <select>
            <option>전체</option>
         </select>
      </td>
   </tr>
</table>
</template>



<script>
export default {
   name: 'ContractSearchBox'
}
</script>



<style scoped>
.contract-search-box {
   display: table;
   width: 100%;
   border-collapse: collapse;
   border: var(--search-box-border);
   margin: 0 0 20px;
}
.contract-search-box td {
   height: 50px;
   border: var(--search-box-border);
   padding-left: 15px;
}
.prop {
   width: 13%;
   background-color: var(--search-box-prop-background-color);
   color: var(--search-box-prop-color);
   font-size: var(--search-box-prop-font-size);
   font-weight: var(--search-box-prop-font-weight);
}
.value {
   width: 20%;
   background-color: var(--search-box-value-background-color);
   color: var(--search-box-prop-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
}
.value > * {
   margin-right: 10px;
}
.radio-label {
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
}
.contract-search-box input[type=text], .contract-search-box input[type=date] {
   width: 12vw;
   border: var(--search-box-input-border);
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   padding: 7.5px 0 5px 5px;
}
.contract-search-box select {
   width: 12vw;
   border: var(--search-box-input-border);
   color: var(--search-box-value-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   padding: 7.5px 0 5px 5px;
}
.radio-container {
   display: flex;
   align-items: center;
}
.radio-container > * {
   margin-right: 10px;
}
</style>
