<template>
  <div>
    <SectionHeader header="< Experience />" />
    <section class="flex   ">
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
}" class="lg:w-1/3 p-10  sticky  top-10 h-full w-full">
        <h3 class="font-bold text-5xl mb-4">
          my experience.
        </h3>
        <p >
          These are where I've gained my recent experience of being in the tech world and software development.
        </p>
      </div>
      <div class="lg:w-2/3 p-3  ">
        <TimeLine />
      </div>
    </section>
    <section class="flex  my-44 ">
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
}" class="lg:w-1/3 p-10  my-4  sticky top-24 h-full">
        <h3 class="mb-4">
          my digital tool box.
        </h3>
        <p >
          These are my go to tech stack to make any projects happen. I am always eager of learning more about my current
          stack, and new technologies that could expand my horizons.
        </p>
      </div>
      <div class="lg:w-2/3 flex flex-wrap gap-2 my-10">
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
}"   v-for="skill in skills" class="w-24 h-24 shadow-xl rounded-xl">
          <v-tooltip :text="skill.title">
            <template v-slot:activator="{ props }">
              <Icon v-bind="props" :name="skill.src"  class="w-24 h-24 shadow-none" />
            </template>
          </v-tooltip>
        </div>
      </div>
    </section>




    <!-- <section class="flex ">
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
}" class="lg:w-1/3 p-10  ">
          <h3 class="mb-4">
            my current stack.
          </h3>
          <p >
            This is  my go to tech stack to make most projects. I love the custom
          </p>
        </div>
        <div class="lg:w-2/3 flex flex-wrap gap-2  my-10">
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
}"  v-for="stack in currentStack" class="w-24 h-24 shadow-xl rounded-xl ">
            <v-tooltip :text="stack.title">
              <template v-slot:activator="{ props }">
                <Icon v-bind="props" :name="stack.src"  class="w-24 h-24 shadow-none" />
              </template>
            </v-tooltip>
          </div>
        </div>
      </section> -->

  </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';
import Skills from '../data/SkillIcons.json'
const skills = ref(Skills)

const currentStack = [
 
  {
    "title": "TypeScript",
    "src": "skill-icons:typescript"
  },
  {
    "title": "Nuxt.js",
    "src": "skill-icons:nuxtjs-dark"
  },
  {
    "title": "Vuetify",
    "src": "logos:vuetifyjs"
  },

  {
    "title": "TailWind CSS",
    "src": "skill-icons:tailwindcss-dark"
  },

  {
    "title": "PostgreSQL",
    "src": "skill-icons:postgresql-dark"
  },
  {
    "title": "Prisma.io",
    "src": "skill-icons:prisma"
  },

]

</script>

<style>
.test {
  position: sticky;
  top: 28px;
  height: 100%;
  width: 100%;

  z-index: 1;

}
</style>