<template>
  <section class="contact py-24 px-20">
    <div class="flex gap-12">
      <div>
        <img :src="contactImg" />
      </div>
      <div>
        <h2 class="mb-12 text-5xl font-bold">Get In Touch</h2>
        <form>
          <div class="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="First Name"
              class="input rounded-2xl px-6 py-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="input rounded-2xl px-6 py-4"
            />
          </div>
          <div class="flex gap-2 mb-2">
            <input
              type="email"
              placeholder="Email"
              class="input rounded-2xl px-6 py-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="input rounded-2xl px-6 py-4"
            />
          </div>
          <textarea row="6" cols="50" class="w-full" />

          <input type="submit" />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import contactImg from "../assets/img/contact-img.svg";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const formDetails = ref(formInitialDetails);
const buttonText = ref("Send");
const status = ref({});
</script>

<style scoped>
.contact {
  background: linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%);
}

.input,
textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
