<template>
  <div class="group-sandbox">
    <input
      v-if="type === 'email'"
      v-model="text"
      class="group-sandbox__input"
      type="email"
      placeholder="email"
    />
    <input
      v-else
      v-model="text"
      class="group-sandbox__input"
      type="tel"
      placeholder="tel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const text = ref("Edit me");
const type = ref("email");

watch(text, (newText) => {
  newText.length === 0 ? (type.value = "tel") : (type.value = "email");
});
</script>

<style scoped lang="scss">
.group-sandbox {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  &__input {
    padding: 10px;
    border-width: 1px;
  }
}
</style>
