<template>
  <component
    :is="tag"
    class="v-title"
    :class="variation"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { titleTags, titleVariations } from "./TypographyTypes";

interface Props {
  tag?: titleTags;
  variation: titleVariations;
}

withDefaults(defineProps<Props>(), {
  tag: "div",
});
</script>

<style scoped lang="scss">
@use "@style/mixins" as m-queries;

.h1 {
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;

  @include m-queries.sm-max {
    font-size: 24px;
    line-height: 28px;
  }
}

.h2 {
  font-size: 36px;
  line-height: 42px;
  font-weight: 400;

  @include m-queries.sm-max {
    font-size: 20px;
    line-height: 24px;
  }
}

.h3 {
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;

  @include m-queries.sm-max {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
