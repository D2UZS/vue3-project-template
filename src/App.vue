<template>
  <ExampleComponent />
  <div class="example">текст</div>
</template>

<script setup lang="ts">
import ExampleComponent from "./components/ExampleComponent.vue";

defineProps<{
  example?: string;
}>();

defineEmits<{
  example?: string;
}>();
</script>

<style lang="scss" scoped>
@use "@style/utility-classes";
@use "@style/mixins";

.example {
  font-size: 20px;
  @include mixins.sm-max {
  }
}
</style>
