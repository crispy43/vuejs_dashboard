<template>
<div class="side-nav">
   <h1>SideNav</h1>
</div>
</template>



<script>
export default {
   name: 'SideNav',
   props: {
      headerHeight: String,
      sideNavWidth: String
   }
}
</script>



<style>
.side-nav {
   flex: 0 1 var(--side-nav-width);
   padding-top: var(--header-height);
   background-color: aliceblue;
}
</style>
