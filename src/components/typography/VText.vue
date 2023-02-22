<template>
  <component
    :is="tag"
    class="v-text"
    :class="typeClass"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { textTags, textTypeOptions } from "./TypographyTypes";

interface Props {
  tag?: textTags;
  typeClass: textTypeOptions;
}

withDefaults(defineProps<Props>(), {
  tag: "div",
});
</script>

<style scoped lang="scss">
@use "@style/mixins" as m-queries;

.subtitle-1 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;

  @include m-queries.sm-max {
    font-size: 12px;
    line-height: 18px;
  }
}

.body-1 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  @include m-queries.sm-max {
    font-size: 12px;
    line-height: 18px;
  }
}

.overline {
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @include m-queries.sm-max {
    font-size: 8px;
    line-height: 10px;
  }
}
</style>
