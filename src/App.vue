<template>
  <div class="app">
    <RouterView />
    <TheComponentShowcase class="app__the-component-showcase" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import "@/assets/base.scss";

import TheComponentShowcase from "@/components/component-showcase/TheComponentShowcase.vue";
</script>

<style lang="scss" scoped>
.app {
  position: relative;

  min-height: 100vh;

  &__the-component-showcase {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
