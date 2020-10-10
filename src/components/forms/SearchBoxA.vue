<template>
<div class="search-box-a">
   <div class="search-box-a-form">
      <div class="search-box-a-date">
         <label :for="date.id">{{ date.label }}</label>
         <input
            type="date"
            :name="date.id"
            :id="date.id"
         >
      </div>
      <div class="search-box-a-text">
         <label :for="text.id">{{ text.label }}</label>
         <input
            type="text"
            :name="text.id"
            :id="text.id"
            :placeholder="text.placeholder" 
         >
      </div>
   </div>
   <ButtonA>{{ submitText }}</ButtonA>
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
      date: {
         id: {
            type: String,
            required: true
         },
         label: {
            type: String,
            required: true
         }
      },
      text: {
         id: {
            type: String,
            required: true
         },
         label: {
            type: String,
            required: true
         },
         placeholder: {
            type: String
         }
      },
      submitText: {
         type: String,
         default: '검색'
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
   background-color: var(--search-box-background-color);
   border: var(--search-box-border);
   padding: 12.5px 15px;
   margin: 10px 0;
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
   justify-content: flex-start;
   color: var(--search-box-color);
   font-size: var(--search-box-prop-font-size);
   font-weight: var(--search-box-prop-font-weight);
   margin-right: 20px;
}
.search-box-a-form > div > input {
   flex: 1 1 70%;
   display: flex;
   min-width: 50px;
   align-items: center;
   height: 35px;
   border: var(--search-box-input-border);
   color: var(--search-box-color);
   font-size: var(--search-box-value-font-size);
   font-weight: var(--search-box-value-font-weight);
   margin-right: 20px;
   padding: 5px 10px;
}
.search-box-a button {
   flex: 0 1 100px;
}
</style>
