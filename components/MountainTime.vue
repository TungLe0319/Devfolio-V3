<template>
  <div class="mt-5">
    <p class="text-2xl">{{ currentTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentTime = ref<string>('');

const fetchTime = async (): Promise<void> => {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/America/Boise');
    const data = await response.json();

    // Extract the time and AM/PM from the API response
    const hours = parseInt(data.datetime.slice(11, 13));
    const minutes = data.datetime.slice(14, 16);
    const seconds = data.datetime.slice(17, 19);
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    const formattedHours = (hours % 12) || 12;

    currentTime.value = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  } catch (error) {
    console.error('Error fetching time:', error);
  }
};

const formattedTime = ref<string>('');

// Fetch the time when the component is mounted
onMounted(() => {
  fetchTime();

  // Update the time every second
  const intervalId = setInterval(fetchTime, 1000);

  onBeforeUnmount(() => {
    // Clear the interval on component unmount
    clearInterval(intervalId);
  });
});
</script>
