<script setup>

import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import projects from "@/projects.js";
</script>

<template>
  <Navigation/>

  <section class="projects">
    <div class="max-width">
      <h1 class="title">Projects</h1>
      <div class="projects-wrapper">
        <RouterLink :to="`/${project.title}`" v-for="project in projects" :key="project.title" class="project">
          <img :src="project.previewImg" :alt="`${project.title} preview`"/>
          <h3 class="project-title">{{ project.title }}</h3>
        </RouterLink>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<style scoped>
.projects {
  flex: 1;
  background-size: cover;
  background: url("@/assets/img/bg.jpg") repeat center;
  padding: 55px var(--padding) 0;
}

.projects-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 140px;
  margin-top: 55px;
  align-items: flex-end;
}

.title {
  text-align: center;
  font-size: 35px;
  text-transform: capitalize;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 25px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.project img {
  transition: transform 0.5s ease-in-out;
}

.project img:hover {
  transform: scale(1.05);
}

.project-title {
  font-size: 23px;
  text-transform: capitalize;
  text-align: center;
}

@media (max-width: 1000px) {
  .projects {
    padding: 40px 20px;
    background-position: center;
  }

  .projects-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin-top: 40px;
  }

  .title {
    font-size: 28px;
  }

  .project {
    width: 100%;
    max-width: 300px;
  }

  .project img {
    height: auto;
    object-fit: cover;
  }

  .project-title {
    font-size: 18px;
  }
}
</style>