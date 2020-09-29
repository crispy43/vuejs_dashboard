<template>
<div class="main">
   <h1>Main</h1>
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
