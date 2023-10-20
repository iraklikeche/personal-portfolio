<template>
  <div class="img-box relative overflow-hidden">
    <img :src="imgUrl" />
    <div class="project-text">
      <h2>{{ title }}</h2>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: String,
  title: String,
  description: String,
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
