<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container lg:w-4/6">
    <div class="flex flex-col lg:flex-row lg:w-full py-7 gap-7">
      <div>
        <img class="mx-auto" src="@/assets/pokemon-logo-png-1446.png" />
      </div>
      <div>
        <h1 class="font-bold tracking-widest text-white uppercase lg:text-6xl">
          {{ msg }}
        </h1>
        <h3 class="mx-4 font-bold text-blue-900">
          Información de Pokemon utilizando API Pokemon Axios + Vite + Vue 3
          Composition Api + Tailwind
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
