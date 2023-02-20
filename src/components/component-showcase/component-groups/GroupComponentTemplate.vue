<template>
  <div class="group-component-template">
    <div class="group-component-template__section">
      <span class="group-component-template__section-title"
        >Имя компонента:
      </span>
      <slot name="name"></slot>
    </div>

    <div class="group-component-template__section">
      <span class="group-component-template__section-title">Описание: </span>
      <slot name="description"></slot>
    </div>

    <div class="group-component-template__section">
      <span class="group-component-template__section-title">Подключение: </span>
      <slot name="connection"></slot>
    </div>

    <div class="group-component-template__section">
      <slot name="components"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.group-component-template {
  &__section {
    margin-bottom: 8px;
  }

  &__section-title {
    font-weight: 700;
  }
}
</style>
