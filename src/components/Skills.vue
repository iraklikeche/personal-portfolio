<template>
  <section class="rounded-xl" id="skills">
    <div class="flex flex-col items-center justify-center py-16 pb-0">
      <h2 class="text-5xl font-bold mb-6">Skills</h2>
      <p class="opacity-50 text-xl text-center w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam
        quis error possimus eius adipisci perspiciatis maiores asperiores
        cupiditate necessitatibus quos maxime ea atque libero?
      </p>
    </div>
    <div class="p-24">
      <swiper
        :slidesPerView="1"
        :spaceBetween="0"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        class="mySwiper relative"
      >
        <swiper-slide class="flex flex-col gap-6">
          <img :src="skill1" alt="" />
          <span class="text-2xl font-bold">Skill1</span></swiper-slide
        >
        <swiper-slide class="flex flex-col gap-6">
          <img :src="skill3" alt="" />
          <span class="text-2xl font-bold">Skill2</span></swiper-slide
        ><swiper-slide class="flex flex-col gap-6">
          <img :src="skill2" alt="" />
          <span class="text-2xl font-bold">Skill3</span></swiper-slide
        >
        <swiper-slide class="flex flex-col gap-6">
          <img :src="skill1" alt="" />
          <span class="text-2xl font-bold">Skill4</span></swiper-slide
        >
      </swiper>
    </div>

    <img
      :src="backgroundImage"
      alt=""
      class="absolute top-[28%] bottom-0 w-2/5 -z-10"
    />
  </section>
</template>

<script setup>
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import skill1 from "../assets/img/meter1.svg";
import skill2 from "../assets/img/meter2.svg";
import skill3 from "../assets/img/meter3.svg";
import backgroundImage from "../assets/img/color-sharp.png";

const modules = [Navigation];
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
