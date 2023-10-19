<script setup>
import Banner from "./components/Banner.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <main>
    <Navbar />
    <Banner />
  </main>
</template>

<style scoped>
main {
  background-image: url("./assets/img/banner-bg.png");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
