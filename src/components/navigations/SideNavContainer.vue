<template>
<div class="side-nav-container">
   <div
      class="side-nav-container-name" 
      @click="drop"
   >
      <FontAwesomeIcon
         v-if="isShowItems"
         icon="folder-open"
      />
      <FontAwesomeIcon
         v-else
         icon="folder"
      />
      <h3>{{ subTree.name }}</h3>
   </div>
   <div :class="['side-nav-item', isShowItems ? navItemOnClass : navItemOffClass]">
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
         isShowItems, drop,
         navItemOnClass: 'side-nav-item-on',
         navItemOffClass: 'side-nav-item-off'
      };
   }
}
</script>



<style scoped>
.side-nav-container {
   display: block;
   width: 100%;
}
.side-nav-container-name {
   display: flex;
   align-content: center;
   align-items: center;
   width: 100%;
   height: 40px;
   cursor: pointer;
}
.side-nav-container-name > svg {
   flex: 0 1 50px;
   font-size: var(--side-nav-items-icon-size);
   color: var(--side-nav-items-icon-color);
}
.side-nav-container-name > h3 {
   flex: 1 1 auto;
   font-size: var(--side-nav-items-font-size);
}
.side-nav-item {
   max-height: 500px;
   transition: max-height var(--slide-time) ease-in-out;
   overflow: hidden;
}
.side-nav-item-on {
   max-height: 500px;
}
.side-nav-item-off {
   max-height: 0;
}
</style>
