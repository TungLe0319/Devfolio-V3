<template>

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
}" class="p-20">
     <v-timeline align="start">
        <v-timeline-item


        
          v-for="(exp, i) in experience"
          :key="i"
          :dot-color="exp.color"
        
          fill-dot
        >
          <v-card>
            <v-card-title :class="['text-h6', `bg-${exp.color}`]">
              {{ exp.title  }}
            </v-card-title>
            <v-card-text class="bg-white text--primary">
              <p>{{ exp.description}}</p>
            
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
  
 </div>
</template>

<script lang="ts" setup>
import Experience from '../data/Experience.json'
const experience = ref(Experience)
</script>

<style>

</style>