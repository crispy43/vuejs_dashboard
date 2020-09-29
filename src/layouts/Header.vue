<template>
<div
   class="header"
>
   <div class="header-logo">
      <img
         :src="headerLogo.src"
         :alt="headerLogo.alt"
         @click="goHome"
      >
   </div>
   <div class="header-nav">
      <HeaderNavEle
         v-for="(item, index) in menuTree"
         :item="item"
         :index="index"
         :key="item.key"
      >{{ item.name }}</HeaderNavEle>
   </div>
   <div class="header-user">
      <img
         :src="headerUser.signOutImg.src"
         :alt="headerUser.signOutImg.alt"
         class="user-sign-out"
      >
   </div>
</div>
</template>



<script>
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import HeaderNavEle from '../components/navigations/HeaderNavEle';

export default {
   name: 'Header',
   components: {
      HeaderNavEle
   },
   props: {
      headerLogo: {
         src: Object,
         alt: String
      },
      headerUser: {
         signOutImg: {
            src: Object,
            alt: String
         },
         userId: String,
         userName: String
      }
   },
   setup() {
      const router = useRouter();
      const store = useStore();
      const { menuTree } = toRefs(store.state.menuTree);

      const goHome = () => {
         router.push({ path: '/' });
      }

      const fetch = () => {
         store._actions['menuTree/fetch'][0]();
      }

      return {
         goHome, menuTree, fetch
      };
   }
}
</script>



<style scoped>
.header {
   display: flex;
   align-items: center;
   align-content: center;
   position: fixed;
   left: 0;
   right: 0;
   z-index: 10;
   width: 100%;
   height: var(--header-height);
   background-color: var(--header-background-color);
}
.header-logo {
   flex: 0 1 var(--side-nav-width);
   display: flex;
   min-height: var(--header-logo-height);
}
.header-logo > img {
   width: var(--header-logo-width);
   height: var(--header-logo-height);
   cursor: pointer;
}
.header-nav {
   flex: 1 0 auto;
   display: flex;
}
.header-user {
   flex: 0 1 100px;
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
}
.user-sign-out {
   cursor: pointer;
}
</style>
