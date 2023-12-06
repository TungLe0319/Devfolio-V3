<template>
  <div>
    <div class=" flex flex-col items-center justify-center">
      <div class=" text-5xl text-center  font-bold my-10">
        Our Services
      </div>
      <hr class="  w-1/6  h-2 border-orange-400">
    </div>
    <div class="  grid grid-cols-3 gap-5 lg:p-10 my-10">
      <div v-motion-slide-visible-bottom v-for="item in items"
        class="border border-black/20 p-5 hover:shadow-xl transition-all duration-300">
        <div class="flex gap-4  ">
          <Icon :name="item.icon" size="50px" class="text-orange-400 text-4xl" />
          <div class=" w-3/4">
            <span class="text-2xl  "> {{ item.title }}</span>
            <p class=" my-5 text-gray-500"> {{ item.content }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//generate a list of items that has title icon and content 12 of them  and use random MDI icons 

const items = [
  {
    title: 'PRE-CONSTRUCTION SERVICES',
    icon: 'material-symbols:construction',
    content: 'We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand...'
  },
  {
    title: 'CONSTRUCTION MANAGEMENT',
    icon: 'solar:buildings-2-bold',
    content: 'Construction project management is essential. We are using the most time and iterations efficient life cycles methods for that.'
  },
  {
    title: 'BUILDING INFORMATION MODELING',
    icon: 'solar:home-broken',
    content: 'Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.'
  },
  {
    title: 'CONSTRUCTION SERVICES',
    icon: 'mdi:cog',
    content: 'Our customers love the pace/quality tempo that we show during each of the principal construction processes!'
  },
  {
    title: 'DESIGN-BUILD',
    icon: 'mdi:pencil-ruler',
    content: 'If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter.'
  },
  {
    title: 'COST CONTAINMENT',
    icon: 'fluent-emoji-high-contrast:magic-wand',
    content: 'It is vital for any contractor not to exceed the budget and that is why we pay utmost attention to cost containment.'
  },
  {
    title: 'QUALITY ASSURANCE',
    icon: 'teenyicons:contract-solid',
    content: 'Every project we work on is checked for quality assurance to satisfy the needs of the modern society.'
  },
  {
    title: 'GENERAL CONTRACTING',
    icon: 'fa6-solid:people-carry-box',
    content: 'We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!'
  },
  {
    title: 'EQUIPMENT INSTALLATION',
    icon: 'fluent:people-community-28-filled',
    content: 'Our professional team can install all kinds of equipment in the finished building as a part of post-construction services.'
  },
]

</script>

<style></style>