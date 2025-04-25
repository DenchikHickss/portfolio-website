<script setup>

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import {ref} from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const sendEmail = () => {
  const subject = encodeURIComponent(`Message from ${name.value}`);
  const body = encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`);
  window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
};
</script>

<template>
  <Navigation/>

  <section class="contact">
    <div class="max-width">
      <div class="contact-wrapper">
        <div class="desktop image-container">
          <img src="@/assets/contact/column_1.png" alt="column_1" class="animation slide-in-top"/>
          <img src="@/assets/contact/column_2.png" alt="column_2" class="animation slide-in-bottom"/>
          <img src="@/assets/contact/column_3.png" alt="column_3" class="animation slide-in-top"/>
        </div>
        <div class="mobile image-container">
          <img src="@/assets/contact/column_1.png" alt="column_1" class="animation slide-in-left"/>
          <img src="@/assets/contact/column_2.png" alt="column_2" class="animation slide-in-top"/>
          <img src="@/assets/contact/column_3.png" alt="column_3" class="animation slide-in-right"/>
        </div>
        <form @submit.prevent="sendEmail" class="form-wrapper">
          <h1 class="title">Ready to get started?</h1>
          <input v-model="name" class="input" type="text" placeholder="Your Name" required>
          <input v-model="email" class="input" type="email" placeholder="Your Email" required>
          <textarea v-model="message" class="input multiline" placeholder="Write Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
.contact {
  background: url("@/assets/img/bg.jpg");
  background-size: cover;
  padding: 125px var(--padding) 35px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  column-gap: 135px;
}

.image-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 13px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
}

.title {
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
}

.input {
  background: #D9D9D9;
  outline: none;
  padding: 10px 6px;
  width: 350px;
}

.input::placeholder {
  color: #000000;
  text-transform: capitalize;
}

.multiline {
  height: 100px;
  resize: none;
}

button {
  width: 100%;
  background: var(--color-accent);
  padding: 10px 0;
  font-size: 13px;
  line-height: 18px;
  text-transform: capitalize;
  text-align: center;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

@media (max-width: 1000px) {
  .contact {
    padding: 80px 20px 35px;
    background-position: center;
  }

  .contact-wrapper {
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
  }

  .image-container {
    flex-wrap: wrap;
      column-gap: 10px;
    row-gap: 20px;
    justify-content: center;
  }

  .image-container img {
    width: 100px;
    height: auto;
  }

  .form-wrapper {
    width: 100%;
    row-gap: 20px;
  }

  .input {
    width: 100%;
    max-width: 350px;
  }

  button {
    max-width: 350px;
    width: 100%;
  }

  .title {
    font-size: 20px;
  }
}
</style>