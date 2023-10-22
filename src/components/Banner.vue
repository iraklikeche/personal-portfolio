<template>
  <section class="banner px-20 py-10 pb-24 h-screen" id="/">
    <!-- <Navbar /> -->
    <div class="flex items-center gap-24 py-28">
      <div class="w-3/4">
        <h2
          class="welcome text-xl font-bold text-center mb-4 tracking-wider py-2 px-4 inline-block"
        >
          Welcome To My Portfolio
        </h2>

        <h1 class="text-6xl font-bold tracking-wider mb-5 block">
          Hi I'm
          <span class="text-red-500">{{ text }}</span>
        </h1>

        <p class="text-[#b8b8b8] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          temporibus possimus sequi quas quisquam vitae rem aperiam, soluta,
          praesentium et sed ipsa distinctio ab ad a officiis totam asperiores
          tempore, praesentium et sed ipsa distinctio ab ad a officiis totam
          asperiores.
        </p>
        <a
          href="#connect-me"
          class="text-white font-bold text-xl mt-10 tracking-wider inline-block hover:text-black transition duration-300"
        >
          Let's Connect
        </a>
      </div>
      <div>
        <img :src="headerImg" alt="Header Image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import headerImg from "../assets/img/header-img.svg";
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";

const toRotate = ["Bla1.", "Blah2.", "Blah3."];
const loopNum = ref(0);
const isDeleting = ref(false);
const text = ref("");
const delta = ref(500 - Math.random() * 100);
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
