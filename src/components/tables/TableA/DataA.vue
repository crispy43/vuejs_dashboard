<template>
<td :style="{ width: data.width }">
   <input
      v-if="data.tag === 'input' && data.type === 'checkbox'"
      :type="data.type"
      :checked="reactiveValue"
      @change="onChange"
   />
   <input
      v-else-if="data.tag === 'input' && data.type === 'text'"
      :type="data.type"
      :value="reactiveValue"
      @input="onChange"
   />
   <p v-else>{{ (!data.filter) ? data.value : filtered }}</p>
</td>
</template>



<script>
import { ref, computed } from 'vue';
import filters from '../../../common/filters';

export default {
   name: 'DataA',
   props: {
      data: {
         type: Object,
         required: true
      }
   },
   setup(props, { emit }) {
      let reactiveValue, onChange;
      switch (props.data.tag) {

         case 'input':
            switch (props.data.type) {
               case 'checkbox':
                  reactiveValue = ref((props.data.value));
                  onChange = (e) => {
                     reactiveValue.value = e.target.checked;
                     emit('row-select', e.target.checked);
                  }
                  break;

               default:
                  reactiveValue = ref(props.data.value);
                  onChange = (e) => {
                     reactiveValue.value = e.target.value;
                  }
                  break;
            }
            break;

         default:
            reactiveValue = ref(props.data.value);
            break;
      }

      const filtered = computed(() => {
         if (props.data.filter) {
            const [funcName, param] = props.data.filter.split('/');
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
