<template>
  <nav class="flex justify-between items-center px-20 py-10 text-white">
    <div class="text-5xl">
      <img :src="logo" alt="LOGO" />
    </div>
    <div class="flex items-center">
      <div class="flex gap-16 mr-12 text-lg">
        <a
          href="#"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >Home</a
        >
        <a
          href="#"
          class="opacity-50 hover:opacity-100 transition-opacity duration-200"
          >Skills</a
        >
        <a
          href="#"
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

      <button class="connect">Let's Connect</button>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
</script>

<style scoped>
.social-icon a {
  width: 42px;
  height: 42px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.social-icon a::before {
  content: "";
  width: 42px;
  height: 42px;
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  transform: scale(0);
  transition: 0.3s ease-in-out;
}
.social-icon a:hover::before {
  transform: scale(1);
}
.social-icon a img {
  width: 40%;
  z-index: 1;
  transition: 0.3s ease-in-out;
}
.social-icon a:hover img {
  filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
    hue-rotate(346deg) brightness(95%) contrast(86%);
}

.connect {
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 18px 34px;
  font-size: 18px;
  margin-left: 18px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;
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
  transition: 0.3s ease-in-out;
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
