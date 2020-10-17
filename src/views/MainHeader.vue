<template>
<div class="main-header">
   <div>
      <div class="main-header-title">
         <h4>{{ pathNames[2] }}</h4>
      </div>
      <div class="main-header-depth">
         <div
            class="main-header-depth-items"
            v-for="(item, index) in pathNames"
            :key="index"
            :index="index"
            :item="item"
         >
            <p>{{ item }}</p>
            <span v-if="index !== pathNames.length - 1">{{ symbol }}</span>
         </div>
      </div>
   </div>
</div>
<router-view />
</template>



<script>
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
   name: 'MainHeader',
   setup() {
      const store = useStore();
      const { currentPath, pathMap } = toRefs(store.state.treeMenu);
      
      const pathNames = computed(() => {
         const findMap = Object.assign({}, pathMap.value.get(currentPath.value));
         return (findMap.printNames) ? JSON.parse(JSON.stringify(findMap.printNames)) : ['', '', ''];
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
   justify-content: space-between;
   border-bottom: 1px solid black;
   padding: 20px 0;
   margin-bottom: 15px;
}
.main-header-depth > div {
   display: inline-block;
}
.main-header-title > h4 {
   font-size: var(--main-header-last-path-font-size);
}
.main-header-depth-items > p {
   display: inline;
   font-size: var(--main-header-all-path-font-size);
}
.main-header-depth-items > span {
   font-size: var(--main-header-all-path-font-size);
   margin: 0 10px;
}
</style>
