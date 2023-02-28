<template>
  <div class="the-component-showcase">
    <div
      class="the-component-showcase__control"
      @mouseenter="controlToggle"
      @mouseleave="controlToggle"
    >
      <TheComponentShowcaseToggleBtn
        class="the-component-showcase__toggle-btn"
        @toggle="toggleBtnClickHandler"
      />

      <TheComponentShowcaseListGroups
        class="the-component-showcase__list-groups"
        :class="{
          'the-component-showcase__list-groups--open': componentListIsOpen,
        }"
        :list-groups="listGroups"
        @toggle-group="listGroupsClickHandler"
      />
    </div>

    <TheComponentShowcaseLayout
      class="the-component-showcase__layout"
      :class="{
        'the-component-showcase__layout--open': layoutIsOpen,
        'the-component-showcase__layout--move': componentListIsOpen,
      }"
      :active-group-name="activeGroupName"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import TheComponentShowcaseToggleBtn from "./TheComponentShowcaseToggleBtn.vue";
import TheComponentShowcaseListGroups from "./TheComponentShowcaseListGroups.vue";
import TheComponentShowcaseLayout from "./TheComponentShowcaseLayout.vue";

const placedUnderControl = ref(false);
const layoutIsOpen = ref(false);
const componentListIsOpen = computed(
  () => placedUnderControl.value && layoutIsOpen.value,
);

const listGroups = [
  { title: "Система цветов", name: "GroupColors" },
  { title: "Типографика", name: "GroupTypography" },
  { title: "Кнопки", name: "GroupBtns" },
  { title: "Иконки", name: "GroupIcons" },
  { title: "Песочница", name: "GroupSandbox" },
];

const activeGroupName = ref("");

const listGroupsClickHandler = (activeGroup: string) => {
  activeGroupName.value = activeGroup;
};

function controlToggle() {
  placedUnderControl.value = !placedUnderControl.value;
}

function toggleBtnClickHandler(isActive: boolean) {
  layoutIsOpen.value = isActive;
}
</script>

<style lang="scss" scoped>
.the-component-showcase {
  --animation-duration: 0.2s;
  --btn-width: 20px;

  &__control {
    height: 100%;
  }

  &__toggle-btn {
    position: relative;
    z-index: 2;

    width: var(--btn-width);
    height: 100%;
  }

  &__list-groups {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    width: 250px;
    height: 100%;

    &--open {
      transform: translateX(100%);
    }
  }

  &__layout {
    position: absolute;
    top: 0;
    left: 100%;

    width: calc(100vw - var(--btn-width));
    height: 100%;

    &--open {
      transform: translateX(0);
    }

    &--move {
      transform: translateX(250px);
    }
  }
}
</style>
