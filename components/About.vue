<template>

    <div class=" flex flex-col items-center justify-center">
       <v-chip
        class="ma-2"
        color="primary"
        variant="outlined"
        size="x-large"
      >
      <v-icon start icon="mdi-account-outline"></v-icon>
      About
      </v-chip>
        <div v-motion-slide-visible-top class=" text-5xl text-center  font-bold my-10">
        About 
        </div>
        <hr v-motion-slide-visible-bottom class="  w-1/6  h-2 border-orange-400">
    </div>

   <div class=" flex w-full flex-col items-center justify-center  p-10 lg:flex-row ">
      <div class="flex flex-col items-center justify-center lg:w-1/2 lg:pl-10">
          <SectionHeader header="Hi There!" title="Digital Doodler" content="I'm a software developer based in the Bay Area, California. I have a passion for creating software that is both intuitive and efficient. I am currently a student at San Jose State University, pursuing a B.S. in Computer Science. I am also a self-taught artist and enjoy creating digital art in my free time." />
         
          <div class="mt-3 space-y-8">
            <div v-motion-slide-visible-left  class="flex">
              <div class="mx-3 h-fit">
                <Icon name="fluent:person-support-16-filled" class="text-orange-400 text-5xl" />
              </div>
              <div class="lg:w-3/4">
                <div>
                  <h1 class=" text-xl font-bold lg:text-2xl">
                    Responsive Assistance
                  </h1>
               <p class="text-sm lg:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas nemo corrupti esse, eveniet quos dignissimos,
                      accusantium soluta, commodi quae nihil cum tempora omnis.
                    </p>
                </div>
              </div>
            </div>
            <div v-motion-slide-visible-left  class="flex">
              <div class="mx-3 h-fit">
                <Icon name="ph:certificate-duotone"  class="text-orange-400 text-5xl" />
              </div>
              <div class="lg:w-3/4">
                <div>
                  <h1 class=" text-xl font-bold lg:text-2xl">
                    Proven Quality
                  </h1>
                  <p class="text-sm lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas nemo corrupti esse, eveniet quos dignissimos,
                    accusantium soluta, commodi quae nihil cum tempora omnis.
                  </p>
                </div>
              </div>
            </div>
              <div v-motion-slide-visible-left  class="flex">
                <div class="mx-3 h-fit">
                  <Icon name="fluent:people-team-20-filled"  class="text-orange-400 text-5xl" />
                </div>
                <div class="lg:w-3/4">
                  <div>
                    <h1 class=" text-xl font-bold lg:text-2xl">
                      Proven Quality
                    </h1>
                    <p class="text-sm lg:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas nemo corrupti esse, eveniet quos dignissimos,
                      accusantium soluta, commodi quae nihil cum tempora omnis.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      <div v-motion-slide-visible-right class="flex flex-col w-full items-center justify-center lg:w-1/2 mb-10 lg:mb-0">
       <img
              src="https://tung.devfoliov2.devopportunities.dev/TungPortrait.jpg"
              alt="" class="shadow-xl aspect-[16/22] w-2/5 object-cover">

         <div class="my-10 text-center">
          <div class=" my-5">Follow us on other social media.</div>
           <SocialIconList/>
         </div>
      </div>
    
    </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';




</script>

<style>

</style>