<template>
<div :style="cssRootVar" class="root-layout">
   <Header :headerLogo="headerLogo" />
   <SideNav />
   <Main />
</div>
</template>



<script>
import { reactive } from 'vue';
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
      // css 변수
      const cssRootVar = reactive({
         '--header-height': '70px',
         '--header-background-color': 'rgb(70, 70, 70)',
         '--header-background-color-hover': 'black',
         '--header-nav-color': 'white',
         '--side-nav-width': '200px',
         '--side-nav-background-color': 'rgb(233, 233, 233)',
         '--side-nav-items-active-background-color': 'rgb(190, 190, 190)',
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

      return {
         cssRootVar, headerLogo
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
