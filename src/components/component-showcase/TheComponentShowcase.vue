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

      <ul
        class="the-component-showcase__component-list"
        :class="{
          'the-component-showcase__component-list--open':
            componentListIsOpen && layoutIsOpen,
        }"
      >
        <li
          v-for="(component, i) in componentList"
          :key="i"
          class="the-component-showcase__component-item"
        >
          {{ component }}
        </li>
      </ul>
    </div>

    <div
      class="the-component-showcase__layout"
      :class="{
        'the-component-showcase__layout--open': layoutIsOpen,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheComponentShowcaseToggleBtn from "./TheComponentShowcaseToggleBtn.vue";

const componentListIsOpen = ref(false);
const layoutIsOpen = ref(false);

const componentList = [
  "компонент 1",
  "компонент 2",
  "компонент 3",
  "компонент 4",
];

function componentListToggle() {
  componentListIsOpen.value = !componentListIsOpen.value;
}

function toggleBtnClickHandler(isActive: boolean) {
  console.log(isActive);

  layoutIsOpen.value = isActive;
}
</script>

<style lang="scss" scoped>
.the-component-showcase {
  --animation-duration: 0.2s;
  position: relative;

  height: 100%;

  &__control {
    height: 100%;
  }

  &__component-list {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

    width: 250px;
    height: 100%;
    padding: 0;
    padding: 20px;
    margin: 0;

    font-size: 16px;
    line-height: 120%;

    background-color: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 0.5);
    list-style: none;

    transition-duration: var(--animation-duration);
    transform: translateX(0);

    &--open {
      transform: translateX(100%);
    }
  }

  &__component-item {
  }

  &__layout {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100%;

    background-color: red;

    transition-duration: var(--animation-duration);
    transform: translateX(-100%);

    &--open {
      transform: translateX(0);
    }
  }

  &__toggle-btn {
    position: relative;
    z-index: 2;

    height: 100%;
  }
}
</style>
