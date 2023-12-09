<script lang="ts" setup>
defineProps(['header'])
</script>

<template>
  <div v-motion-slide-visible-left class=" bg-orange-500   w-fit flex items-center justify-center space-x-4">
    <div class="text-8xl  abril-fatface   px-2  ml-5 ">
      {{ header }}
    </div>
  </div>
</template>

<style>
/* Add your styles here */
</style>
