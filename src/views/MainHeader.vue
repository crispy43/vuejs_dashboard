<template>
<div class="main-header">
   <div>
      <div class="main-header-title">
         <h4>{{ pathNames[2].name }}</h4>
      </div>
      <div class="main-header-depth">
         <div
            class="main-header-depth-items"
            v-for="(item, index) in pathNames"
            :key="index"
            :index="index"
            :item="item"
         >
            <p>{{ item.name }}</p>
            <span v-if="!item.isLast">{{ symbol }}</span>
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
      const { currentKeys, keyMap } = toRefs(store.state.treeMenu);

      const pathNames = computed(() => {
         const keys = Array.from(currentKeys.value);
         const names = [];
         for (let i = 0; i < keys.length; i++) {
            names.push({
               name: keyMap.value.get(keys[i])[i],
               isLast: (i === keys.length - 1)
            });
         }
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
   justify-content: space-between;
   border-bottom: 1px solid black;
   padding: 20px 0;
   margin-bottom: 15px;
}
.main-header-depth > div {
   display: inline-block;
}
.main-header-depth-items > p {
   display: inline;
}
.main-header-depth-items > span {
   margin: 0 10px;
}
</style>
