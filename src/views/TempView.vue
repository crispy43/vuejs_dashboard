<template>
<div class="temp-view">
   <MainHeader />
   <temp-component :param="param" />
</div>
</template>



<script>
import MainHeader from '../components/MainHeader';
import TempComponent from '../components/TempComponent';

export default {
   name: 'TempView',
   components: {
      MainHeader,
      TempComponent
   },
   setup() {

      return {
         param: 'Template'
      };
   }
}
</script>



<style scoped>
.temp-view {
   display: block;
}
</style>
