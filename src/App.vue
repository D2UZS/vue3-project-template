<template>
  <ExampleComponent />
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
.test-calss {
}
</style>
