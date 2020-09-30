<template>
   <div
      class="header-nav-ele"
      @click="selectMenu"
   >
      {{ menu }}
   </div>
</template>



<script>
import { useStore } from 'vuex';

export default {
   name: 'HeaderNavEle',
   props: {
      index: Number,
      menu: String
   },
   setup(props) {
      const store = useStore();

      const selectMenu = () => {
         store._mutations['treeMenu/setSelected'][0](props.index);
      }

      return {
         selectMenu
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
