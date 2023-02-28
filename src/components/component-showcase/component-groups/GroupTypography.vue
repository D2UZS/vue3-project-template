<template>
  <div class="group-typography">
    <TheComponentShowcaseGroup>
      <template #name
        ><VCopy
          :text-to-copy="vTitle.copy.template.textToCopy"
          :title-text="vTitle.copy.template.titleText"
          >VTitle</VCopy
        ></template
      >

      <template #connection
        ><VCopy
          :text-to-copy="vTitle.copy.import.textToCopy"
          :title-text="vTitle.copy.import.titleText"
          >{{ vTitle.copy.import.textToCopy }}</VCopy
        ></template
      >

      <template #description>
        Компонент используется для стилизации заголовков. Отдельно передается
        вариант стиля и тег. <br />
        Если какой то из тегов передается через переменную (динамически), то для
        этой переменной нужно указать тип данных. Тип данных импортируется из
        <VCopy
          :text-to-copy="vTitle.copy.type.textToCopy"
          :title-text="vTitle.copy.type.titleText"
          >{{ vTitle.copy.type.textToCopy }}</VCopy
        >
      </template>

      <template #props>
        <TheComponentShowcaseGroupProp
          v-for="(prop, i) in vTitle.props"
          :key="i"
        >
          <template #name>{{ prop.name }}</template>
          <template #description>{{ prop.description }}</template>
          <template #required>{{ prop.required }}</template>
          <template #default>{{ prop.default }}</template>
          <template #type>{{ prop.type }}</template>
          <template #variants>{{ prop.variants }}</template>
        </TheComponentShowcaseGroupProp>
      </template>

      <template #components>
        Нажми, что бы скопировать нужный класс.
        <ul class="group-typography__list">
          <li
            v-for="(typography, i) in vTitle.components"
            :key="i"
            class="group-typography__item"
          >
            <VCopy
              :text-to-copy="typography.variation"
              title-text="Скопировать класс"
              :hide-icon="true"
              ><VTitle
                :tag="typography.tag"
                :variation="typography.variation"
                >{{ typography.variation }}</VTitle
              ></VCopy
            >
          </li>
        </ul>
      </template>
    </TheComponentShowcaseGroup>

    <TheComponentShowcaseGroup>
      <template #name
        ><VCopy
          :text-to-copy="vText.copy.template.textToCopy"
          :title-text="vText.copy.template.titleText"
          >VTitle</VCopy
        ></template
      >

      <template #connection
        ><VCopy
          :text-to-copy="vText.copy.import.textToCopy"
          :title-text="vText.copy.import.titleText"
          >{{ vText.copy.import.textToCopy }}</VCopy
        ></template
      >

      <template #description>
        Компонент используется для стилизации текста. Отдельно передается
        вариант стиля и тег. <br />
        Если какой то из пропсов передается через переменную (динамически), то
        для этой переменной нужно указать тип данных. Тип данных импортируется
        из
        <VCopy
          :text-to-copy="vText.copy.type.textToCopy"
          :title-text="vText.copy.type.titleText"
          >{{ vText.copy.type.textToCopy }}</VCopy
        >
      </template>

      <template #props>
        <TheComponentShowcaseGroupProp
          v-for="(prop, i) in vText.props"
          :key="i"
        >
          <template #name>{{ prop.name }}</template>
          <template #description>{{ prop.description }}</template>
          <template #required>{{ prop.required }}</template>
          <template #default>{{ prop.default }}</template>
          <template #type>{{ prop.type }}</template>
          <template #variants>{{ prop.variants }}</template>
        </TheComponentShowcaseGroupProp>
      </template>

      <template #components>
        Нажми, что бы скопировать нужный класс.
        <ul class="group-typography__list">
          <li
            v-for="(typography, i) in vText.components"
            :key="i"
            class="group-typography__item"
          >
            <VCopy
              :text-to-copy="typography.variation"
              title-text="Скопировать класс"
              :hide-icon="true"
            >
              <VText
                :tag="typography.tag"
                :variation="typography.variation"
                >{{ typography.variation }}</VText
              ></VCopy
            >
          </li>
        </ul>
      </template>
    </TheComponentShowcaseGroup>
  </div>
</template>

<script setup lang="ts">
import TheComponentShowcaseGroup from "./TheComponentShowcaseGroup.vue";
import TheComponentShowcaseGroupProp from "./TheComponentShowcaseGroupProp.vue";
import type { IGroupInterface } from "./GroupInterface";
import VCopy from "../VCopy.vue";

import VTitle from "@components/typography/VTitle.vue";
import VText from "@components/typography/VText.vue";
import type {
  titleTags,
  titleVariations,
  textTags,
  textVariations,
} from "@components/typography/TypographyTypes";

interface IVTitleComponent {
  tag?: titleTags;
  variation: titleVariations;
}

interface IVTitle extends IGroupInterface {
  components: IVTitleComponent[];
}

const vTitle: IVTitle = {
  copy: {
    template: {
      textToCopy: `<VTitle class="" tag="" variation=""></VTitle>`,
      titleText: "Скопировать шаблон компонента",
    },
    import: {
      textToCopy: `import VText from "@components/typography/VText.vue";`,
      titleText: "Скопировать подключение комонента",
    },
    type: {
      textToCopy: `import type { titleTags, titleVariations } from "@components/typography/TypographyTypes";`,
      titleText: "Скопировать подключение типа",
    },
  },
  props: [
    {
      name: "tag",
      description: "отвечает за тег",
      required: "false",
      default: "div",
      type: "string",
      variants: `"div", "h1", "h2", "h3", "h4", "h5", "h6"`,
    },
    {
      name: "variation ",
      description: "отвечает за внешний вид",
      required: "true",
      default: "",
      type: "string",
      variants: `"h1", "h2", "h3"`,
    },
  ],
  components: [
    {
      variation: "h1",
    },
    {
      tag: "h2",
      variation: "h2",
    },
    {
      tag: "h3",
      variation: "h3",
    },
  ],
};

interface IVTextComponent {
  tag?: textTags;
  variation: textVariations;
}

interface IVText extends IGroupInterface {
  components: IVTextComponent[];
}

const vText: IVText = {
  copy: {
    template: {
      textToCopy: `<VText class="" tag="" variation=""></VText>`,
      titleText: "Скопировать шаблон компонента",
    },
    import: {
      textToCopy: `import VText from "@components/typography/VText.vue";`,
      titleText: "Скопировать подключение комонента",
    },
    type: {
      textToCopy: `import type { textTags, textVariations } from "@components/typography/TypographyTypes";`,
      titleText: "Скопировать подключение типа",
    },
  },
  props: [
    {
      name: "tag",
      description: "отвечает за тег",
      required: "false",
      default: "div",
      type: "string",
      variants: `"div", "span", "p"`,
    },
    {
      name: "variation ",
      description: "отвечает за внешний вид",
      required: "true",
      default: "",
      type: "string",
      variants: `"subtitle-1", "body-1", "overline"`,
    },
  ],
  components: [
    {
      variation: "subtitle-1",
    },
    {
      tag: "span",
      variation: "body-1",
    },
    {
      tag: "p",
      variation: "overline",
    },
  ],
};
</script>

<style scoped lang="scss">
.group-typography {
  display: flex;
  flex-direction: column;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: baseline;
  }
}
</style>
