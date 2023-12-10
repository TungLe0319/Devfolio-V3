<template>
  <div class="cursor" :style="{ left: `${position.x}px`, top: `${position.y}px` }">
  </div>
  <div class="ringo text-3xl  " :style="{ left: `${position.x}px`, top: `${position.y}px` }"> <iframe  height="75" src="https://lottie.host/embed/10a300c5-5846-4bb0-a224-404c60cb753a/9Mi4IE9MGs.json"></iframe>  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
z-index: 9999;
  mix-blend-mode: difference;
}

.ringo {
  position: fixed;


  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.05s ease;


}
</style>
