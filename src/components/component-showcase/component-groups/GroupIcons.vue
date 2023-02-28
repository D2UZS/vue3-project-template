<template>
  <div class="group-icons">
    <TheComponentShowcaseGroup>
      <template #name>
        <VCopy
          :text-to-copy="vIcon.copy.template.textToCopy"
          :title-text="vIcon.copy.template.titleText"
          >VIcon</VCopy
        >
      </template>

      <template #connection>
        <VCopy
          :text-to-copy="vIcon.copy.import.textToCopy"
          :title-text="vIcon.copy.import.titleText"
          >{{ vIcon.copy.import.textToCopy }}</VCopy
        >
      </template>

      <template #description>
        Компонент используется для вывода однотонных svg иконок. <br />
        Если нужной иконки нет, то необходимо добавить иконку в спрайт
        <code>public/img/icons/sprites/user-icons.svg</code>, предварительно
        удавлив из кода иконки все лишнее (в том числе fill). <br />
        Затем нужно добавить имя иконки в тип в файле
        <code>src/components/icons/IconTypes.ts</code>. <br />
        Затем нужно добавить имя иконки в компонент
        <code
          >src/components/component-showcase/component-groups/GroupIcons.vue</code
        >, что бы другие разработчики знали, что она уже добавлена. <br />
        Что бы использовать иконку, в компонет VIcon.vue в пропс
        <code>icon-name</code> нужно передать имя нужной иконки. Размером и
        цветом иконки можно управлять с помощью стилей. <br />
        Если какой то из пропсов передается через переменную (динамически), то
        для этой переменной нужно указать тип данных. Тип данных импортируется
        из
        <VCopy
          :text-to-copy="vIcon.copy.type.textToCopy"
          :title-text="vIcon.copy.type.titleText"
          >{{ vIcon.copy.type.textToCopy }}</VCopy
        >
      </template>

      <template #props>
        <TheComponentShowcaseGroupProp
          v-for="(prop, i) in vIcon.props"
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
        Нажми, что бы скопировать имя иконки.
        <ul class="group-icons__list">
          <li
            v-for="(icon, i) in vIcon.components"
            :key="i"
            class="group-icons__item"
          >
            <VCopy
              :text-to-copy="icon.iconName"
              title-text="Скопировать имя иконки"
              :hide-icon="true"
            >
              <VIcon
                class="group-icons__v-icon"
                :icon-name="icon.iconName"
            /></VCopy>
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

import VIcon from "@components/icons/VIcon.vue";
import type { iconName } from "@components/icons/IconTypes";

interface IVIconComponent {
  iconName: iconName;
}

interface IIcon extends IGroupInterface {
  components: IVIconComponent[];
}

const vIcon: IIcon = {
  copy: {
    template: {
      textToCopy: `<VIcon class="" icon-name="" />`,
      titleText: "Скопировать шаблон компонента",
    },
    import: {
      textToCopy: `import VIcon from "@components/icons/VIcon.vue";`,
      titleText: "Скопировать подключение комонента",
    },
    type: {
      textToCopy: `import type { iconName } from "@components/icons/IconTypes";`,
      titleText: "Скопировать подключение типа",
    },
  },
  props: [
    {
      name: "icon-name",
      description: "отвечает выводимую иконку",
      required: "true",
      default: "",
      type: "string",
      variants: "",
    },
  ],
  components: [
    {
      iconName: "like-hand",
    },
    {
      iconName: "check-circle",
    },
  ],
};
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
