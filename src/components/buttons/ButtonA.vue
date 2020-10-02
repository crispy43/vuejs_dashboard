<template>
<button class="button-a">
   <slot />
</button>
</template>



<script>
export default {
   name: 'ButtonA'
}
</script>



<style scoped>
.button-a {
   display: block;
   width: 75px;
   height: 35px;
   padding: 5px 10px;
}
</style>
