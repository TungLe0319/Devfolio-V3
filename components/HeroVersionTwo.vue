<template>
  <div class="min-h-screen flex items-center justify-center relative">


    <!-- <p v-motion :initial="{
      y: 100,
      opacity: 0
    }" :enter="{
  y: 0,
  opacity: 1,
  transition: {
    duration: 1000,
    delay: 1500,
  },
}" class="absolute lg:top-44 font-bold text-4xl noto-sans">Hello 👋🏼, My name is</p> -->

    <div class="absolute w-full h-full flex flex-col items-center justify-center ">
   



   <div class="">
       <p v-motion :initial="{
      y: 100,
      opacity: 0
    }" :enter="{
  y: 0,
  opacity: 1,
  transition: {
    duration: 1000,
    delay: 1500,
  },
}" class="absolute lg:top-44 font-bold text-4xl noto-sans">Hello 👋🏼, My name is</p>
       <h1 v-motion :initial="{
         y: 200,
         opacity: 0
       }" :enter="{
  y: 0,
  opacity: 1,
  transition: {
    duration: 1000,
    delay: 2000,
  },
}" class="text-black text-[32rem] font-bold text-shadow3d">
          Tung
        </h1>
   </div>
    </div>
    <div class="absolute w-full h-full flex flex-col items-center justify-center">

      <h1 v-motion :initial="{
        y: 200,
        opacity: 0
      }" :enter="{
  y: 0,
  opacity: 1,
  transition: {
    duration: 1000,
    delay: 2000,
  },
}" class="text-background-clip text-[32rem] font-bold drop-shadow-lg ">
         Tung
      </h1>
    </div>
    <div v-motion :initial="{
      y: 200,
      opacity: 0
    }" :enter="{
  y: 0,
  opacity: 1,
  transition: {
    duration: 1000,
    delay: 2250,
  },
}"  class="absolute bottom-0 right-4 flex flex-col items-center justify-center ">
     

   <iframe src="https://lottie.host/embed/37ce6044-afd3-4561-83ce-80f833add0b8/ChjCkvdbgZ.json"></iframe>
    
    </div>
  </div>
  
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.text-background-clip {
  font-weight: bold;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url('https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
}



.text-shadow3d{
 text-shadow: 0 1px 0 #ccc,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
}








</style>