<template>
  <div class="cursor  flex items-center justify-center mix-blend-difference  " :class="appState.hoveringLink ? ' ' : ''"
    :style="{ left: `${position.x}px`, top: `${position.y}px`, width: `${appState.cursorWidth}px`, height: `${appState.cursorHeight}px` }">
    <!-- <Icon v-if="appState.hoveringLink" name="mynaui:external-link" class="text-5xl  drop-shadow-lg mix5-blend-difference" /> -->
    <div v-if="appState.hoveringLink" class="w-3 h-3  bg-black  rounded-full"></div>
  </div>
  <div v-if="!appState.hoveringLink" class="ringo text-3xl   "
    :class="appState.sectionIsDark ? 'brightness-200' : ' brightness-0'"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"> <iframe height="75"
      src="https://lottie.host/embed/10a300c5-5846-4bb0-a224-404c60cb753a/9Mi4IE9MGs.json"></iframe> </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { appState } from '../appstate/appstate';

const position = ref({ x: 0, y: 0 });

const updateCursorPosition = (event: MouseEvent) => {
  position.value.x = event.clientX;
  position.value.y = event.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);

});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
});










</script>

<style scoped >
.cursor {
  position: fixed;

  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;

  transition: width 0.3s, height 0.3s;
}

.ringo {
  position: fixed;


  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.05s ease;


}
</style>
~/appstate/appstate