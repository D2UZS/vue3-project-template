<template>
  <div class="the-component-showcase-group">
    <div class="the-component-showcase-group__section">
      <span class="the-component-showcase-group__section-title">Название:</span>
      <slot name="name"></slot>
    </div>

    <div class="the-component-showcase-group__section">
      <span class="the-component-showcase-group__section-title"
        >Подключение:</span
      >
      <slot name="connection"></slot>
    </div>

    <div
      class="the-component-showcase-group__section the-component-showcase-group__section--column"
    >
      <span class="the-component-showcase-group__section-title">Описание:</span>
      <div><slot name="description"></slot></div>
    </div>

    <div
      class="the-component-showcase-group__section the-component-showcase-group__section--column"
    >
      <span class="the-component-showcase-group__section-title">Пропсы:</span>
      <slot name="props"></slot>
    </div>

    <div
      class="the-component-showcase-group__section the-component-showcase-group__section--column"
    >
      <span class="the-component-showcase-group__section-title"
        >Отображение:</span
      >
      <slot name="components"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.the-component-showcase-group {
  padding-block: 32px 8px;
  border-bottom-width: 1px;

  border-bottom-style: solid;

  &:last-child {
    border-bottom-width: 0;
  }

  &__section {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: baseline;

    margin-bottom: 8px;

    &--column {
      flex-direction: column;
    }
  }

  &__section-title {
    font-weight: 700;
  }
}
</style>
