<template>
  <div class="container">
     <div v-html="data">
  </div>
   
  </div>
</template>

<script>
export default {
  name: "Rendered",
  props: ['data']
};
</script>
