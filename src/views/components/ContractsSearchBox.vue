<template>
<div class="search-box-b">
   <div>
      <div class="left">
         <div>
            <label class="prop">기간</label>
            <select>
               <option>계약일</option>
            </select>
            <input type="date"/>
         </div>
      </div>
      <div class="right">
         <div>
            <label class="prop">종목명</label>
            <select>
               <option>전체</option>
            </select>
         </div>
      </div>
   </div>
   <div>
      <div class="left">
         <div>
            <label class="prop">계약구분</label>
            <div>
               <input type="radio">
               <label class="radio-label">전체</label>
            </div>
            <div>
               <input type="radio">
               <label class="radio-label">전자계약</label>
            </div>
            <div>
               <input type="radio">
               <label class="radio-label">수기계약</label>
            </div>
         </div>
         <div>
            <label class="prop">계약상태</label>
            <select>
               <option>라디오</option>
            </select>
         </div>
      </div>
      <div class="right">
         <div>
            <label class="prop">입금상태</label>
            <select>
               <option>전체</option>
            </select>
         </div>
      </div>
   </div>
   <div>
      <div class="left">
         <div>
            <label class="prop">입금은행</label>
            <select>
               <option>전체</option>
            </select>
         </div>
         <div>
            <label class="prop">마감여부</label>
            <div>
               <input type="radio">
               <label class="radio-label">수기계약</label>
            </div>
            <div>
               <input type="radio">
               <label class="radio-label">Y</label>
            </div>
            <div>
               <input type="radio">
               <label class="radio-label">N</label>
            </div>
         </div>
      </div>
      <div class="right">
         <div>
            <label class="prop">고객연락처</label>
            <input type="text" />
         </div>
      </div>
   </div>
   <div>
      <div class="left">
         <div>
            <label class="prop">검색어</label>
            <select>
               <option>담당자명</option>
            </select>
            <input type="text" />
         </div>
      </div>
      <div class="right">
         <div>
            <label class="prop">지점</label>
            <select>
               <option>전체</option>
            </select>
         </div>
      </div>
   </div>
</div>
</template>



<script>
export default {
   name: 'ContractSearchBox'
}
</script>



<style scoped>
.search-box-b {
   display: flex;
   width: 100%;
   flex-direction: column;
   background-color: rgb(233, 233, 233);
   border: 1px solid black;
   margin: 10px 0;
}
.search-box-b > div {
   flex: 1 1 100%;
   display: flex;
   height: 50px;
}
.search-box-b > div > div {
   display: flex;
}
.search-box-b > div > .left {
   flex: 1 1 60%;
}
.search-box-b > div > .right {
   flex: 1 1 40%;
}
.search-box-b > div > div > div {
   flex: 1 1 50%;
   display: flex;
   align-items: center;
}
.search-box-b > div > .left > div > * {
   margin-left: 15px;
}
.prop {
   display: inline-block;
   width: 8vw;
   font-size: 15px;
   padding: 2.5px 5px;
}
.radio-label {
   padding: 0 7.5px;
   font-size: 13px;
}
.search-box-b input[type=text], .search-box-b input[type=date] {
   width: 12vw;
   font-size: 13px;
   padding: 2.5px 5px;
}
.search-box-b select {
   width: 12vw;
   font-size: 13px;
   padding: 2.5px 5px;
}
</style>
