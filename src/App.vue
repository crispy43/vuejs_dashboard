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
@font-face {
   font-family: 'NanumSquareRound';
   font-weight: 300;
   src: local('NanumSquareRoundL'), url('assets/fonts/NanumSquareRoundL.ttf') format("truetype");
}
@font-face {
   font-family: 'NanumSquareRound';
   font-weight: 400;
   src: local('NanumSquareRoundR'), url('assets/fonts/NanumSquareRoundR.ttf') format("truetype");
}
@font-face {
   font-family: 'NanumSquareRound';
   font-weight: 700;
   src: local('NanumSquareRoundB'), url('assets/fonts/NanumSquareRoundB.ttf') format("truetype");
}
@font-face {
   font-family: 'NanumSquareRound';
   font-weight: 800;
   src: local('NanumSquareRoundEB'), url('assets/fonts/NanumSquareRoundEB.ttf') format("truetype");
}
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'NanumSquareRound', sans-serif;
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
