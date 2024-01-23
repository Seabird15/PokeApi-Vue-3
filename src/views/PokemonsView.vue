<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useGetData } from "@/composables/getData";
import { onMounted, ref } from "vue";
import axios from "axios";

const route = useRoute();

const { data, getData, loading, error } = useGetData();

const getImgData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
};
//Agregar loading crear una variable booleana para rastrear el estado de carga

// const getData = async () => {
//   try {
//     //Destructurar data
//     const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
//     //Recorrer el objeto data con un map,  guardar la url en response y retornar objeto con el nombre y la imagen
//     const pokemonDetails = await Promise.all(
//       data.results.map(async (pokemon) => {
//         const response = await axios.get(pokemon.url);
//         return {
//           name: pokemon.name,
//           image: response.data.sprites.front_default,
//         };
//       })
//     );
//     pokemons.value = pokemonDetails;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading.value = false;
//   }
// };
getData("https://pokeapi.co/api/v2/pokemon/");
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
    <div class="flex w-full">
      <div class="mx-auto">
        <div v-if="loading">
          <div>Loading...</div>
        </div>
        <div v-if="error" class="">
          <h3 class="text-red-600">{{ error }}</h3>
        </div>

        <div
          v-if="data"
          class="grid grid-cols-2 gap-2 m-auto mx-2 overflow-hidden text-left md:gap-4 md:grid-cols-3 my-7"
        >
          <ul v-for="(i, index) in data.results" :key="index" class="group">
            <li
              class="px-2 tracking-normal text-gray-600 uppercase transition-all cursor-pointer hover:rounded-md md:text-xl hover:shadow-md hover:bg-blue-500 hover:text-white"
            >
              <router-link :to="`/pokemons/${i.name}`" class="flex"
                ><p class="my-auto">{{ i.name }}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <!--Agregar botones de next y prev, directamente desde data.(propiedad)-->
        <div class="flex justify-around py-7">
          <button
            class="p-4 text-white bg-blue-500 rounded-full hover:shadow-2xl disabled:bg-blue-300"
            @click="getData(data.previous)"
            :disabled="!data.previous"
          >
            &lt; Previous
          </button>
          <button
            class="p-4 text-white bg-blue-500 rounded-full hover:shadow-2xl disabled:bg-blue-300"
            @click="getData(data.next)"
            :disabled="!data.next"
          >
            Next >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>