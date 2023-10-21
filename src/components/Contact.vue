<template>
  <section class="contact py-24 px-20" id="connect-me">
    <div class="grid grid-cols-2 gap-12">
      <div>
        <img :src="contactImg" />
      </div>
      <div>
        <h2 class="mb-12 text-5xl font-bold">Get In Touch</h2>

        <form ref="formData" @submit.prevent="sendEmail">
          <div class="flex gap-2 mb-2">
            <input
              type="text"
              name="user_name"
              placeholder="First Name"
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="user_lastName"
              required
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
            />
          </div>
          <div class="flex gap-2 mb-2">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="user_phone"
              required
              class="input rounded-3xl px-6 py-5 w-full text-lg transition duration-1000 ease-in-out"
            />
          </div>
          <textarea
            rows="5"
            name="message"
            class="w-full px-6 py-2 text-lg rounded-3xl transition duration-1000 ease-in-out mb-6"
            required
            placeholder="Leave Your Message."
          />

          <button
            type="submit"
            value="send"
            class="font-bold text-black bg-white py-4 px-12 relative transition duration-1000 ease-in-out hover:text-white"
          >
            <span class="z-1 relative tracking-wider">
              {{ buttonText }}
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";
import contactImg from "../assets/img/contact-img.svg";

const formData = ref({
  user_name: "",
  user_lastName: "",
  user_email: "",
  user_phone: "",
  message: "",
});

const buttonText = ref("SEND");

const sendEmail = () => {
  emailjs
    .sendForm(
      "service_qnr4vjg",
      "template_7hvu3ls",
      formData.value, // $refs can be accessed directly in <script setup>
      "9tBkyrPHTO01_gnU8"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
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
