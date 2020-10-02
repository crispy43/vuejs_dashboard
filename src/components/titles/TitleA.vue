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
   padding: 5px 0 5px 10px;
   margin: 5px 0 5px 10px;
   font-size: 15px;
   font-weight: bold;
}
</style>
