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
   border: none;
   border-radius: 5px;
   background-color: var(--button-b-background-color);
   box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
   color: var(--button-b-color);
   font-size: var(--button-b-font-size);
   font-weight: var(--button-b-font-weight);
   cursor: pointer;
   padding: 7.5px 10px;
}
</style>
