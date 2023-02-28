<template>
  <div class="the-component-showcase-group-prop">
    <b><slot name="name"></slot></b> - <slot name="description"></slot>.

    <ul class="the-component-showcase-group-prop__list">
      <li>required: <slot name="required"></slot>;</li>
      <li>default: <slot name="default"></slot>;</li>
      <li>type: <slot name="type"></slot>;</li>
      <li>variants: <slot name="variants"></slot>;</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.the-component-showcase-group-prop {
  padding-left: 16px;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0 24px;
  }
}
</style>
