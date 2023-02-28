<template>
  <div class="app">
    <RouterView />
    <TheComponentShowcase class="app__the-component-showcase" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheComponentShowcase from "@components/component-showcase/TheComponentShowcase.vue";
</script>

<style lang="scss" scoped>
.app {
  position: relative;

  width: 100vw;
  min-height: 100vh;

  color: var(--gray900);
  font-family: HeliosC, Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  background-color: var(--gray100);

  &__the-component-showcase {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
  }
}
</style>
