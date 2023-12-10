<template>
  <div>
    <v-layout class="flex flex-col">
  
        <NavBar />
   
      <slot />
    <Footer/>
    </v-layout>
    <!-- <VuePreloader background-color="#000" color="#ffffff" transition-type="fade-down" :loading-speed="10"
      :transition-speed="1200" @loading-is-over="showAnimation = false" @transition-is-over="transitionIsOver = true">
      <template v-slot="{ percent, color }">
        <transition name="loading-animation" mode="in-out">
          <div v-if="showAnimation" :style="{ color }" class="w-full flex items-center justify-center flex-col">
            <div class="text-8xl dancing-script mb-4">
              Lorem Ipsum's Construction
            </div>
            <div class=" text-4xl text-orange-300">
              {{ percent }}%
            </div>
            <div class=" my-4 w-2/3">
              <v-progress-linear :model-value="percent"></v-progress-linear>
            </div>
          </div>
        </transition>
      </template>
    </VuePreloader> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css'
const showAnimation = ref(true)
const transitionIsOver = ref(false)


import Lenis from '@studio-freight/lenis'

let smoother

function initLenis() {
  smoother = new Lenis({
    duration: 1,
    smooth: true,
    smoothTouch: false
  })

  function raf(time) {
    smoother.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}


onMounted(() => {
  initLenis()
})
</script>

<style scoped></style>