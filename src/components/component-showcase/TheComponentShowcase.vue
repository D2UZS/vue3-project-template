<template>
  <div class="the-component-showcase">
    <div
      class="the-component-showcase__control"
      @mouseenter="componentListToggle"
      @mouseleave="componentListToggle"
    >
      <TheComponentShowcaseToggleBtn
        class="the-component-showcase__toggle-btn"
        @toggle="toggleBtnClickHandler"
      />

      <TheComponentShowcaseComponentGroupList
        class="the-component-showcase__component-group-list"
        :class="{
          'the-component-showcase__component-group-list--open':
            componentListIsOpen,
        }"
        :component-group-list="componentGroupList"
        @toggle-group="componentGroupListClickHandler"
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
import TheComponentShowcaseComponentGroupList from "./TheComponentShowcaseComponentGroupList.vue";
import TheComponentShowcaseLayout from "./TheComponentShowcaseLayout.vue";

const placedUnderControl = ref(false);
const layoutIsOpen = ref(false);
const componentListIsOpen = computed(
  () => placedUnderControl.value && layoutIsOpen.value,
);

const componentGroupList = [
  { title: "Система цветов", name: "GroupColors" },
  { title: "Типографика", name: "GroupTypography" },
  { title: "Кнопки", name: "GroupBtns" },
  { title: "Иконки", name: "GroupIcons" },
];

const activeGroupName = ref("");

const componentGroupListClickHandler = (activeGroup: string) => {
  activeGroupName.value = activeGroup;
};

function componentListToggle() {
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

  &__component-group-list {
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
