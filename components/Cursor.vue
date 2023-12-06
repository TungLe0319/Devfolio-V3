<template>
  <div class="cursor" :style="{ left: `${position.x}px`, top: `${position.y}px` }"></div>
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

<style scoped>
.cursor {
  position: fixed;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
 transition: transform 1s ease;
  mix-blend-mode: difference;
}

</style>
