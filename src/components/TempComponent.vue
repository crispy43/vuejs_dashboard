<template>
<div class="temp-component">
   <h1>{{ param }}</h1>
</div>
</template>



<script>
export default {
   name: 'TempComponent',
   props: {
      param: String
   }
}
</script>



<style scoped>
.temp-component {
   display: block;
}
</style>
