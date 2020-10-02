<template>
<div class="side-nav-container">
   <div
      class="side-nav-container-name" 
      @click="drop"
   >
      <FontAwesomeIcon icon="folder-open" v-if="isShowItems" />
      <FontAwesomeIcon icon="folder" v-else />
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

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faFolder, faFolderOpen);

export default {
   name: 'SideNavContainer',
   components: {
      SideNavItem,
      FontAwesomeIcon
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
   width: var(--side-nav-width);
}
.side-nav-container-name {
   display: flex;
   align-content: center;
   align-items: center;
   width: var(--side-nav-width);
   height: 40px;
   cursor: pointer;
}
.side-nav-container-name > svg {
   flex: 0 1 50px;
   font-size: 13px;
}
.side-nav-container-name > h3 {
   flex: 1 1 auto;
   font-size: 15px;
}
</style>
