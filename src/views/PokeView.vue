<script setup>
import { useRoute, useRouter } from "vue-router";

import { useGetData } from "@/composables/getData";

import { useFavoritoStore } from "@/store/favoritos";

//Poder consumir los params en el script
const route = useRoute();
//Empujar al usuario directamente en el script
const router = useRouter();
const useFavoritos = useFavoritoStore();

const { add, findPoke } = useFavoritos;

const { data, getData, loading, error } = useGetData();

//Loading

const back = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

// const getData = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
//     );
//     poke.value = data;
//     console.log(poke);
//   } catch (error) {
//     console.log(error);
//     poke.value = null;
//   } finally {
//     setTimeout(() => {
//       loading.value = false;
//     }, 2000);
//   }
// };
</script>

<template>
  <section
    class="flex p-4 mx-4 border-2 border-solid md:m-auto md:my-7 md:w-3/6 mt-7"
  >
    <div v-show="loading" class="mx-auto">
      <div role="status" v-show="data !== null">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div class="m-auto" v-show="!loading" v-if="data">
      <div class="">
        <h2 class="text-3xl font-bold tracking-widest uppercase">
          Poke Name: <span class="text-blue-500">{{ data.name }}</span>
        </h2>
        <h2 class="text-3xl font-bold tracking-widest uppercase">
          Weight: <span class="text-blue-500">{{ data.weight }}</span>
        </h2>
        <button
          :disabled="findPoke(data.name)"
          @click="add(data)"
          class="p-2 mt-2 text-xs text-white transition-all bg-green-600 rounded-full hover:shadow-2xl hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
        >
          Agregar Favoritos
        </button>
      </div>
      <div>
        <img
          :src="data.sprites?.other.dream_world.front_default"
          alt=""
          class="w-[50%] h-[50%] mx-auto my-7"
        />
      </div>
      <button
        class="p-2 transition-all border-2 border-gray-100 border-solid rounded-md hover:bg-green-700 hover:text-white hover:shadow-md"
        @click="back"
      >
        &lt; Volver a la lista
      </button>
    </div>
    <div v-else class="mx-auto">
      <h1
        class="p-4 font-bold tracking-wider text-red-700 uppercase bg-red-400 rounded-md px-7 bg-opacity-70"
      >
        {{ error }}
      </h1>
    </div>
  </section>
</template>