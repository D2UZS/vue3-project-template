<template>
  <div class="group-icons">
    <GroupComponentTemplate>
      <template #name>Иконки</template>

      <template #description>Как использовать</template>

      <template #connection>Подключение</template>

      <template #components>
        <ul class="group-icons__list">
          <li
            v-for="(icon, i) in icons"
            :key="i"
            class="group-icons__item"
          >
            <VIcon
              class="group-icons__v-icon"
              :icon-name="icon"
            />
          </li>
        </ul>
      </template>
    </GroupComponentTemplate>
  </div>
</template>

<script setup lang="ts">
import GroupComponentTemplate from "./GroupComponentTemplate.vue";
import VIcon from "@/components/VIcon.vue";

const icons = ["like-hand", "like-hand", "like-hand"];
</script>

<style scoped lang="scss">
.group-icons {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    padding: 0;
    margin: 0;

    list-style: none;
  }

  &__v-icon {
    width: 36px;
    height: 36px;

    fill: red;
  }
}
</style>
