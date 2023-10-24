<template>
  <section
    class="banner px-4 lg:px-20 py-2 lg:py-10 pb-4 lg:pb-24 h-screen"
    id="/"
  >
    <!-- <Navbar /> -->
    <div class="flex flex-col lg:flex-row items-center gap-24 py-28">
      <div
        class="flex flex-col items-center justify-center gap-4 lg:block lg:w-3/4 relative z-10"
      >
        <h2
          class="welcome text-xl font-bold text-center mb-4 tracking-wider py-2 px-8 lg:px-4 lg:inline-block hidden"
        >
          Welcome To My Portfolio
        </h2>

        <h1 class="text-3xl lg:text-6xl font-bold tracking-wider mb-5 block">
          Hi I'm
          <span class="text-red-500">{{ text }}</span>
        </h1>

        <p
          class="text-white lg:text-[#b8b8b8] lg:text-lg text-center lg:text-left"
        >
          Hello! I'm a dedicated Front-End Developer with a knack for crafting
          visually appealing and intuitive user interfaces. My passion lies in
          bringing designs to life, ensuring seamless interactions and
          delightful user experiences, as well as turning complex ideas into
          elegant, responsive websites. I thrive on staying up-to-date with the
          latest web technologies and design trends. Let's collaborate and
          create something extraordinary together!
        </p>
        <a
          href="#connect-me"
          class="text-white font-bold text-lg lg:text-xl mt-2 lg:mt-10 tracking-wider inline-block hover:text-black transition duration-300"
        >
          Let's Connect
        </a>
      </div>
      <div
        class="flex items-center justify-center absolute top-[5%] z-0 lg:static"
      >
        <img :src="headerImg" alt="Header Image" class="w-1/2 lg:w-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
import headerImg from "../assets/img/header-img.svg";
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";

const toRotate = ["Front-End Dev.", "UI/UX Enthusiast.", "JavaScript Geek."];
const loopNum = ref(0);
const isDeleting = ref(false);
const text = ref("");
const delta = ref(300 - Math.random() * 100);
const period = 2000;

const tick = () => {
  let i = loopNum.value % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting.value
    ? fullText.substring(0, text.value.length - 1)
    : fullText.substring(0, text.value.length + 1);

  text.value = updatedText;

  if (isDeleting.value) {
    delta.value /= 2;
  }

  if (!isDeleting.value && updatedText === fullText) {
    isDeleting.value = true;
    delta.value = period;
  } else if (isDeleting.value && updatedText === "") {
    isDeleting.value = false;
    loopNum.value++;

    delta.value = 500;
  } else {
  }
};

onMounted(() => {
  let ticker = setInterval(() => {
    tick();
  }, delta.value);

  return () => {
    clearInterval(ticker);
  };
});
</script>

<style scoped>
.banner {
  background-image: url("../assets/img/banner-bg.png");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
}
.welcome {
  background: linear-gradient(
    90.21deg,
    rgba(170, 54, 124, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );

  border: 1px solid rgba(255, 255, 255, 0.4);
}

img {
  animation: updown 3s linear infinite;
}

@keyframes updown {
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(-20px);
  }
}
</style>
