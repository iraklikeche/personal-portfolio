<template>
  <nav
    class="flex items-center justify-between w-full text-white transition duration-1000 ease-in-out fixed py-5 px-24 z-50"
    :class="{ 'bg-[#121212] py-2': isSticky }"
  >
    <div class="text-5xl">
      <img :src="logo" alt="LOGO" />
    </div>
    <div class="flex items-center">
      <div class="flex gap-16 mr-12 text-lg">
        <a
          href="#home"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >Home</a
        >
        <a
          href="#skills"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >Skills</a
        >
        <a
          href="#projects"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >Projects</a
        >
      </div>

      <div class="social-icon flex gap-2 mr-8">
        <a
          href="#"
          class="bg-[rgba(217, 217, 217, 0.1)] inline-flex rounded-full mr-1 items-center justify-center border border-[rgba(255, 255, 255, 0.5)]"
          ><img :src="navIcon1" alt="LinkedIn"
        /></a>
        <a href="#"><img :src="navIcon2" alt="Facebook" /></a>
        <a href="#"><img :src="navIcon3" alt="Instagram" /></a>
      </div>

      <a href="#connect-me" class="connect"> Let's Connect </a>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { ref, onMounted, onUnmounted } from "vue";

const isSticky = ref(false);

// Function to handle scroll event
function handleScroll() {
  isSticky.value = window.scrollY > 100;
}

// Add scroll event listener when the component is mounted
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Remove scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.connect {
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.35s ease-in-out;
  z-index: 999;
}

.connect::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 0;
  transform: scale(0);
  z-index: 9999;
  transition: 0.35s ease-in-out;
}
.connect:hover {
  color: #121212;
}
.connect:hover::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transform: scale(1);
}
</style>
