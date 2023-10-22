<template>
  <nav
    class="flex items-center justify-between w-full text-white transition duration-1000 ease-in-out fixed py-5 px-20 z-50"
    :class="{ 'bg-[#121212] py-0 lg:py-2': isSticky }"
  >
    <div>
      <a href="#">
        <img :src="logo" alt="LOGO" class="w-[150px]" />
      </a>
    </div>
    <div class="lg:hidden">
      <img :src="menu" class="w-[50px]" @click="openMenu" />
    </div>
    <div
      class="flex flex-col gap-12 lg:gap-0 lg:flex-row py-12 lg:py-0 items-center absolute bg-black lg:bg-transparent w-full lg:w-auto h-screen lg:h-auto top-0 left-[50%] translate-x-[-50%] lg:transform lg:translate-x-0 lg:static duration-1000"
      :class="{ 'left-[-102%]': !isOpened }"
    >
      <div
        class="flex items-center flex-col lg:flex-row gap-8 xl:gap-16 mr-4 xl:mr-12 text-lg"
      >
        <img
          :src="close"
          class="lg:hidden w-[30px] cursor-pointer"
          @click="closeMenu()"
        />

        <a
          href="#"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          @click="closeMenu()"
          >Home</a
        >
        <a
          href="#skills"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          @click="closeMenu()"
          >Skills</a
        >
        <a
          href="#projects"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          @click="closeMenu()"
          >Projects</a
        >
      </div>

      <div class="social-icon flex gap-2 mr-2 xl:mr-8">
        <a
          href="https://www.linkedin.com/in/irakli-ketchekmadze-280020241/"
          target="_blank"
          @click="closeMenu()"
          ><img :src="navIcon1" alt="LinkedIn"
        /></a>
        <a
          href="https://github.com/iraklikeche"
          target="_blank"
          @click="closeMenu()"
          ><img :src="github" alt="Facebook"
        /></a>
        <a
          href="https://www.instagram.com/irakli.keche/"
          target="_blank"
          @click="closeMenu()"
          ><img :src="navIcon3" alt="Instagram"
        /></a>
      </div>

      <a href="#connect-me" class="connect" @click="openMenu()">
        Let's Connect
      </a>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";

import { ref, onMounted, onUnmounted } from "vue";

const isSticky = ref(false);
const isOpened = ref(false);

console.log(isOpened.value);

const openMenu = () => {
  isOpened.value = !isOpened.value;
  console.log(isOpened.value);
};

const closeMenu = () => {
  isOpened.value = false;
  console.log(isOpened.value);
  console.log("WTF");
};

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
