<template>
<button class="button-b">
   <slot />
</button>
</template>



<script>
export default {
   name: 'ButtonB'
}
</script>



<style scoped>
.button-b {
   width: auto;
   height: auto;
   border: 1px solid black;
   border-radius: 5px;
   background-color: white;
   font-size: 11px;
   cursor: pointer;
   padding: 5px 7.5px;
}
</style>
