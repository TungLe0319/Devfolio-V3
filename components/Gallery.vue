<template>
<div class="min-h-screen bg-teal-950  flex flex-wrap ">
  <div class="   md:w-1/2 lg:w-1/3" v-for="(p,index) in projects">
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