<template>
<div class="sign-in">
   <div class="sign-in-container">
      <div class="sign-in-header">
         <h1>Biz.Portal</h1>
      </div>
      <div class="sign-in-form">
         <div class="sign-in-form-header">
            <p>비즈포탈에 로그인하세요.</p>
         </div>
         <div class="sign-in-form-inputs">
            <div class="id">
               <FontAwesomeIcon icon="portrait" />
               <input
                  type="text"
                  placeholder="아이디를 입력하세요."
                  @change="idChange"
               />
            </div>
            <div class="pwd">
               <FontAwesomeIcon icon="key" />
               <input
                  type="password"
                  placeholder="비밀번호를 입력하세요."
                  @change="pwdChange"
               />
            </div>
         </div>
         <div class="sign-in-footer">
            <button @click="signIn">로그인</button>
         </div>
      </div>
   </div>
</div>
</template>



<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { mapMutation } from '../common/mappers';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPortrait, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faPortrait, faKey);

export default {
   name: 'SignIn',
   components: {
      FontAwesomeIcon
   },
   setup() {
      const store = useStore();
      const router = useRouter();
      const id = ref('');
      const pwd = ref('');

      const idChange = (e) => {
         id.value = e.target.value;
      }

      const pwdChange = (e) => {
         pwd.value = e.target.value;
      }

      const signIn = () => {
         localStorage.setItem('accessToken', true);
         localStorage.setItem('refreshToken', true);
         mapMutation(store, 'setIsAuthenticated')(true);
         router.push({ path: '/' });
      }

      return {
         idChange,
         pwdChange,
         signIn
      };
   }
}
</script>



<style scoped>
.sign-in {
   display: block;
   width: 100%;
   height: 100%;
   background-color: #5e72e4;
}
.sign-in-container {
   display: flex;
   flex-direction: column;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 400px;
}
.sign-in-container > div {
   width: 100%;
   padding: 30px;
}
.sign-in-header {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 25px 0;
}
.sign-in-header h1 {
   color: white;
}
.sign-in-form {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   border-radius: 5px;
   background-color: #f6fafc;
}
.sign-in-form-header {
   padding: 18px 0;
}
.sign-in-form-header p {
   font-size: 15px;
   font-weight: bold;
   color: #597dd7;
}
.sign-in-form-inputs {
   width: 100%;
}
.sign-in-form-inputs > div {
   display: flex;
   width: 100%;
   height: 45px;
   align-items: center;
   background-color: white;
   border-radius: 3px;
   box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
   margin: 17.5px 0;
}
.sign-in-form-inputs > div > svg {
   flex: 0 0 auto;
   color: #525f7f;
   margin: 10px;
}
.sign-in-form-inputs .id > svg {
   font-size: 23px;
}
.sign-in-form-inputs .pwd > svg {
   font-size: 18px;
}
.sign-in-form-inputs > div > input {
   flex: 1 1 auto;
   border: none;
   padding: 5px;
}
.sign-in-footer {
   display: flex;
   width: 100%;
   margin: 50px 0 15px;
}
.sign-in-footer > button {
   flex: 1 1 auto;
   border: none;
   border-radius: 5px;
   background-color: #5e72e4;
   box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
   color: white;
   cursor: pointer;
   font-size: 14px;
   font-weight: bold;
   padding: 15px;
}
</style>
