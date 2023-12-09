
<script lang="ts" setup>

</script>

<template>
  <div class="min-h-screen flex flex-col relative ">
    <div class="bg-zinc-800/40    flex-grow">
    </div>
    <div class="bg-zinc-950  flex-grow ">
    </div>
    <div class="absolute  w-full h-full flex-col flex items-end justify-center space-y-10 ">
      <div v-motion-slide-left :delay="3000" class=" bg-orange-500 w-full   mb-72  ">
        <div  class="text-8xl  abril-fatface  w-1/2  px-2 h-fit ml-5 ">
         Software Developer
        </div>
     
      </div>
      <div class="flex w-full   justify-between">
        <div v-motion-slide-left :delay="3250" class=" ml-10">
          <p class="">Hi, my name is </p>
          <p>  <strong>Tung Le</strong></p>
          <p class="text-gray-500 w-2/3"> I believe a capable developer is someone who perpetually adopts new skills, embraced experimentation, challenges assumptions, and actively solicits feedback to grow.</p>
        </div>
     

             <div v-motion-slide-left :delay="3000" class=" bg-orange-500 w-full   mb-72  flex items-center justify-center space-x-4">
          <div  class="text-8xl  abril-fatface  w-1/2  px-2 h-fit ml-5 ">
          Portfolio
          </div>
          <div v-motion-slide-top :delay="2500" class="  w-1/2 flex items-center justify-center">
           <div class=""></div>
          </div>
        </div>
      </div>
      <div v-motion-slide-right :delay="3500" class="h-0.5 w-1/4 bg-orange-500"></div>
      <div class="flex w-full  justify-between">
        <div v-motion-slide-left :delay="3750" class=" ml-10">
          <p class=" text-gray-500 font-bold">The Collection</p>
          <p class="text-gray-500 font-bold"> 2022-2023</p>
        </div>
        <div v-motion-slide-bottom :delay="3750" class="text-gray-500  text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi dolorem consectetur illo, sunt
          odit.
        </div>
      </div>
    </div>
    <div class="absolute h-full w-1 bg-black/20 left-4 z-30" />
    <div v-motion-slide-left :delay="3000" class="absolute w-[18rem] h-3 bg-white shadow-md top-1/2 left-0 " />
    <div v-motion-slide-left :delay="3200" class="absolute  w-[16rem] h-3 bg-white shadow-md z-40  top-[51.5%] left-0 " />
    <div v-motion-slide-left :delay="3400" class="absolute  w-[14rem] h-3 bg-white shadow-md  top-[53%] left-0 " />
    <div v-motion-slide-left :delay="3600" class="absolute  w-[12rem] h-3 bg-white shadow-md z-40  top-[54.5%] left-0 " />
    <div v-motion-slide-left :delay="3800" class="absolute  w-[10rem] h-3 bg-white shadow-md  top-[56%] left-0 " />
    <div v-motion-slide-left :delay="4000" class="absolute  w-[8rem] h-3 bg-white shadow-md   top-[56%] left-0 " />
    <div v-motion-slide-left :delay="4200"
      class="absolute  w-[6rem] h-3 bg-white shadow-md  z-40   top-[57.5%] left-0 " />
    <div v-motion-slide-left :delay="4400" class="absolute  w-[4rem] h-3 bg-white shadow-md   top-[59%] left-0 " />
    <div v-motion-slide-left :delay="4600" class="absolute  w-[2rem] h-3 bg-white shadow-md  z-40 top-[60.5%] left-0 " />
    <div v-motion-slide-left :delay="4800" class="absolute  w-[1rem] h-3 bg-white shadow-md z-40  top-[62%] left-0 " />
    <div class="absolute h-8 bg-orange-500 top-[82.25%] w-[2rem]"></div>
  </div>
</template>


<style scoped></style>