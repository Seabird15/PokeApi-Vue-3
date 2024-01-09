<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const pokemons = ref([]);

const getData = async () => {
  try {
    //Destructurar data
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    pokemons.value = data.results;
    console.log(pokemons);
  } catch (error) {
    console.log(error);
  }
};
getData();
</script>


<template>
  <section>
    <div>
      <h1 class="text-center text-5xl uppercase font-extrabold tracking-widest">
        Pokemons
      </h1>
    </div>
    <div class="grid grid-cols-3 w-2/6 m-auto my-7 text-center">
      <ul v-for="(i, index) in pokemons" :key="index">
        <li
          class="text-2xl uppercase tracking-wider text-gray-600 hover:text-gray-950 hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
        >
          <router-link :to="`/pokemons/${i.name}`">{{ i.name }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>