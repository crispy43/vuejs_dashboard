<template>
<div class="search-box-a">
   <div class="search-box-a-form">
      <div class="search-box-a-date">
         <label :for="dateId">계약일</label>
         <input
            type="date"
            :name="dateId"
            :id="dateId"
         >
      </div>
      <div class="search-box-a-text">
         <label :for="textId">계약자명</label>
         <input
            type="text"
            :name="textId"
            :id="textId"
         >
      </div>
   </div>
   <ButtonA>검색</ButtonA>
</div>
</template>



<script>
import ButtonA from '../buttons/ButtonA';

export default {
   name: 'SearchBoxA',
   components: {
      ButtonA
   },
   props: {
      dateId: {
         type: String,
         required: true
      },
      textId: {
         type: String,
         required: true
      }
   }
}
</script>



<style scoped>
.search-box-a {
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   background-color: rgb(233, 233, 233);
   border: 1px solid black;
   padding: 15px 20px;
}
.search-box-a-form {
   flex: 1 1 auto;
   display: flex;
   align-items: center;
}
.search-box-a-form > div {
   flex: 1 1 auto;
   display: flex;
   margin-right: 20px;
}
.search-box-a-form > div > label {
   flex: 1 1 30%;
   display: flex;
   align-items: center;
   margin-right: 20px;
}
.search-box-a-form > div > input {
   flex: 1 1 70%;
   display: flex;
   align-items: center;
   height: 35px;
   margin-right: 20px;
   padding: 5px 10px;
}
.search-box-a button {
   flex: 0 1 auto;
}
</style>
