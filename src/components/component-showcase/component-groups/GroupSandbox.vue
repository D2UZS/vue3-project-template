<template>
  <div class="group-sandbox">
    <EmailPhoneInput />
  </div>
</template>

<script setup lang="ts">
import EmailPhoneInput from "@components/EmailPhoneInput.vue";
</script>

<style scoped lang="scss">
@use "@style/utility-classes/_visually-hidden.scss";

.group-sandbox {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>
