<template>
   <div
      :class="['header-nav', { 'header-nav-active': isActive }]"
      @click="selectMenu"
   >
      {{ menu }}
   </div>
</template>



<script>
import { toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { mapMutation } from '../../common/mappers';

export default {
   name: 'HeaderNav',
   props: {
      index: Number,
      menu: String
   },
   setup(props) {
      const store = useStore();

      const selectMenu = () => {
         mapMutation(store, 'setSelected', 'treeMenu')(props.index);
      }

      const { selected } = toRefs(store.state.treeMenu);
      
      const isActive = computed(() => selected.value === props.index);

      return {
         selectMenu, isActive
      };
   }
}
</script>



<style scoped>
.header-nav {
   flex: 1 1 auto;
   display: flex;
   height: var(--header-height);
   align-content: center;
   align-items: center;
   justify-content: center;
   color: var(--header-nav-color);
   font-size: 17px;
   font-weight: bold;
   cursor: pointer;
}
.header-nav:hover {
   background-color: var(--header-background-color-hover);
   border-top: 5px solid var(--header-background-color);
   border-bottom: 5px solid var(--header-background-color);
}
.header-nav-active {
   background-color: var(--header-background-color-hover);
   border-top: 5px solid var(--header-background-color);
   border-bottom: 5px solid var(--header-background-color);
}
</style>
