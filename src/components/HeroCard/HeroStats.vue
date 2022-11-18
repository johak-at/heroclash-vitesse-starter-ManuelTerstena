<script setup>
const props = defineProps(['name', 'stats', 'alignment'])
</script>

<template>
  <div :class="alignment">
    <h1>{{ name }}</h1>

  <!-- iteriere mit v-for über die stats -->
  <StatField v-for="(value,key) in stats" :key = "key" :skill="key" :value="value" />
  </div>
</template>

<style scoped> 
 

 .bad{
 background-image: linear-gradient(135deg, #f12711, #f5af19);
 }

 .good{
  background-image: linear-gradient(135deg, #007bb0, #9dc93d);
 }

 .neutral{
  background-image: linear-gradient(135deg, #51f111, #f5af19);
 }
</style>
