<script setup>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

const {project} = defineProps({
  project: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <Navigation/>

  <section class="project">
    <div class="max-width">
      <h1 class="project-title">{{ project.title }}</h1>

      <div class="project-description">
        <p>
          {{ project.description }}
        </p>
      </div>

      <div class="poster-gallery">
        <template v-for="(image, index) in project.images">
          <img :src="image" :alt="`Image ${index}`" class="poster-img"/>
        </template>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
.project {
  flex: 1;
  background-size: cover;
  background: url("@/assets/img/bg.jpg") no-repeat center;
  padding: 55px var(--padding);
  color: #fff;
}

.project-title {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 25px;
  font-family: 'Big John', sans-serif;
}

.project-description {
  max-width: 800px;
  margin: 0 auto 60px;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
}

.poster-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.poster-img {
  width: 100%;
  object-fit: cover;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.poster-img:hover {
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .poster-gallery {
    flex-direction: column;
    align-items: center;
  }

  .poster-img {
    max-width: 90%;
  }
}
</style>
