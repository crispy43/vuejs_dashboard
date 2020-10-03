<template>
<div :class="['side-nav', isNavOn ? navOnClass : navOffClass]">
   <div v-if="isNavOn">
      <SideNavContainer
         v-for="
            (item, index) in
            (treeMenu.selected >= 0) ? treeMenu.tree[treeMenu.selected].child : []
         "
         :key="item.key"
         :index="index"
         :subTree="item"
      />
   </div>
   <div
      class="side-nav-bottom"
      @click="navToggle"
   >
      <FontAwesomeIcon
         v-if="isNavOn"
         icon="toggle-on" 
      />
      <FontAwesomeIcon
         v-else
         icon="toggle-off"
      />
   </div>
</div>
</template>



<script>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import SideNavContainer from '../components/navigations/SideNavContainer';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faToggleOn, faToggleOff);

export default {
   name: 'SideNav',
   components: {
      SideNavContainer,
      FontAwesomeIcon
   },
   setup() {
      const store = useStore();
      const treeMenu = reactive(store.state.treeMenu);
      const isNavOn = ref(true);
      const navOnClass = 'side-nav-on';
      const navOffClass = 'side-nav-off';

      const navToggle = () => {
         isNavOn.value =! isNavOn.value;
      }

      return {
         treeMenu, isNavOn, navToggle, navOnClass, navOffClass
      };
   }
}
</script>



<style scoped>
.side-nav {
   padding-top: var(--header-height);
   background-color: var(--side-nav-background-color);
}
.side-nav > div {
   margin-top: 10px;
}
.side-nav-on {
   flex: 0 0 var(--side-nav-width);
}
.side-nav-off {
   flex: 0 0 var(--side-nav-min-width);
}
.side-nav-bottom {
   display: flex;
   width: var(--side-nav-min-width);
   align-items: center;
   justify-content: center;
   position: fixed;
   bottom: 25px;
}
.side-nav-bottom svg {
   font-size: 25px;
   cursor: pointer;
}
</style>
