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
   width: 75px;
   height: 35px;
   border: 1px solid black;
   border-radius: 3px;
   background-color: rgb(240, 240, 240);
   font-size: 13px;
   cursor: pointer;
   padding: 5px 10px;
}
</style>
