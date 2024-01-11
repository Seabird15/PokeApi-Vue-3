<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const backHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="container text-center mx-7 my-7 py-7">
    <h1 class="text-4xl">404</h1>
    <h2 class="my-4 text-2xl">Página no encontrada</h2>
    <div>
      <button
        class="p-4 transition-all border-2 border-solid rounded-md hover:bg-blue-500 hover:shadow-lg hover:text-white"
        @click="backHome"
      >
        &lt; Volver al Home
      </button>
    </div>
  </div>
</template>