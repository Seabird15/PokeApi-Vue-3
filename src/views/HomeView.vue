<script setup>
import TheWelcome from "../components/TheWelcome.vue";

import { useCounterStore } from "@/store/counter.js";

const useCounter = useCounterStore();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
