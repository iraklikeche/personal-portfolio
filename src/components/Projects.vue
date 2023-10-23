<template>
  <section class="py-12 bg-black" id="projects">
    <div class="flex flex-col items-center justify-center gap-8">
      <h2 class="text-5xl font-bold">Projects</h2>
      <p class="opacity-50 text-xl leading-8 font-book text-center w-3/4">
        Explore my portfolio showcasing a diverse range of front-end web
        development projects. These projects demonstrate my expertise in
        creating responsive, interactive, and visually appealing websites. I've
        worked on projects ranging from personal websites to interactive web
        applications, utilizing technologies such as HTML, CSS, JavaScript, and
        popular front-end frameworks. Each project represents my commitment to
        delivering exceptional user experiences and my passion for innovative
        web development.
      </p>

      <div>
        <button
          class="text-xl font-bold border px-12 sm:px-14 md:px-20 xl:px-32 py-5 rounded-l-full bg-[#252525]"
          @click="changeTab(0)"
          :class="{
            'bg-gradient-to-r': activeTab === 0,
            'bg-[#252525]': activeTab !== 0,
          }"
        >
          Vue.JS
        </button>
        <button
          class="text-xl font-bold border px-12 sm:px-14 md:px-20 xl:px-32 py-5 bg-[#252525]"
          @click="changeTab(1)"
          :class="{
            'bg-gradient-to-r': activeTab === 1,
            'bg-[#252525]': activeTab !== 1,
          }"
        >
          APIs
        </button>
        <button
          class="text-xl font-bold border px-12 sm:px-14 md:px-20 xl:px-32 py-5 rounded-r-full bg-[#252525]"
          @click="changeTab(2)"
          :class="{
            'bg-gradient-to-r': activeTab === 2,
            'bg-[#252525]': activeTab !== 2,
          }"
        >
          HTML/CSS/JS
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-4 xl:gap-10 px-20 mt-12"
    >
      <div
        v-if="activeTab === 0"
        v-for="(project, index) in vue"
        :key="index"
        class="project w-full"
        :class="{
          'fade-in': activeTab === 0,
        }"
      >
        <ProjectCard
          :imgUrl="project.imgUrl"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>

      <div
        v-if="activeTab === 1"
        v-for="(project, index) in api"
        :key="index"
        class="project w-full"
        :class="{
          'fade-in delay-2000': activeTab === 1,
        }"
      >
        <ProjectCard
          :imgUrl="project.imgUrl"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>

      <div
        v-if="activeTab === 2"
        v-for="(project, index) in plain"
        :key="index"
        class="project w-full"
        :class="{ 'fade-in': activeTab === 2 }"
      >
        <ProjectCard
          :imgUrl="project.imgUrl"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import html1 from "../assets/img/html-css-js.png";
import html2 from "../assets/img/html-css-js2.png";
import html3 from "../assets/img/html.png";

import vue1 from "../assets/img/vue.png";
import vue2 from "../assets/img/vue2.png";
import vue3 from "../assets/img/vue3.png";

import api1 from "../assets/img/api1.png";
import api2 from "../assets/img/api2.png";
import api3 from "../assets/img/api3.png";

import ProjectCard from "./ProjectCard.vue";

import { ref } from "vue";

const activeTab = ref(0);

const changeTab = (index) => {
  activeTab.value = index;
  console.log(index);
};

const api = [
  {
    title: "Weather-app",
    description: "Find weather all over the world!",
    link: "https://dapper-yeot-8d9032.netlify.app/",
    imgUrl: api1,
  },
  {
    title: "Food-app",
    description: "Find food with name,ingredients,letter.",
    link: "https://calm-cocada-9d5f9a.netlify.app/",
    imgUrl: api2,
  },
  {
    title: "Tv-series-app",
    description: "Rick & Morty, GOT character's information",
    link: "https://snazzy-trifle-5727c8.netlify.app/",
    imgUrl: api3,
  },
];

const vue = [
  {
    title: "Audiphile",
    description: "Audio e-commerce web-app",
    link: "https://jolly-bienenstitch-2e1af6.netlify.app/",
    imgUrl: vue1,
  },
  {
    title: "Planet-app",
    description: "planet's facts web-app",
    link: "https://merry-cocada-2572fb.netlify.app/#earth",
    imgUrl: vue2,
  },
  {
    title: "Movie-app",
    description: "Movie web-app",
    link: "https://resplendent-kitten-281e7f.netlify.app/",
    imgUrl: vue3,
  },
];

const plain = [
  {
    title: "Food-app",
    description: "Simple food web-app.",
    imgUrl: html1,
    link: "https://github.com/iraklikeche/Omnifood",
  },
  {
    title: "Search engine",
    description: "Javascript Search engine web-app.",
    link: "https://github.com/iraklikeche/Search-engine-JavaScript-",
    imgUrl: html2,
  },
];
</script>

<style scoped>
button:hover {
  transition: 0.3s ease-in-out;
  background: linear-gradient(
    90.21deg,
    rgba(255, 20, 181, 0.6) -5.91%,
    rgba(117, 26, 174, 0.5) 111.58%
  );
}

.project::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
  top: 0;
  left: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}

.bg-gradient-to-r {
  background: linear-gradient(
    90.21deg,
    rgba(255, 20, 181, 0.6) -5.91%,
    rgba(117, 26, 174, 0.5) 111.58%
  );
}

.fade-in {
  animation: fadeIn 2.5s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
