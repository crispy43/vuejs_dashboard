<template>
<ul class="title-b">
   <li><slot /></li>
</ul>
</template>



<script>
export default {
   name: 'TitleB'
}
</script>



<style scoped>
.title-b {
   display: block;
   list-style: square;
   padding: 5px 0 5px 9px;
   margin: 5px 0 5px 9px;
   font-size: var(--title-b-font-size);
   font-weight: var(--title-b-font-weight);
   color: var(--title-b-color);
}
</style>
