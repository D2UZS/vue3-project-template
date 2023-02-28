<template>
  <div class="group-colors">
    <TheComponentShowcaseGroup>
      <template #name>Система цветов</template>

      <template #connection
        >Не требуется. CSS-переменные цветов подключены глобально.</template
      >

      <template #description>
        Тут представлена система цветов, которые используются на проекте. Она
        соотвествует системе цветов в макете. <br />
        Все цвета должны задаваться ТОЛЬКО через эти CSS-переменные.
        <br />
        Пример: <code>color: var(--red900);</code>
      </template>

      <template #props></template>

      <template #components>
        Нажми, что бы скопировать нужную переменную цвета.
        <div class="group-colors__components">
          <ul
            v-for="(color, i) in colors"
            :key="i"
            class="group-colors__list"
          >
            <li
              v-for="(shades, j) in color.colorShades"
              :key="j"
              class="group-colors__item"
            >
              <VCopy
                :text-to-copy="`var(--${color.colorName}${shades})`"
                title-text="Скопировать переменную цвета"
                :hide-icon="true"
              >
                <div
                  class="group-colors__item-color"
                  :class="`group-colors__item-color--${color.colorName}${shades}`"
                >
                  {{ color.colorName }}{{ shades }}
                </div></VCopy
              >
            </li>
          </ul>
        </div>
      </template>
    </TheComponentShowcaseGroup>
  </div>
</template>

<script setup lang="ts">
import TheComponentShowcaseGroup from "../TheComponentShowcaseGroup.vue";
import VCopy from "../VCopy.vue";

const colors = [
  {
    colorName: "red",
    colorShades: [900, 700, 500, 300, 100],
  },
  {
    colorName: "gray",
    colorShades: [900, 700, 500, 300, 200, 100],
  },
];
</script>

<style scoped lang="scss">
.group-colors {
  &__components {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__list {
    padding: 0;
    margin: 0;

    list-style: none;
  }

  &__item-color {
    padding: 20px;

    color: #000;

    transition-duration: var(--animation-duration);

    // @media (hover: hover) {
    //   &:hover {
    //     transform: scale(1.1);
    //   }
    // }

    &:active {
      opacity: 0.8;
    }

    &--red {
      &900 {
        background-color: var(--red900);
      }

      &700 {
        background-color: var(--red700);
      }

      &500 {
        background-color: var(--red500);
      }

      &300 {
        background-color: var(--red300);
      }

      &100 {
        background-color: var(--red100);
      }
    }

    &--gray {
      &900 {
        background-color: var(--gray900);
      }

      &700 {
        background-color: var(--gray700);
      }

      &500 {
        background-color: var(--gray500);
      }

      &300 {
        background-color: var(--gray300);
      }

      &200 {
        background-color: var(--gray200);
      }

      &100 {
        background-color: var(--gray100);
      }
    }
  }
}
</style>
