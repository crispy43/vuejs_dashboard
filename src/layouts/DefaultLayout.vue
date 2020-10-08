<template>
<div :style="cssRootVar" class="root-layout">
   <Header v-if="isAuthenticated" :headerLogo="headerLogo" />
   <SideNav v-if="isAuthenticated" />
   <Main />
</div>
</template>



<script>
import { toRefs, reactive } from 'vue';
import { useStore } from 'vuex';
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
      const cssRootVar = reactive({
         // layout
         '--header-height': '55px',
         '--header-background-color': '#5e72e4',
         '--header-background-color-hover': '#576ada',
         '--header-nav-color': 'white',
         '--header-nav-font-size': '14px',
         '--side-nav-width': '200px',
         '--side-nav-min-width': '50px',
         '--side-nav-background-color': 'rgb(250, 250, 250)',
         '--side-nav-items-background-color-active': 'rgb(240, 240, 240)',
         '--header-logo-width': '200px',
         '--header-logo-height': 'auto',
         '--header-user-signout-width': 'auto',
         '--header-user-signout-height': 'auto',
         '--main-padding-top': '5px',
         '--main-padding-left-right': '35px',
         '--scrollbar-width': '6px',
         '--scrollbar-background-color': 'rgb(240, 240, 240)',

         // components
         '--search-box-background-color': 'rgb(230, 230, 230)',
         '--search-box-prop-background-color': 'rgb(230, 230, 230)',
         '--search-box-prop-color': 'black',
         '--search-box-prop-font-size': '12px',
         '--search-box-value-background-color': 'white',
         '--search-box-value-color': 'black',
         '--search-box-value-font-size': '12px',
         '--search-box-value-input-height': '22px',
         '--search-box-border': '1px solid rgb(240, 240, 240)',
         '--search-box-cell-border': '1px solid rgb(240, 240, 240)',
         '--search-box-input-border': '1px solid rgb(210, 210, 210)',
         '--table-a-border': '1px solid rgb(230, 230, 230)',
         '--table-a-cell-border': '1px solid rgb(230, 230, 230)',
         '--table-a-th-background-color': 'rgb(230, 230, 230)',
         '--table-a-th-color': 'black',
         '--table-a-th-font-size': '12px',
         '--table-a-td-odd-background-color': 'white',
         '--table-a-td-even-background-color': 'rgb(255, 255, 255)',
         '--table-a-td-color': 'black',
         '--table-a-td-font-size': '12px',
         '--table-a-td-input-border': '1px solid rgb(210, 210, 210)',
         '--table-b-border': '1px solid rgb(230, 230, 230)',
         '--table-b-cell-border': '1px solid rgb(230, 230, 230)',
         '--table-b-th-background-color': 'rgb(230, 230, 230)',
         '--table-b-th-color': 'black',
         '--table-b-th-font-size': '12px',
         '--table-b-td-background-color': 'white',
         '--table-b-td-color': 'black',
         '--table-b-td-font-size': '12px',
         '--button-a-background-color': '#5e72e4',
         '--button-a-color': 'white',
         '--button-a-font-size': '13px',


      });

      // 해더 로고
      const headerLogo = reactive({
         src: require('../assets/logo_white.svg'),
         alt: 'bizportal_logo'
      });

      const store = useStore();
      const { isAuthenticated } = toRefs(store.state);

      return {
         cssRootVar,
         headerLogo,
         isAuthenticated
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
   background-color: var(--scrollbar-background-color);
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
