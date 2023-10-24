<template>
  <footer class="flex justify-between items-center py-8 lg:py-16 px-4 lg:px-20">
    <div>
      <a href="#">
        <img :src="logo" alt="LOGO" class="w-1/5" />
      </a>
    </div>
    <div class="flex flex-col items-end gap-4">
      <div class="social-icon flex gap-2">
        <a
          href="https://www.linkedin.com/in/irakli-ketchekmadze-280020241/"
          target="_blank"
          ><img :src="navIcon1" alt="LinkedIn"
        /></a>
        <a href="https://github.com/iraklikeche" target="_blank"
          ><img :src="github" alt="Facebook"
        /></a>
        <a href="https://www.instagram.com/irakli.keche/" target="_blank"
          ><img :src="navIcon3" alt="Instagram"
        /></a>
      </div>
      <div>
        <p>Copyright {{ currentYear }}. All Right Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
  background: url("../assets/img/footer-bg.png");
}
</style>
