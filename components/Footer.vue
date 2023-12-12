
<script setup>


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
<template>
  <div class="w-full  flex items-center justify-center   text-[#262626]">
    <div class="md:w-2/3 w-full px-4  flex flex-col">
      <div class="w-full text-7xl font-bold font-serif">
        <h1 v-motion :initial="{
          opacity: 0,
          y: 100,
        }" :visible="{
  opacity: 1,
  y: 0,
  transition: {

    duration: 1000,
    delay: 100,
  },
}" class="w-full md:w-2/3">I give you my thanks 🙏🏻</h1>
      </div>
      <div class=" mt-5">
        <p v-motion :initial="{
          opacity: 0,
          y: 100,
        }" :visible="{
  opacity: 1,
  y: 0,
  transition: {

    duration: 1000,
    delay: 100,
  },
}" class="w-full md:w-2/3 text-gray-500">I appreciate you taking the time to visit this portfolio piece and hope it
          inspires anyone in anyway. </p>
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
}" class="my-3">
          This portfolio was heavily inspired by
          <a @mouseenter="handleCursor" @mouseleave="resetCursor"  href="https://www.huyng.xyz/" target="_blank">Huy Nguyen.</a>
        </div>
        <div v-motion-slide-visible-right :delay="200" class=" pt-6 md:pt-0 space-x-4 flex items-center  ">
          <v-btn @mouseenter="handleCursor" @mouseleave="resetCursor"  @click="scrollToTop" class="orange-lighten-3" icon=" mdi-arrow-up" size="large"></v-btn>
          <p>Back to the top</p>
        </div>
      </div>
      <div class="flex flex-col">
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
}" class="w-full text-center my-12 text-gray-600">© 2023 Tung Le
          <div class="">
            <p class="text-base">Site developed and designed with ❤️(∩ ⌣̀_⌣́)🔥</p>
          </div>
          <div class="">
            check out my other devfolios:
          </div>
          <div class="flex space-x-4 justify-center text-bold ">
            <a @mouseenter="handleCursor" @mouseleave="resetCursor"  href="https://tung.devopportunities.dev/#/" target="_blank">Version 1</a>
            <a @mouseenter="handleCursor" @mouseleave="resetCursor"  href="https://tung.devfoliov2.devopportunities.dev/" target="_blank">Version 2</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="css" scoped>
a{
  text-decoration: none;
  color: rgb(0, 0, 0);
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.5s;
}

a:before {
  content: "";
  position: absolute;
  bottom: -2px;

  width: 0%;
  height: 4px;
  background-color: rgb(0, 0, 0);

  opacity: 0;
  transition: 0.5s;
}



a:hover:before {
  width: 100%;
  opacity: 1;
  transition: 0.3s;
}


</style>