<template>
<div class="side-nav-item">
   <p @click="routerPush">{{ subMenu }}</p>
</div>
</template>



<script>
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
   name: 'SideNavItem',
   props: {
      pIndex: Number,
      index: Number,
      subMenu: String
   },
   setup(props) {
      const router = useRouter();
      const store = useStore();
      const { tree, selected } = toRefs(store.state.treeMenu);

      const pathDepth01 = tree.value[selected.value].path;
      const pathDepth02 = tree.value[selected.value].child[props.pIndex].path;
      const pathDepth03 = tree.value[selected.value].child[props.pIndex].child[props.index].path;
      const path = pathDepth01 + pathDepth02 + pathDepth03;

      const routerPush = () => {
         router.push({ path });
      }

      return {
         routerPush
      };
   }
}
</script>



<style scoped>
.side-nav-item {
   display: block;
   cursor: pointer;
}
</style>
