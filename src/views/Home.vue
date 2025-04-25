<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import {onMounted, ref} from "vue";

const textToPrint = "For me, design is a way to create unique experiences. Its main goal is to communicate ideas clearly and precisely, but when it evokes emotions, it becomes art. In every project, I strive to combine aesthetics and meaning to make the world around me more expressive and inspiring.";

const displayedText = ref('');
const speed = 50;

function typeWriter(i = 0) {
  if (i < textToPrint.length) {
    displayedText.value += textToPrint[i];
    setTimeout(() => typeWriter(i + 1), speed);
  }
}

function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeWriter();
        observer.unobserve(entry.target);
      }
    })
  });

  document.querySelectorAll('.typewriter').forEach((element) => observer.observe(element));
}

onMounted(() => {
  initObserver();
})

</script>

<template>
  <Navigation/>

  <section class="hero">
    <div class="max-width">
      <div class="hero-text-wrapper">
        <h1 class="hero-title">Multimedia</h1>
        <h1 class="hero-title">Designer <span class="hero-description animation slide-in-right">Specialized in Motion Graphics, Video Editing, and
        Interactive Content Creation.</span></h1>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="about-wrapper max-width">
      <div class="cv-wrapper">
        <iframe src="https://www.youtube.com/embed/cAdDTCPXorY">
          <!--        <a href="https://youtu.be/cAdDTCPXorY?si=HPVGYSG95ahEqk55">Your browser does not support video. Download it-->
          <!--          here!</a>-->
        </iframe>
      </div>
      <div class="about-content-wrapper">
        <h2 class="about-title">About Me</h2>
        <p class="about-content">Hi, my name is Denis, and i’m from Ukraine. i’m first-year Multimedia Design student
          at
          EASV. I enjoy working with design in Illustrator, InDesign, and Photoshop, creating visual content that is
          both
          creative and functional.</p>
        <a class="download-button" href="/cv.pdf" download="cv.pdf">download cv</a>
      </div>
    </div>
  </section>

  <section class="projects">
    <div class="projects-wrapper max-width">
      <div class="projects-col">
        <h2 class="projects-title">SOME</h2>
        <h2 class="projects-title">Projects</h2>
        <p class="projects-content typewriter">{{ displayedText }}<span class="cursor">|</span></p>
        <RouterLink to="/projects" class="checkout">→Checkoutmyprojects</RouterLink>
        <img src="@/assets/img/preview3.png" alt="Preview 3">
      </div>
      <div class="projects-col images">
        <img src="@/assets/img/preview1.png" alt="Preview 1">
        <img src="@/assets/img/preview2.png" alt="Preview 2">
      </div>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
.hero {
  background: url("@/assets/img/bg.jpg");
  background-size: cover;
  padding: 170px 0 110px var(--padding);
  flex-grow: 1;
  border-bottom: 1px solid #373737;
}

.hero-title {
  font-family: 'Rotonda', sans-serif;
  font-size: 120px;
  text-transform: capitalize;
  color: var(--color-accent);
  display: flex;
  column-gap: 50px;
  align-items: center;
}

.hero-text-wrapper {
  position: relative;
}

.hero-description {
  font-size: 20px;
  text-transform: capitalize;
  max-width: 360px;
  margin-top: 40px;
  color: #FFFFFF;
}

.about {
  margin: 50px 0;
  background-color: #232121;
}

.about-wrapper {
  display: flex;
  flex-direction: row;
  column-gap: 100px;
  padding: 80px
}

.about-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-title {
  font-family: 'Big John', sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 50px;
}

.about-content {
  font-size: 20px;
  text-transform: capitalize;
}

.cv-wrapper {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}

.cv-wrapper iframe {
  width: 100%;
  border: none;
  height: 378px;
}

.download-button {
  text-transform: uppercase;
  background-color: var(--color-accent);
  color: #FFFFFF;
  padding: 14px 40px;
  font-family: 'Big John', sans-serif;
  font-weight: bold;
  font-size: 10px;
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
  text-decoration: none;
}

.projects {
  border-top: 1px solid #373737;
  padding: 30px var(--padding);
}

.projects-wrapper {
  display: flex;
  flex-direction: row;
  column-gap: 100px;
}

.projects-col {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.images {
  row-gap: 30px;
}

.projects-title {
  font-family: 'Anonymous Pro', sans-serif;
  font-size: 60px;
  text-transform: uppercase;
  color: #DBC8C8;
}

.projects-content {
  font-family: 'Anonymous Pro', sans-serif;
  font-size: 20px;
  line-height: 20px;
  font-variant: small-caps;
}

.checkout {
  font-family: 'Anonymous Pro', sans-serif;
  font-size: 30px;
  font-variant: small-caps;
  text-decoration: underline;
  margin-top: auto;
  margin-bottom: 60px;
  color: inherit;
}

.cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 1000px) {
  .hero {
    padding: 70px 20px 60px 20px;
    background-position: center;
    background-size: contain;
  }

  .hero-title {
    font-size: 48px;
    flex-direction: column;
    text-align: center;
    row-gap: 10px;
  }

  .hero-description {
    font-size: 16px;
    max-width: 100%;
    margin-top: 20px;
    text-align: center;
  }

  .about-wrapper {
    flex-direction: column;
    row-gap: 40px;
    padding: 40px 20px;
  }

  .about-title {
    font-size: 24px;
  }

  .about-content {
    font-size: 16px;
    text-align: center;
  }

  .download-button {
    margin-top: 20px;
    font-size: 12px;
    padding: 12px 20px;
    margin-right: auto;
  }

  .projects-wrapper {
    flex-direction: column;
    row-gap: 40px;
  }

  .projects-title {
    font-size: 36px;
    text-align: center;
  }

  .projects-content {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    min-height: 120px;
  }

  .checkout {
    font-size: 20px;
    text-align: center;
    margin: 30px auto;
  }

  .projects-col.images {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  }

  .projects-col.images img,
  .projects-col img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>