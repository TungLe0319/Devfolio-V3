<script setup >
import { defineProps, ref, computed, reactive } from 'vue';
import { useParallax } from '@vueuse/core';

const target = ref(null);
const parallax = reactive(useParallax(target));

const layerBase = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',

};

const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${parallax.roll * 10}px) scale(1.33)`,
}));

const containerStyle = {
  margin: '3em auto',
  perspective: '1000px',

};

const cardStyle = computed(() => ({
  height: '12rem',
  width: '20rem',

  transition: '.3s ease-out all',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
}));

const props = defineProps({
  title: String,
  src: String,
  description: String,
  date: String,
  tech: Array,
  link: String,
  index: Number,
});

</script>

<template>
 
    <div ref="target" class="flex flex-col justify-center min-h-[500px] transition-all duration-300 ease-out">
      <div :style="containerStyle"
        class=" group">
        <div :style="cardStyle" class="">
            <a :href="link" target="_blank" class="">
            <img :style="layer0" :src="src" alt=""
              class="w-full object-cover hover:shadow-2xl hover:shadow-gray-800 transition-all duration-300   " />
            <div
              class="text-white font-bold text-3xl absolute top-1/2 -left-1/3 transition-opacity duration-300   w-1/2   ">
              <div class=" oswald  ">
                {{ title }}
              </div>
              <hr class="border-2 my-4" />
              <div class="text-gray-500">
                0{{ index + 1 }}
              </div>
              <div class=" text-gray-500 group-hover:text-teal-300 group-hover:translate-x-12 transition-all duration-200">
                <Icon name="material-symbols:arrow-right-alt-rounded" />
              </div>
            </div>


            <div class="absolute   -right-28 text-white flex flex-col h-full">
            <div v-for="t in tech">
            <!-- <img :src="t.src" alt="" class="w-10 my-2"> -->

            <v-tooltip :text="t.title"  content-class="bg-info">
      <template v-slot:activator="{ props }">
     
          <img v-bind="props" :src="t.src" alt="" class="w-10 my-2 ">
      </template>
    </v-tooltip>
            </div>
            </div>
          </a>
          </div>
      </div>
    </div>

</template>