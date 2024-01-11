<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const pokemons = ref([]);
//Agregar loading crear una variable booleana para rastrear el estado de carga
const loading = ref(true);

const getData = async () => {
  try {
    //Destructurar data
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    //Recorrer el objeto data con un map,  guardar la url en response y retornar objeto con el nombre y la imagen
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          image: response.data.sprites.front_default,
        };
      })
    );
    pokemons.value = pokemonDetails;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

getData();
</script>


<template>
  <section>
    <div>
      <h1
        class="my-4 text-2xl font-extrabold tracking-widest text-center uppercase md:text-5xl"
      >
        Pokemons
      </h1>
    </div>
    <div class="flex justify-center">
      <div>
        <div v-show="loading">
          <div>Loading...</div>
        </div>

        <div
          v-show="!loading"
          class="grid grid-cols-2 gap-2 m-auto mx-2 overflow-hidden text-left md:gap-4 md:grid-cols-3 my-7"
        >
          <ul v-for="(i, index) in pokemons" :key="index">
            <li
              class="px-2 tracking-normal text-gray-600 uppercase transition-all cursor-pointer hover:rounded-md md:text-2xl hover:shadow-md hover:bg-blue-500 hover:text-white"
            >
              <router-link :to="`/pokemons/${i.name}`" class="flex"
                ><p class="my-auto">{{ i.name }}</p>
                <img
                  :src="i.image"
                  :alt="'Nombre Poke: ' + i.name"
                  class="w-10 md:w-[40%]"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>