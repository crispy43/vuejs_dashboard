<template>
<div class="temp-view">
   <temp-component :param="param" />
</div>
</template>



<script>
import TempComponent from '../components/TempComponent';

export default {
   name: 'TempView',
   components: {
      TempComponent
   },
   data() {
      return {
         param: 'Template'
      };
   }
}
</script>



<style>
.temp-view {
   display: block;
}
</style>
