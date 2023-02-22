<template>
  <div class="group-typography">
    <GroupComponentTemplate>
      <template #name>VTitle</template>

      <template #description>Как использовать</template>

      <template #connection>Подключение</template>

      <template #components>
        <ul class="group-icons__list">
          <li
            v-for="(typography, i) in TitleList"
            :key="i"
            class="group-icons__item"
          >
            <VTitle
              :tag="typography.tag"
              :type-class="typography.typeOptions"
              >{{ typography.typeOptions }}</VTitle
            >
          </li>
        </ul>
      </template>
    </GroupComponentTemplate>

    <GroupComponentTemplate>
      <template #name>VText</template>

      <template #description>Как использовать</template>

      <template #connection>Подключение</template>

      <template #components>
        <ul class="group-icons__list">
          <li
            v-for="(typography, i) in TextList"
            :key="i"
            class="group-icons__item"
          >
            <VText
              :tag="typography.tag"
              :type-class="typography.typeOptions"
              >{{ typography.typeOptions }}</VText
            >
          </li>
        </ul>
      </template>
    </GroupComponentTemplate>
  </div>
</template>

<script setup lang="ts">
import GroupComponentTemplate from "./GroupComponentTemplate.vue";

import VTitle from "@/components/typography/VTitle.vue";
import VText from "@/components/typography/VText.vue";
import type {
  titleTags,
  typeOptions,
  textTags,
  textTypeOptions,
} from "@/components/typography/TypographyTypes";

interface ITitleItem {
  tag?: titleTags;
  typeOptions: typeOptions;
}

interface ITextItem {
  tag?: textTags;
  typeOptions: textTypeOptions;
}

const TitleList: ITitleItem[] = [
  {
    typeOptions: "h1",
  },
  {
    tag: "h2",
    typeOptions: "h2",
  },
  {
    tag: "h3",
    typeOptions: "h3",
  },
];

const TextList: ITextItem[] = [
  {
    typeOptions: "subtitle-1",
  },
  {
    tag: "span",
    typeOptions: "body-1",
  },
  {
    tag: "p",
    typeOptions: "overline",
  },
];
</script>

<style scoped lang="scss"></style>
