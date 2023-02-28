<template>
  <ul class="the-component-showcase-list-groups">
    <li
      v-for="(component, i) in listGroups"
      :key="i"
      class="the-component-showcase-list-groups__item"
    >
      <button
        class="the-component-showcase-list-groups__item-btn"
        :class="{
          'the-component-showcase-list-groups__item-btn--active':
            component.name === activeGroupName,
        }"
        type="button"
        @click="toggleActiveGroup(component.name)"
      >
        {{ component.title }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  listGroups: Array<{ title: string; name: string }>;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "toggle-group", activeGroupName: string): void;
}>();

const activeGroupName = ref("");

const toggleActiveGroup = (groupName: string) => {
  activeGroupName.value = groupName;
  emit("toggle-group", activeGroupName.value);
};
</script>

<style scoped lang="scss">
.the-component-showcase-list-groups {
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 20px;
  margin: 0;

  font-size: 16px;
  line-height: 120%;

  background-color: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.5);
  list-style: none;

  transition-duration: var(--animation-duration);
  transform: translateX(0);

  &__item-btn {
    transition-duration: 0.2s;

    &--active {
      color: #ab052d;
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
