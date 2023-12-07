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




const showOverlay = ref(false);
const link = 'https://example.com'; // Replace with your actual link







const startAnimation = () => {
  showOverlay.value = true;

  setTimeout(() => {
    showOverlay.value = false;
    // window.location.href = link;
  }, 3000);
};
</script>

<template>
 
    <div ref="target" class="flex flex-col justify-center min-h-[500px] transition-all duration-300 ease-out   ">
      <div :style="containerStyle"
        class=" group">
        <div v-motion-slide-visible-top :delay="200"  :style="cardStyle" class="">
            <button  @click="startAnimation" target="_blank" class="">
            <img  :style="layer0" :src="src" alt=""
              class="   rounded-md
               object-cover hover:shadow-2xl hover:shadow-gray-800  brightness-75     " />
            <div v-motion-slide-visible-left :delay="600"
              class="text-white font-bold text-3xl absolute top-1/2 -left-1/3    w-1/2   ">
              <div class=" oswald  text-2xl ">
                {{ title }}
              </div>
              <hr class="border-2 my-4" />
              <div class="flex space-x-4">
               <div class=" bg-red-900">

               </div>
                   <div class="text-gray-500">
                  0{{ index + 1 }}
                </div>
              </div>
            
              <div class=" text-gray-500 group-hover:text-teal-300 group-hover:translate-x-12 transition-all duration-200">
                <Icon name="material-symbols:arrow-right-alt-rounded" />
              </div>
            </div>


            <div v-motion-slide-visible-right :delay="600" class="absolute   -right-28 text-white flex flex-col h-full">
            <div v-for="t in tech">
            <!-- <img :src="t.src" alt="" class="w-10 my-2"> -->

            <v-tooltip :text="t.title"  content-class="bg-info">
      <template v-slot:activator="{ props }">
     
          <img v-bind="props" :src="t.src" alt="" class="w-10 my-2 shadow-none ">
      </template>
    </v-tooltip>
            </div>
            </div>

             <div  v-if="showOverlay" class="overlay"></div>

            
          </button>
          </div>
      </div>
    </div>

</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 1000px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: white;
  transform: translateX(-100%);
  transition: transform 3s ease;
}


.custom-tooltip {
  height: 100px;
  width: 200px; /* Adjust the width as needed */
  background-color: white;
  color: black;
  padding: 10px; /* Add padding as needed */
  border: 1px solid #ccc; /* Add border as needed */
  border-radius: 8px; /* Add border-radius as needed */
}
</style>