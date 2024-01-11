<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="flex flex-col justify-center w-full md:flex-row mt-7">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/pokemon-logo-png-1446.png"
      />

      <div>
        <HelloWorld
          msg="PokeApi"
          class="m-auto text-center md:m-0 md:text-left"
        />

        <nav>
          <RouterLink class="!p-4 bg-gray-100" to="/">Home</RouterLink>
          <RouterLink class="!p-4 bg-gray-100" to="/about">About</RouterLink>
          <RouterLink class="!p-4 bg-gray-100" to="/pokemons"
            >Pokemons</RouterLink
          >
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
  <hr />
  <footer class="text-center my-7">By Daniela L. Aravena</footer>
</template>

<style scoped>
.active {
  background: rgb(78, 163, 210);
  background: linear-gradient(
    16deg,
    rgba(78, 163, 210, 1) 0%,
    rgba(25, 85, 233, 1) 100%
  );
  color: white !important;
  padding: 12px;
  border-radius: 8px;
  transition: all;
}
.active:hover {
  background-color: blue !important;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
