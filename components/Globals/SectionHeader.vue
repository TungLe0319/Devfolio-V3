<script lang="ts" setup>
defineProps(['header'])
</script>

<template>
  <div v-motion :initial="{
    opacity: 0,
    y: 100,
  }" :visible="{
  opacity: 1,
  y: 0,
  transition: {

    duration: 1000,
    delay: 100,
  },
}" class="    flex items-center justify-center space-x-4 my-20">
    <h2 class="text-[9rem]  text-[#8c8c73]  font-bold   px-2  ml-5 ">
      {{ header }}
    </h2>
  </div>
</template>

<style>
/* Add your styles here */
</style>
