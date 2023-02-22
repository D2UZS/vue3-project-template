<template>
  <div class="the-page-index">
    <div class="the-page-index__content">индексная страница</div>
    <ExampleComponent />
  </div>
</template>

<script setup lang="ts">
import ExampleComponent from "@components/ExampleComponent.vue";
</script>

<style scoped lang="scss">
.the-page-index {
  display: flex;
  justify-content: center;

  &__content {
    width: 100%;
    max-width: 1440px;
  }
}
</style>
