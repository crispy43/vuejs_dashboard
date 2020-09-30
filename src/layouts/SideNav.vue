<template>
<div class="side-nav">
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
</template>



<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import SideNavContainer from '../components/navigations/SideNavContainer';

export default {
   name: 'SideNav',
   components: {
      SideNavContainer
   },
   setup() {
      const store = useStore();
      const treeMenu = reactive(store.state.treeMenu);

      return {
         treeMenu
      };
   }
}
</script>



<style scoped>
.side-nav {
   flex: 0 1 var(--side-nav-width);
   padding-top: var(--header-height);
   background-color: var(--side-nav-background-color);
}
</style>
