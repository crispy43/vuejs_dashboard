<template>
<div class="main">
   <MainHeader />
   <router-view></router-view>
</div>
</template>



<script>
import MainHeader from './MainHeader';

export default {
   name: 'Main',
   components: {
      MainHeader
   },
   props: {
      headerHeight: String
   }
}
</script>



<style scoped>
.main {
   flex: 1 1 auto;
   padding-top: var(--header-height);
   background-color: white;
}
</style>
