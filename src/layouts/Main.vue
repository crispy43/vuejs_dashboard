<template>
<div :class="['main', { 'is-authenticated': isAuthenticated }]">
   <router-view />
</div>
</template>



<script>
import { toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
   name: 'Main',
   props: {
      headerHeight: String
   },
   setup() {
      const store = useStore();
      const { isAuthenticated } = toRefs(store.state);

      return {
         isAuthenticated
      };
   }
}
</script>



<style scoped>
.main {
   flex: 1 1 auto;
   background-color: white;
   overflow-y: auto;
}
.is-authenticated {
   padding: calc(var(--header-height) + var(--main-padding-top)) var(--main-padding-left-right) 0;
}
</style>
