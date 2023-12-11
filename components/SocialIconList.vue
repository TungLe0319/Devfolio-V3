<template>
  <ul class="col-span-2 flex flex-col justify-start gap-6 lg:col-span-5 lg:justify-end">
    <li v-for="item in items">
      <a @mouseenter="handleCursor" @mouseleave="resetCursor" :href="item.link" class="flex items-center  space-x-4">
        <Icon :name="item.icon" class="text-3xl   transition-all duration-200" />
        <h6 class="font-bold"> {{ item.name }} </h6>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { handleCursor, resetCursor } from '../appstate/appstate';

//generate a list of social media icons with link, name, and icon 
const items =
  [
    {
      name: "Github",
      link: "https://github.com/TungLe0319",
      icon: "akar-icons:github-fill"
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/tung-le0319/"
      , icon: "akar-icons:linkedin-fill"
    },
    {
      name: "Twitter",
      link: "",
      icon: "ri:twitter-x-fill"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/tungusthefungus/?next=%2F",
      icon: "akar-icons:instagram-fill"
    },
    {
      name: "Email",
      link: "mailto:tung.le0319@gmail.com",
      icon: "akar-icons:envelope"
    },



  ]
</script>

<style></style>~/appstate/appstate