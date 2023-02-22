<template>
  <div class="group-colors">
    <GroupComponentTemplate>
      <template #name>Система цветов</template>

      <template #description>Как использовать</template>

      <template #connection
        >Не требуется. CSS-переменные цветов подключены глобально.</template
      >

      <template #components>
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
              <button
                class="group-colors__item-button"
                type="button"
                :class="getColorClassModifier(color.colorName, shades)"
                title="Скопировать в буфер обмена"
                @click="
                  copyTextToClipboard(`var(--${color.colorName}${shades})`)
                "
              >
                {{ color.colorName }}{{ shades }}
              </button>
            </li>
          </ul>
        </div>
      </template>
    </GroupComponentTemplate>
  </div>
</template>

<script setup lang="ts">
import GroupComponentTemplate from "./GroupComponentTemplate.vue";
import { copyTextToClipboard } from "@/utils";

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

function getColorClassModifier(color: string, shades: number) {
  return `group-colors__item-button--${color}${shades}`;
}
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

  &__item-button {
    padding: 20px;

    color: #000;

    transition-duration: var(--animation-duration);

    // @media (hover: hover) {
    //   &:hover {
    //     transform: scale(1.1);
    //   }
    // }

    &:active {
      opacity: 0.9;
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
