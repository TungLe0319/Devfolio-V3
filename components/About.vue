<template>
  <div class=" min-h-screen items-center justify-center flex flex-col">
    <SectionHeader header="< About />" />
    <div class=" flex ">
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
        <h3 >A small intro...</h3>
        <p >I am an full-stack developer based in Idaho, United States. 🥔</p>
        <p >I specialize in frontend development and UI/UX design. 🖼️</p>
        <p >When I am not coding or designing, I enjoy doodling on procreate, spoiling my animals and
          playing the occasional video game. 🎮 🐾</p>
        <div class="flex space-x-2">
          <img src="/Coco.png" alt="dog" class="rounded-md    w-44 h-44 object-cover">
          <img src="/Goblin.png" alt="cat" class="rounded-md    w-44 h-44 object-cover">
        </div>
        <p >When I am coding or doing art, these playlist get me into a good vibe. 🎵</p>
        <div class="2xl:flex  w-full  2xl:space-x-4 space-y-4 2xl:space-y-0 2xl:px-4">
          <div class="2xl:w-1/3">
            <iframe style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/4ANPW38qMEYQ3Z1mVLrtmm?utm_source=generator&theme=0"
              width="100%" height="152" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div class="2xl:w-1/3">
            <iframe style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator" width="100%"
              height="152" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div class="2xl:w-1/3">
            <iframe style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/6JRwcLfqWXXzoyt5FAoQ1E?utm_source=generator&theme=0"
              width="100%" height="152" frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
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
}" class="  flex flex-col  w-1/2  items-center justify-center sticky top-20 h-full  ">
        <img src="https://tung.devfoliov2.devopportunities.dev/TungPortrait.jpg" alt=""
          class="shadow-2xl rounded-md  h-[85vh] object-cover">
      </div>
    </div>
  </div>
  <div class="p-5 relative">
    <div class=" absolute top-24">
     <div class="flex space-x-4 items-center ">
       <h3 >Some artwork I've done on procreate...</h3>
        <img
          src="https://imgs.search.brave.com/T9-wU5z4s9sEY-YmdtMh-Xs40z1ZfMgyV-pgUlKAihQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aWFtYWcuY28vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMTAv/UHJvY3JlYXRlLUlj/b24ucG5n"
          alt=" procreate icon" class="w-16 h-16   shadow-lg rounded-[1rem]">
     </div>
     <div class="flex space-x-4 items-center ">
       <p >Check out more on my Instagram</p>
       <Icon name="skill-icons:instagram" class="w-16 h-16  shadow-lg rounded-[1rem]" />
     </div>
    </div>
    <section class="mt-5 flex    items-center justify-between ">
      <ArtworkItem src="/CosmicWolf.png" />
      <ArtworkItem src="/Mandala1.png" />
      <ArtworkItem src="/Newt.png" />
      <ArtworkItem src="/Mandala2.png" />
      <ArtworkItem src="/Turtle.png" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';




</script>

<style scoped>
p {
  @apply text-3xl;

}
</style>