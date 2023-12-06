<template>
<div class="min-h-screen bg-gray-950  flex flex-wrap ">
  <div class="w-1/3" v-for="(p,index) in projects">
     <Parallax
  :title="p.title"
  :src="p.src"
  :description="p.description"
  :date="p.date"
  :tech="p.tech"
  :link="p.link"
:index="index"

     />
  </div>
</div>
</template>

<script  setup>
import Projects from '../data/Projects.json'
const projects = ref(Projects)
</script>

<style>

</style>