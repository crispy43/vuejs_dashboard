<template>
<ul class="title-a">
   <li><slot /></li>
</ul>
</template>



<script>
export default {
   name: 'TitleA'
}
</script>



<style scoped>
.title-a {
   display: block;
   padding: 10px 0;
   padding-left: 10px;
   margin-left: 10px;
   font-size: 15px;
   font-weight: bold;
}
</style>
