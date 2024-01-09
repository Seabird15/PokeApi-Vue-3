<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container w-4/6">
    <div class="w-full py-7">
      <h1 class="text-blue-500 text-3xl uppercase font-bold tracking-wider">
        {{ msg }}
      </h1>
      <h3>
        Información de Pokemon utilizando API Pokemon Axios + Vite + Vue 3
        Composition Api + Tailwind
      </h3>
    </div>
  </div>
</template>

<style scoped>
</style>
