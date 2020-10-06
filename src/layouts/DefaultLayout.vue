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
         '--header-height': '55px',
         '--header-background-color': 'rgb(70, 70, 70)',
         '--header-background-color-hover': 'black',
         '--header-nav-color': 'white',
         '--side-nav-width': '200px',
         '--side-nav-min-width': '50px',
         '--side-nav-background-color': 'rgb(233, 233, 233)',
         '--side-nav-items-active-background-color': 'rgb(190, 190, 190)',
         '--header-logo-width': '200px',
         '--header-logo-height': 'auto',
         '--header-user-signout-width': 'auto',
         '--header-user-signout-height': 'auto',
         '--main-padding-top': '5px',
         '--main-padding-left-right': '35px',
         '--scrollbar-width': '6px'
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



<style>
.root-layout {
   flex: 1 1 auto;
   display: flex;
}
::-webkit-scrollbar {
   width: var(--scrollbar-width);
}
::-webkit-scrollbar-track {
   background-color: transparent;
}
::-webkit-scrollbar-thumb {
   border-radius: 3px;
   background-color: gray;
}
::-webkit-scrollbar-button {
   width: 0;
   height: 0;
}
/* fade */
.fade-enter-active, .fade-leave-active {
   transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
   opacity: 0;
}
.fade-i-enter-active {
   transition: opacity 0.4s;
}
.fade-i-enter-from {
   opacity: 0;
}
.fade-o-leave-active {
   transition: opacity 0.4s;
}
.fade-o-leave-to {
   opacity: 0;
}
</style>
