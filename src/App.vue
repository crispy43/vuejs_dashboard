<template>
<DefaultLayout />
</template>



<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from './common/mappers';
import DefaultLayout from './layouts/DefaultLayout';

export default {
   name: 'App',
   components: {
      DefaultLayout
   },
   setup() {
      const store = useStore();

      onBeforeMount(() => {
         const accessToken = localStorage.getItem('accessToken');
         const refreshToken = localStorage.getItem('refreshToken');

         (!accessToken || !refreshToken)
            ? mapMutation(store, 'setIsAuthenticated')(false)
            : mapMutation(store, 'setIsAuthenticated')(true);
      });
   }
}
</script>



<style>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Noto Sans KR', sans-serif;
}
html, body {
   display: flex;
   justify-content: center;
   width: 100%;
   height: 100%;
   overflow-x: hidden;
   overflow-y: hidden;
}
#app {
   flex: 1 1 auto;
   display: flex;
}
</style>
