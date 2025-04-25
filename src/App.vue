<template>
  <RouterView/>
</template>

<script setup>
import {nextTick, watch} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const initObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    })
  })

  document.querySelectorAll('.animation').forEach((element) => observer.observe(element));
}

watch(route, async () => {
  await nextTick()
  initObserver()
})
</script>
