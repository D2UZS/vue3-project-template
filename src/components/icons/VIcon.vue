<template>
  <svg class="v-icon">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script setup lang="ts">
import type { iconName } from "./IconTypes";
import { computed } from "vue";

interface Props {
  iconName: iconName;
}

const props = defineProps<Props>();

const iconPath = computed(
  () => `/img/icons/sprites/user-icons.svg#${props.iconName}`,
);
</script>

<style lang="scss" scoped>
.v-icon {
  display: block;
}
</style>
