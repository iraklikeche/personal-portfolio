<template>
  <section class="contact py-24 px-20">
    <div class="grid grid-cols-2 gap-12">
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
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
            />
            <input
              type="text"
              placeholder="Last Name"
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
            />
          </div>
          <div class="flex gap-2 mb-2">
            <input
              type="email"
              placeholder="Email"
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
            />
          </div>
          <textarea
            rows="6"
            class="w-full transition duration-1000 ease-in-out"
          />

          <button
            type="submit"
            class="font-bold text-black bg-white py-4 px-12 relative transition duration-1000 ease-in-out hover:text-white"
          >
            <span class="z-1 relative">
              {{ buttonText }}
            </span>
          </button>
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

.input:focus,
textarea:focus {
  background: rgba(255, 255, 255, 1);
  color: #121212;
}

input::placeholder,
textarea::placeholder {
  font-size: 16px;
  font-weight: 400;
  color: #fff;
}

button::before {
  content: "";
  background: #121212;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  transition: 0.3s ease-in-out;
}

button:hover::before {
  width: 100%;
}
</style>
