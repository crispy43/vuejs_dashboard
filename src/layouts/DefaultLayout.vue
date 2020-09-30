<template>
<div :style="cssRootVar" class="root-layout">
   <Header
      :headerLogo="headerLogo"
      :headerUser="headerUser"
   />
   <SideNav />
   <Main />
</div>
</template>



<script>
import { reactive, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { mapAction } from '../common/utils';
import Header from './Header';
import SideNav from './SideNav';
import Main from './Main';

export default {
   name: 'DefaultLayout',
   components: {
      Header,
      SideNav,
      Main
   },
   setup() {
      const store = useStore();
      const fetchTreeMenu = mapAction(store, 'fetch', 'treeMenu');

      onBeforeMount(() => {
         fetchTreeMenu();
      });

      // css 변수
      const cssRootVar = reactive({
         '--header-height': '70px',
         '--header-background-color': 'darkslategray',
         '--header-background-color-hover': 'black',
         '--header-nav-color': 'white',
         '--side-nav-width': '200px',
         '--header-logo-width': '200px',
         '--header-logo-height': 'auto',
         '--header-user-signout-width': 'auto',
         '--header-user-signout-height': 'auto'
      });

      // 해더 로고
      const headerLogo = reactive({
         src: require('../assets/tmp_logo.png'),
         alt: 'bizportal_logo'
      });

      // 해더 유저
      const headerUser = reactive({
         signOutImg: {
            src: require('../assets/tmp_logout.png'),
            alt: 'logout'
         },
         userId: 'test',
         userName: '테스트'
      });

      return {
         cssRootVar, headerLogo, headerUser
      };
   }
}
</script>



<style scoped>
.root-layout {
   flex: 1 1 auto;
   display: flex;
}
</style>
