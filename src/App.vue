<template>
  <div class="app">
    <RouterView />
    <TheComponentShowcase class="app__the-component-showcase" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheComponentShowcase from "@/components/component-showcase/TheComponentShowcase.vue";
</script>

<style lang="scss" scoped>
.app {
  position: relative;

  width: 100vw;
  min-height: 100vh;

  overflow-x: hidden;

  &__the-component-showcase {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
  }
}
</style>
