<template>
<div class="side-nav-container">
   <div
      class="side-nav-container-name" 
      @click="drop"
   >
      <h3>{{ subTree.name }}</h3>
   </div>
   <div v-show="isShowItems">
      <SideNavItem
         v-for="(item, cIndex) in subTree.child"
         :key="item.key"
         :pIndex="index"
         :index="cIndex"
         :subMenu="item.name"
      />
   </div>
</div>
</template>



<script>
import { ref } from 'vue';
import SideNavItem from './SideNavItem';

export default {
   name: 'SideNavContainer',
   components: {
      SideNavItem
   },
   props: {
      index: Number,
      subTree: Object
   },
   setup() {
      const isShowItems = ref(true);
      
      const drop = () => {
         isShowItems.value =! isShowItems.value;
      }

      return {
         isShowItems, drop
      };
   }
}
</script>



<style scoped>
.side-nav-container {
   display: block;
}
.side-nav-container-name {
   cursor: pointer;
}
</style>
