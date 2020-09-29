<template>
<div class="main">
   <router-view></router-view>
</div>
</template>



<script>
export default {
   name: 'Main',
   props: {
      headerHeight: String
   }
}
</script>



<style>
.main {
   flex: 1 1 auto;
   padding-top: var(--header-height);
   background-color: white;
}
</style>
