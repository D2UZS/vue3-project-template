<template>
  <button
    class="the-component-showcase-toggle-btn"
    type="button"
    @click="toggleActive"
  >
    <div
      class="the-component-showcase-toggle-btn__icon"
      :class="{
        'the-component-showcase-toggle-btn__icon--left': isActive,
      }"
    >
      &#10095;
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "toggle", isActive: boolean): void;
}>();

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
  emit("toggle", isActive.value);
};
</script>

<style scoped lang="scss">
.the-component-showcase-toggle-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;

  background-color: #8ea7e9;

  transition-duration: var(--animation-duration);

  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: #7286d3;
    }
  }

  &__icon {
    transition-duration: var(--animation-duration);

    &--left {
      transform: scale(-1, 1);
    }
  }
}
</style>
