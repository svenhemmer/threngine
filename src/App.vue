<template>
  <div class="main-grid">
    <div class="tree"><EntityTreeWidget></EntityTreeWidget></div>
    <div class="details"><DetailedWidget></DetailedWidget></div>
    <div class="main"><ThreeDPreview></ThreeDPreview></div>
  </div>
</template>

<script setup lang="ts">
 import EntityTreeWidget from './components/EntityTreeWidget.vue';
 import ThreeDPreview from './components/ThreeDPreview.vue';
 import DetailedWidget from './components/DetailedWidget.vue';
</script>

<style>
.main-grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    "tree main"
    "details main";
  gap: .5rem;
}

.main-grid > div {
  border-radius: 20px;
  padding: 2rem;
}

.tree {
  grid-area: tree;
}

.details {
  grid-area: details;
}

.main {
  grid-area: main;
}
</style>
