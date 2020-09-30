<template>
<div class="main-header">
   <div>
      <div class="main-header-title">
         <h4>{{ pathNames[0] }}</h4>
      </div>
      <div class="main-header-depth">
         <p>{{ pathNames[0] }}</p>
         <span>{{ symbol }}</span>
         <p>{{ pathNames[1] }}</p>
         <span>{{ symbol }}</span>
         <p>{{ pathNames[2] }}</p>
      </div>
   </div>
</div>
</template>



<script>
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
   name: 'MainHeader',
   setup() {
      const store = useStore();
      const { tree, currentPathIndex } = toRefs(store.state.treeMenu);

      const pathNames = computed(() => {
         const names = [];
         currentPathIndex.value.reduce((acc, pathIndex) => {
            names.push(acc[pathIndex].name);
            return acc[pathIndex].child;
         }, tree.value);
         return names;
      });

      const symbol = '>';

      return {
         pathNames, symbol
      }
   }
}
</script>



<style scoped>
.main-header {
   display: block;
   width: 100%;
}
.main-header > div {
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: space-between;
   border-bottom: 1px solid black;
   margin: 20px;
   padding: 20px 0;
}
.main-header-depth > p {
   display: inline;
}
.main-header-depth > span {
   margin: 0 10px;
}
</style>
