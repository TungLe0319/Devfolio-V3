<template>
     <div v-motion-slide-visible-bottom class=" bg-orange-500 text-9xl oswald font-bold  ">
      Projects
    </div>
<div class=" relative  flex  flex-wrap p-10 ">
 
  <div class=" w-1/3  3xl:w-1/4  " v-for="(p,index) in projects">
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