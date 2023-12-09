<template>
  <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
    <li v-for="item in items">
     <a :href="item.link">
       <Icon :name="item.icon" class="text-3xl   transition-all duration-200" />
     </a>
    </li>
  
  </ul>
</template>

<script lang="ts" setup>
//generate a list of social media icons with link, name, and icon 
const items = 
[
  {
    name: "Github",
    link: "",
    icon: "akar-icons:github-fill"
  },
  {
    name: "Linkedin",
    link: ""
    , icon: "akar-icons:linkedin-fill"
  },
  {
    name: "Twitter",
    link: "",
    icon: "ri:twitter-x-fill"
  },
  {
    name: "Instagram",
    link: "",
    icon: "akar-icons:instagram-fill"
  },
  {
    name: "Facebook",
    link: "",
    icon: "ic:baseline-facebook"
  },
]
</script>

<style></style>