<template>
<div :class="['side-nav-item', { 'side-nav-item-active': isActive }]">
   <FontAwesomeIcon icon="chevron-right" />
   <p @click="routerPush">{{ subMenu }}</p>
</div>
</template>



<script>
import { toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faChevronRight);

export default {
   name: 'SideNavItem',
   components: {
      FontAwesomeIcon
   },
   props: {
      pIndex: Number,
      index: Number,
      subMenu: String
   },
   setup(props) {
      const router = useRouter();
      const store = useStore();
      const { tree, selected, currentPath } = toRefs(store.state.treeMenu);

      const pathDepth01 = '/' + tree.value[selected.value].key;
      const pathDepth02 = '/' + tree.value[selected.value].child[props.pIndex].key;
      const pathDepth03 = '/' + tree.value[selected.value].child[props.pIndex].child[props.index].key;
      const path = pathDepth01 + pathDepth02 + pathDepth03;

      const routerPush = () => {
         router.push({ path });
      }

      const isActive = computed(() => currentPath.value === path);

      return {
         routerPush,
         isActive
      };
   }
}
</script>



<style scoped>
.side-nav-item {
   display: flex;
   align-content: center;
   align-items: center;
   width: var(--side-nav-width);
   height: 35px;
   cursor: pointer;
}
.side-nav-item-active {
   background-color: var(--side-nav-items-active-background-color);
}
.side-nav-item > svg {
   flex: 0 1 50px;
   font-size: 13px;
}
.side-nav-item > p {
   flex: 1 1 auto;
   font-size: 15px;
}
</style>
