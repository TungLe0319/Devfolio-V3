<template>
  <div class=" hero-image   flex items-center justify-center border-y-4 w-full border-orange-300  relative  text-center my-24">
    <section class=" z-40 w-full p-10  flex  items-center justify-between  gap-2">
      <div v-for="item in items" class="flex flex-col items-center justify-center text-center space-y-4">
        <div v-motion-pop-visible :delay="300">
          <Icon :name="item.icon" class=" text-6xl text-white" />
        </div>
        <h1 v-motion-slide-visible-top :delay="300" class="text-5xl font-bold text-orange-400">
          {{ item.number }}
        </h1>
        <div v-motion-slide-visible-bottom :delay="300" class="text-white   ">
          <p class="uppercase text-xl ">
            {{ item.title }}
          </p>
        </div>
      </div>
    </section>
    <div
      class="absolute z-40 -top-9 left-1/2 -translate-x-1/2  rounded-full   shadow-xl shadow-black/50 border-8 border-black/30  transition-all duration-150 ">
      <Icon name='logos:teamwork-icon' class="text-amber-400 text-6xl" />
    </div>
    <div class="bg-black/60 absolute w-full h-full"></div>
  </div>
</template>

<script lang="ts" setup>
//generate items array with objects that have icon, number, title 3 of them

const items = [
  {
    icon: 'uil:building',
    number: '100',
    title: 'Projects Completed',
  },
  {
    icon: 'basil:award-outline',
    number: '25',
    title: 'Awards',
  },
  {
    icon: 'carbon:review',
    number: '96%',
    title: 'Positive Reviews',
  },
  {
    icon: 'solar:people-nearby-bold',
    number: '148K',
    title: 'Happy Customers',
  },
]

</script>

<style scoped>
.hero-image {
  height: 50vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1623005470778-6d6e27b75186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;

}
</style>