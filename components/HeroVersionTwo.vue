<template>
  <div class="min-h-screen flex items-center justify-center relative">


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

    <div class="absolute w-full h-full flex flex-col items-center justify-center ">
   



      <h1 v-motion :initial="{
        y: 100,
        opacity: 0
      }" :enter="{
  y: 0,
  opacity: 1,
  transition: {
    duration: 1000,
    delay: 1500,
  },
}" class="text-black text-[32rem] font-bold">
        Tung
      </h1>
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
}" class="text-background-clip text-[32rem] font-bold drop-shadow-lg ml-4">
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
    delay: 2000,
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



.scroll-downs {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  
  width :34px;
  height: 55px;
}
.mousey {
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #000000;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #000000;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}




</style>