<template>
<div class="revenue-sheet">
   <MainHeader />
   <temp-component :param="param" />
</div>
</template>



<script>
import MainHeader from '../views/MainHeader';
import TempComponent from '../components/TempComponent';

export default {
   name: 'RevenueSheet',
   components: {
      MainHeader,
      TempComponent
   },
   setup() {

      return {
         param: 'RevenueSheet'
      };
   }
}
</script>



<style scoped>
.revenue-sheet {
   display: block;
}
</style>
