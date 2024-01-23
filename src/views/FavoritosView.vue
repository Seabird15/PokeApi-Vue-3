<script setup>
import { useFavoritoStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
import { useRoute, useRouter, RouterLink } from "vue-router";

const useFavoritos = useFavoritoStore();

const { favoritos } = storeToRefs(useFavoritos);

const { remove } = useFavoritos;

const route = useRoute();
const router = useRouter();

const back = () => {
  router.push("/pokemons");
};
</script>

<template>
  <div class="w-full">
    <h1 class="text-4xl font-bold tracking-widest text-center uppercase">
      Favoritos
    </h1>
    <p class="text-2xl text-center my-7" v-if="favoritos.length === 0">
      No has agregado ningun favorito
    </p>
    <div class="p-4">
      <div class="w-full border-2 border-solid p-7">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <div
            v-for="poke in favoritos"
            :key="poke.id"
            class="text-xl font-bold tracking-wider text-center uppercase"
          >
            {{ poke.name }}
            <img
              :src="poke.sprites?.front_default"
              alt=""
              class="w-[50%] mx-auto"
            />

            <RouterLink
              :to="`/pokemons/${poke.name}`"
              class="flex justify-center p-2 mx-auto my-2 text-lg font-light transition-all border-2 border-gray-100 border-solid rounded-md hover:bg-green-700 hover:text-white hover:shadow-md"
            >
              + Info
            </RouterLink>
            <button
              class="flex justify-center p-2 mx-auto my-2 text-lg font-light transition-all border-2 border-gray-100 border-solid rounded-md hover:bg-red-700 hover:text-white hover:shadow-md"
              @click="remove(poke.id)"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="flex p-2 mx-auto transition-all border-2 border-gray-100 border-solid rounded-md mb-7 hover:bg-green-700 hover:text-white hover:shadow-md"
      @click="back"
    >
      &lt; Volver a la lista
    </button>
  </div>
</template>