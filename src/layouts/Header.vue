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
      <HeaderNav
         v-for="(item, index) in tree"
         :key="item.key"
         :index="index"
         :menu="item.name"
      />
   </div>
   <div class="header-user">
      <FontAwesomeIcon
         icon="sign-out-alt"
         @click="signOut"
      />
   </div>
</div>
</template>



<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import HeaderNav from '../components/navigations/HeaderNav';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSignOutAlt);

export default {
   name: 'Header',
   components: {
      HeaderNav,
      FontAwesomeIcon
   },
   props: {
      headerLogo: {
         src: Object,
         alt: String
      }
   },
   setup() {
      const router = useRouter();
      const store = useStore();
      const { tree } = store.state.treeMenu;

      const goHome = () => {
         router.push({ path: '/' });
      }

      const signOut = () => {
         localStorage.removeItem('accessToken');
         localStorage.removeItem('refreshToken');
         router.push({ path: '/' });
      }

      return {
         goHome,
         tree,
         signOut
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
   z-index: 11;
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
.header-user > svg {
   font-size: 20px;
   color: var(--header-nav-color);
   cursor: pointer;
}
.user-sign-out {
   cursor: pointer;
}
</style>
