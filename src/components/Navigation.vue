<template>
  <section class="navbar">
    <div class="max-width">
      <div class="navbar-container">
        <RouterLink to="/"><h2 class="navbar-item">denys Blazhiievskyi</h2></RouterLink>

        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div :class="['link-container', { open: isOpen }]">
          <RouterLink to="/#about">
            <h3 :class="`navbar-item nav-hover ${route.hash==='#about' ? 'nav-active' : ''}`">About me</h3>
          </RouterLink>
          <RouterLink to="/projects">
            <h3 :class="`navbar-item nav-hover ${path==='/projects' ? 'nav-active' : ''}`">Projects</h3>
          </RouterLink>
          <RouterLink to="/contact">
            <h3 :class="`navbar-item nav-hover ${path==='/contact' ? 'nav-active' : ''}`">Contact</h3>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute();
const path = route.path;

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>


<style scoped>
.navbar {
  padding: 20px var(--padding);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.navbar a {
  text-decoration: none;
  color: inherit;
}

.navbar-item {
  font-family: 'Big John', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}

.nav-hover:hover, .nav-active {
  color: var(--color-accent);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.link-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  column-gap: 15px;
  margin-right: var(--padding);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: white;
  transition: 0.3s;
}

@media (max-width: 1000px) {
  .link-container {
    position: absolute;
    top: 50px;
    right: 0;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.9);
    padding: 15px;
    border-radius: 4px;
    display: none;
    row-gap: 10px;
    margin-right: 0;
  }

  .link-container.open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}
</style>
