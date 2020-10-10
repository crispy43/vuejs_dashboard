<template>
<button class="button-a" :style="{ 'width': width }">
   <slot />
</button>
</template>



<script>
export default {
   name: 'ButtonA',
   props: {
      width: {
         type: String,
         default: '100px'
      }
   }
}
</script>



<style scoped>
.button-a {
   border: none;
   border-radius: 5px;
   background-color: var(--button-a-background-color);
   box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
   color: var(--button-a-color);
   font-size: var(--button-a-font-size);
   font-weight: var(--button-a-font-weight);
   cursor: pointer;
   padding: 7.5px 10px;
}
</style>
