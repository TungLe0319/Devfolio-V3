<template>
  <div>
    <SectionHeader header="< Experience />" />
    <div class="flex   ">
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
}" class="lg:w-1/3 p-10  sticky top-24 h-full w-full">
        <h3 class="font-bold text-5xl mb-4">
          my experience.
        </h3>
        <p class=" text-lg">
          These are my go to tech stack to make any projects happen. I am always eager of learning more about my current
          stack, and new technologies that could expand my horizons.
        </p>
      </div>
      <div class="lg:w-2/3 p-3  ">
        <TimeLine />
      </div>
    </div>
    <div class="flex ">
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
}" class="lg:w-1/3 p-10  sticky top-24 h-full">
        <h3 class="font-bold text-5xl mb-4">
          my digital tool box.
        </h3>
        <p class=" text-lg">
          These are my go to tech stack to make any projects happen. I am always eager of learning more about my current
          stack, and new technologies that could expand my horizons.
        </p>
      </div>
      <div class="lg:w-2/3 grid grid-cols-7 gap-4 my-10">
        <div v-for="skill in skills" class="w-24 h-24">
          <v-tooltip :text="skill.title">
            <template v-slot:activator="{ props }">
              <Icon v-bind="props" v-motion :initial="{
                opacity: 0,
                y: 100,
              }" :visible="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 1000,
    delay: 100,
  },
}" :name="skill.src"  class="w-24 h-24 shadow-none" />
            </template>
          </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SectionHeader from './Globals/SectionHeader.vue';
import Skills from '../data/SkillIcons.json'
const skills = ref(Skills)


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