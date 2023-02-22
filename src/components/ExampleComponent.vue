<template>
  <div class="example-class">
    <div class="foo">Hello.</div>
  </div>
  <ul>
    <div></div>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  example?: string;
}>();

defineEmits<{
  example?: string;
}>();
</script>

<style lang="scss" scoped>
@use "@style/variables" as vars;
@use "@style/functions" as func;

.example-class,
.example-inner {
  --custom: 10px;

  content: none;

  position: relative;
  z-index: vars.$z-index-header;

  display: flex;
  flex-direction: column;
  gap: 10px;

  box-sizing: border-box;
  width: 10px;
  max-width: 0;
  height: 15px;
  padding-block: 10px 13px;
  padding-inline: 15px;
  margin: func.rhythm(5);

  font-size: 50px;
  font-size: 15px;

  opacity: 0;
}
</style>
