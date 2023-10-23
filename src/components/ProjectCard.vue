<template>
  <a
    :href="link"
    target="_blank"
    class="img-box relative h-full overflow-hidden w-full"
  >
    <img :src="imgUrl" class="rounded-3xl h-full w-full" />
    <div class="project-text text-xl">
      <h2>{{ title }}</h2>
      <span>{{ description }}</span>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  index: Number,
  imgUrl: String,
  title: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.img-box::before {
  content: "";
  background: linear-gradient(90.21deg, #8f2062 -5.91%, #4a2fbd 111.58%);
  opacity: 0.85;
  position: absolute;
  width: 100%;
  height: 0;
  transition: 0.4s ease-in-out;
}

@media screen and (min-width: 640px) {
  .img-box::before {
    border-radius: 25px;
  }
}

@media screen and (min-width: 1024px) {
  .img-box::before {
    border-radius: 15px;
  }
}

@media screen and (min-width: 1280px) {
  .img-box::before {
    border-radius: 20px;
  }
}

.img-box:hover::before {
  height: 100%;
}

.project-text {
  position: absolute;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
}

.img-box:hover .project-text {
  top: 50%;
  opacity: 1;
}
</style>
