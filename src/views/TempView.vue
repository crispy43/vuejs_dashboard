<template>
<div class="temp-view">
   <temp-component :param="key" />
</div>
</template>



<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import TempComponent from '../components/TempComponent';

export default {
   name: 'TempView',
   components: {
      TempComponent
   },
   setup() {
      const route = useRoute();
      const key = ref(route.params.key);

      watch(() => route.params,
         (params) => {
            key.value = params.key;
         }
      );

      return {
         key
      };
   }
}
</script>



<style scoped>
.temp-view {
   display: block;
}
</style>
