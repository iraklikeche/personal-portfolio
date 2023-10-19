<template>
  <section class="container px-20 py-10">
    <div class="flex">
      <div>
        <h2 class="text-2xl font-medium text-center mb-4 border">
          Welcome To My Portfolio
        </h2>

        <h1 class="text-6xl font-bold">
          Hi I'm <span class="text-red-500">{{ text }}</span>
        </h1>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          temporibus possimus sequi quas quisquam vitae rem aperiam, soluta,
          praesentium et sed ipsa distinctio ab ad a officiis totam asperiores
          tempore.
        </p>
        <button>Let's connect</button>
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
