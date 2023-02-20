<template>
  <svg class="v-icon">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  iconName: string;
  iconPath?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconPath: "/img/icons/sprites/user-icons.svg",
});

const iconPath = computed(() => `${props.iconPath}#${props.iconName}`);
</script>

<style lang="scss" scoped>
.v-icon {
  display: block;
}
</style>
