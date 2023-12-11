<script   setup>
import { ref, onMounted, onUnmounted } from 'vue';

import appState from '../appState';

const aboutSection = ref(null);
const introSection = ref(null);
const heroSection = ref(null);
const servicesSection = ref(null);
const projectsSection = ref(null);

const contactSection = ref(null);
const test = ref(null)
const isInView = (targetRef) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: .2, // Adjust this threshold based on your needs
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target);
        if (entry.target === projectsSection.value || entry.target === introSection.value) {

          appState.sectionIsDark = true;
        } else if (entry.target === contactSection.value) {

          appState.sectionIsDark = false
        }
        else {

          appState.sectionIsDark = false
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(targetRef.value);

  // Cleanup the observer on component unmount
  onUnmounted(() => {
    observer.disconnect();
  });
};

onMounted(() => {
  isInView(aboutSection);
  isInView(introSection);
  isInView(heroSection);
  isInView(projectsSection);
  isInView(contactSection);
  isInView(servicesSection);

});

</script>

<template>
  <div class="flex flex-col  transition-colors duration-1000   "
    :class="appState.sectionIsDark ? 'bg-[#0e0e0c] text-[#d1cdc7]' : ' bg-[#fafaf9] text-[#262626]'">
    <div ref="heroSection">
      <HeroVersionTwo />
    </div>
    <section ref="introSection" v-motion :initial="{
      opacity: 0,
      y: 100,
    }" :visible="{
  opacity: 1,
  y: 0,
  transition: {
    duration: 1000,
    delay: 100,
  },
}" class="min-h-screen">
      <div class="  p-20 my-40">
        <h2 class=" text-6xl lg:text-8xl font-semibold  leading-[7.5rem]  ">I 🖌️doodle🎨 my way across code creating fun
          and interactive
          experiences that inspire and connect with people through development and design.</h2>
      </div>
    </section>
    <div ref="aboutSection" id="about">
      <About />
    </div>
    <div ref="servicesSection" id="services">
      <Experience />
    </div>
    <div ref="projectsSection" id="projects">
      <Projects />
    </div>
    <div ref="contactSection" id="contact">
      <Contact />
    </div>
  </div>
</template>


<style scoped></style>
