<template>
  <section class="rounded-xl" id="skills">
    <div class="flex flex-col items-center justify-center py-16 pb-0">
      <h2 class="text-5xl font-bold mb-6">Skills</h2>
      <p class="opacity-50 text-xl text-center w-3/4">
        As a Front-End Developer, I excel in creating dynamic and interactive
        web applications using HTML, CSS, and JavaScript. I specialize in
        harnessing the power of APIs to seamlessly integrate data and enhance
        user experiences. My skills include working with popular front-end
        libraries and frameworks such as React and Vue.js. I am adept at
        designing intuitive user interfaces and ensuring cross-browser
        compatibility. Let's collaborate and transform your ideas into elegant,
        functional, and user-friendly websites.
      </p>
    </div>
    <div class="p-20">
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
          <span class="text-2xl font-bold">Vue.JS</span></swiper-slide
        >
        <swiper-slide class="flex flex-col gap-6">
          <img :src="skill3" alt="" />
          <span class="text-2xl font-bold">Tailwind</span></swiper-slide
        ><swiper-slide class="flex flex-col gap-6">
          <img :src="skill2" alt="" />
          <span class="text-2xl font-bold">React</span></swiper-slide
        >
        <swiper-slide class="flex flex-col gap-6">
          <img :src="skill1" alt="" />
          <span class="text-2xl font-bold">APIs</span></swiper-slide
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
