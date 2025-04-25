<template>
  <footer>
    <div class="footer-wrapper max-width">
      <div class="socials-wrapper">
        <div class="socials-column">
          <p class="link-header">SITEMAP</p>
          <RouterLink to="/" class="link">Home</RouterLink>
          <RouterLink to="/#about" class="link">About me</RouterLink>
          <RouterLink to="/contact" class="link">Contact</RouterLink>
        </div>
        <div class="socials-column">
          <p class="link-header">FOLLOW</p>
          <div class="socials-row">
            <a href="https://www.linkedin.com/in/denys-blazhiievskyi-525732359/" target="_blank" class="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                <path fill="#fff"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/denchikhicks" target="_blank" class="link">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                <path fill="#fff"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <h2 class="hero-title" title="DENYSBLAHIIEVSKYIDESIGN">DENYSBLAHIIEVSKYIDESIGN</h2>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  padding-top: 17px;
  border-top: 1px solid #373737;
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-title {
  display: block;
  font-family: 'Big John', sans-serif;
  text-transform: capitalize;
  color: rgba(180, 53, 139, 0.4);
  font-size: 6.55vw;
  position: relative;
}

.hero-title:before,
.hero-title:after {
  content: attr(title);
  color: rgba(0, 0, 0, .25);
  position: absolute;
}

.hero-title:before {
  top: 1px;
  left: 1px
}

.hero-title:after {
  top: 2px;
  left: 2px
}

.socials-wrapper {
  margin: 0 var(--padding) 50px auto;
  display: flex;
  flex-direction: row;
  column-gap: 30px;
}

.socials-wrapper a {
  color: inherit;
  text-decoration: none;
}

.link {
  font-family: 'Khmer MN', sans-serif;
  font-size: 10px;
  transition: color 0.3s ease-in-out;
  font-weight: bold;
}

.link:hover {
  color: var(--color-accent);
}

.link-header {
  font-family: 'Khmer MN', sans-serif;
  font-size: 15px;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-weight: bold;
}

.socials-column {
  display: flex;
  flex-direction: column;
}

.socials-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}

@media (max-width: 1000px) {
}
</style>
<script setup lang="ts">
</script>