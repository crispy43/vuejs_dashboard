<template>
<div
   class="side-nav-item"
   @click="routerPush"
>
   <span />
   <!-- <FontAwesomeIcon icon="chevron-right" /> -->
   <p :class="{ 'side-nav-item-active': isActive }">
      {{ subMenu }}
   </p>
</div>
</template>



<script>
import { toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

// fortawesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(faChevronRight);

export default {
   name: 'SideNavItem',
   components: {
      // FontAwesomeIcon
   },
   props: {
      pIndex: Number,
      index: Number,
      subMenu: String
   },
   setup(props) {
      const router = useRouter();
      const store = useStore();
      const { tree, selected, currentKeys } = toRefs(store.state.treeMenu);

      const keyDepth01 = tree.value[selected.value].key;
      const keyDepth02 = tree.value[selected.value].child[props.pIndex].key;
      const keyDepth03 = tree.value[selected.value].child[props.pIndex].child[props.index].key;
      const name = `${keyDepth01}-${keyDepth02}-${keyDepth03}`;

      const routerPush = () => {
         router.push({ name, params: { key: keyDepth03 } });
      }

      const isActive = computed(() => currentKeys.value.join('-') === name);

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
   width: 100%;
   height: 35px;
   cursor: pointer;
}
.side-nav-item > span {
   height: 35px;    
   width: 3px;
   background: var(--side-nav-items-background-color-active);
   margin: 0 10px 0 25px;
}
.side-nav-item-active {
   background-color: var(--side-nav-items-background-color-active);
   border-radius: 5px;
   color: var(--side-nav-items-color-active);
   font-weight: 700;
}
.side-nav-item > svg {
   flex: 0 1 50px;
   font-size: var(--side-nav-items-icon-size);
   color: var(--side-nav-items-icon-color);
}
.side-nav-item > p {
   flex: 1 1 auto;
   display: flex;
   align-items: center;
   height: 100%;
   font-size: var(--side-nav-items-font-size);
   padding-left: 10px;
   margin-right: 10px;
}
.side-nav-item > p:hover {
   background-color: var(--side-nav-items-background-color-active);
   border-radius: 5px;
   color: var(--side-nav-items-color-active);
}
</style>
