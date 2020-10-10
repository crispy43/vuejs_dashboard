<template>
<td :style="{ width: cellData.width }">
   <input
      v-if="cellData.tag === 'input' && cellData.type === 'checkbox'"
      :type="cellData.type"
      :checked="reactiveValue"
      @change="onChange"
   />
   <input
      v-else-if="cellData.tag === 'input' && cellData.type === 'text'"
      :type="cellData.type"
      :value="reactiveValue"
      @input="onChange"
   />
   <p v-else>{{ (!cellData.filter) ? cellData.value : filtered }}</p>
</td>
</template>



<script>
import { ref, computed } from 'vue';
import filters from '../../../common/filters';

export default {
   name: 'TableCellA',
   props: {
      cellData: {
         type: [Object, String],
         required: true
      }
   },
   setup(props, { emit }) {
      let reactiveValue, onChange;
      switch (props.cellData.tag) {

         case 'input':
            switch (props.cellData.type) {
               case 'checkbox':
                  reactiveValue = (typeof props.cellData === 'object')
                     ? ref((props.cellData.value))
                     : ref((props.cellData));
                  onChange = (e) => {
                     reactiveValue.value = e.target.checked;
                     emit('row-select', e.target.checked);
                  }
                  break;

               default:
                  reactiveValue = (typeof props.cellData === 'object')
                     ? ref((props.cellData.value))
                     : ref((props.cellData));
                  onChange = (e) => {
                     reactiveValue.value = e.target.value;
                  }
                  break;
            }
            break;

         default:
            reactiveValue = (typeof props.cellData === 'object')
               ? ref((props.cellData.value))
               : ref((props.cellData));
            break;
      }

      const filtered = computed(() => {
         if (props.cellData.filter) {
            const [funcName, param] = props.cellData.filter.split('/');
            return filters[funcName](reactiveValue.value, param);
         }
      });

      return {
         reactiveValue, filtered, onChange
      };
   }
}
</script>



<style scoped>
</style>
