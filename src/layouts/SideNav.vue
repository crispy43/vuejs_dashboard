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
   z-index: 10;
   padding-top: var(--header-height);
   background-color: var(--side-nav-background-color);
}
.side-nav > div {
   margin-top: 10px;
}
.side-nav-on {
   flex: 0 0 var(--side-nav-width);
   animation-name: nav-on;
   animation-duration: var(--slide-time);
}
.side-nav-off {
   flex: 0 0 var(--side-nav-min-width);
   animation-name: nav-off;
   animation-duration: var(--slide-time);
   animation-timing-function: ease-in-out;
}
.side-nav-on > *, .side-nav-off > * {
   animation-name: nav-items;
   animation-duration: var(--slide-time);
   animation-timing-function: ease-in-out;
}
.side-nav-bottom {
   display: flex;
   width: var(--side-nav-min-width);
   align-items: center;
   justify-content: center;
   position: fixed;
   bottom: 60px;
}
.side-nav-bottom svg {
   position: absolute;
   font-size: var(--side-nav-items-icon-toggle-size);
   color: var(--side-nav-items-icon-toggle-color);
   cursor: pointer;
}
@keyframes nav-on {
   from {
      flex: 0 0 var(--side-nav-min-width);
   }
   to {
      flex: 0 0 var(--side-nav-width);
   }
}
@keyframes nav-off {
   from {
      flex: 0 0 var(--side-nav-width);
   }
   to {
      flex: 0 0 var(--side-nav-min-width);
   }
}
@keyframes nav-items {
   from {
      opacity: 0;
   }
   to {
      opacity: 0;
   }
}
</style>
