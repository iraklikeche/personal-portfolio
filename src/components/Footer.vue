<template>
  <footer class="flex justify-between items-center py-24 px-24">
    <div class="text-5xl">
      <img :src="logo" alt="LOGO" />
    </div>
    <div>
      <div class="social-icon flex gap-2 mr-8">
        <a
          href="#"
          class="bg-[rgba(217, 217, 217, 0.1)] inline-flex rounded-full mr-1 items-center justify-center border border-[rgba(255, 255, 255, 0.5)]"
          ><img :src="navIcon1" alt="LinkedIn"
        /></a>
        <a href="#"><img :src="navIcon2" alt="Facebook" /></a>
        <a href="#"><img :src="navIcon3" alt="Instagram" /></a>
      </div>
      <div>COPY</div>
    </div>
  </footer>
</template>

<script setup>
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
</script>

<style scoped>
footer {
  background: url("../assets/img/footer-bg.png");
}
</style>
