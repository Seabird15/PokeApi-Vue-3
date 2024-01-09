<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
//Poder consumir los params en el script
const route = useRoute();
//Empujar al usuario directamente en el script
const router = useRouter();

const poke = ref({});

const back = () => {
  router.push("/pokemons");
};

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    poke.value = data;
  } catch (error) {
    console.log(error);
  }
};
getData();
</script>

<template>
  <div>
    <div>
      <h1>Poke Name: {{ $route.params.name }}</h1>
    </div>
    <div>
      <img :src="poke.sprites.front_default" alt="" />
    </div>
  </div>
  <button @click="back">Volver a la lista</button>
</template>