<template>
<div class="main">
   <router-view />
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



<style scoped>
.main {
   flex: 1 1 auto;
   padding: calc(var(--header-height) + var(--main-padding-top)) var(--main-padding-left-right) 0;
   margin-bottom: 20px;
   background-color: white;
   overflow-y: auto;
}
</style>
