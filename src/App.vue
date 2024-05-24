<template>
  <div class="main-grid">
    <div class="left"><EntityTreeWidget></EntityTreeWidget></div>
    <div class="main"><ThreeDPreview></ThreeDPreview></div>
  </div>
</template>

<script setup lang="ts">
 import EntityTreeWidget from './components/EntityTreeWidget.vue';
 import ThreeDPreview from './components/ThreeDPreview.vue';
</script>

<style>
.main-grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "left main";
  gap: .5rem;
}

.main-grid > div {
  border-radius: 20px;
  padding: 2rem;
}

.left {
  grid-area: left;
}

.main {
  grid-area: main;
}
</style>
