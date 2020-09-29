<template>
   <div
      class="header-nav-ele"
      @click="routePush"
   >
      <slot />
   </div>
</template>



<script>
import { useRouter } from 'vue-router';

export default {
   name: 'HeaderNavEle',
   props: {
      item: Object,
      index: Number
   },
   setup(props) {
      const router = useRouter();

      const routePush = () => {
         router.push({ path: props.item.path });
      }

      return {
         routePush
      };
   }
}
</script>



<style scoped>
.header-nav-ele {
   flex: 1 1 auto;
   display: flex;
   height: var(--header-height);
   align-content: center;
   align-items: center;
   justify-content: center;
   color: white;
}
.header-nav-ele:hover {
   background-color: var(--header-background-color-hover);
   border-top: 5px solid var(--header-background-color);
   border-bottom: 5px solid var(--header-background-color);
   cursor: pointer;
}
</style>
