<template>
<div class="loader-a">
   <Loader :size="'20px'" />
</div>
</template>



<script>
import { PulseLoader as Loader } from 'vue-spinner/dist/vue-spinner.min.js'

export default {
   name: 'LoaderA',
   components: {
      Loader
   }
}
</script>



<style>
.loader-a {
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;
}
.loader-a > div > div {
   background-color: var(--loader-color) !important;
}
</style>
