<template>
  <div class=" min-h-screen items-center justify-center flex flex-col">

    <SectionHeader header="< About />" />

  <div  class=" flex ">
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
}" class="   space-y-10  p-10 w-1/2 sticky top-12 h-full">
      <h3 class="text-5xl font-bold">A small intro...</h3>
      <p>I am an independent full-stack developer based in Idaho, USA.</p>
      <p>I specialize in frontend development and UI/UX design. 😎</p>
      <p>When I am not coding or designing, I enjoy doodling on procreate, loving on my animals (2 cats, 1 dog), and playing the occasional tilted games. 📸</p>

      
      <div class="flex space-x-2">
      <img src="/Coco.png" alt="dog" class="rounded-md w-24 h-24 object-cover">
      <img src="/Goblin.png" alt="dog" class="rounded-md w-24 h-24 object-cover">
     
      </div>
    </div>
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
}" class="  flex flex-col  w-1/2  items-center justify-center  mb-10 lg:mb-0">
      <img src="https://tung.devfoliov2.devopportunities.dev/TungPortrait.jpg" alt="" class="shadow-xl rounded-md w-2/3 object-cover">
      <div class="my-10 text-center">
        <SocialIconList />
      </div>
    </div>
  </div>

<div class="flex  w-full space-x-4 px-4">
  <div class="w-1/3">
   <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4ANPW38qMEYQ3Z1mVLrtmm?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  <div class="w-1/3">
     <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator" width="100%" height="152" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  <div class="w-1/3">
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6JRwcLfqWXXzoyt5FAoQ1E?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
   
 
  
</div>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';




</script>

<style scoped>
p{
  @apply text-3xl;
 
}
</style>