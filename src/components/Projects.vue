<template>
  <section class="py-12 bg-black">
    <div class="flex flex-col items-center justify-center gap-8">
      <h2 class="text-5xl font-bold">Projects</h2>
      <p class="opacity-50 text-xl leading-8 font-book text-center w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sed,
        sint unde nulla suscipit tempore dolorum non dolore! Commodi ut sunt,
        animi nihil veritatis, quod incidunt totam mollitia necessitatibus quia
        minima voluptates deleniti cumque libero fuga eum non! Molestias, quia.
      </p>
      <div>
        <button
          class="text-xl font-bold border px-32 py-5 rounded-l-full bg-[#252525] transition-all"
        >
          Tab One
        </button>
        <button class="text-xl font-bold border px-32 py-5 bg-[#252525]">
          Tab Two
        </button>
        <button
          class="text-xl font-bold border px-32 py-5 rounded-r-full bg-[#252525]"
        >
          Tab Three
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-10 px-20 mt-12">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <ProjectCard
          :imgUrl="project.imgUrl"
          :title="project.title"
          :description="project.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
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
</style>