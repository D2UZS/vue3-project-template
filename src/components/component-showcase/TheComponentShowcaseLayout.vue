<template>
  <div class="the-component-showcase-layout">
    <div class="the-component-showcase-layout__content">
      <transition
        name="component-fade"
        mode="out-in"
      >
        <Component :is="activeGroup" />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import GroupColors from "./component-groups/GroupColors.vue";
import GroupTypography from "./component-groups/GroupTypography.vue";
import GroupBtns from "./component-groups/GroupBtns.vue";
import GroupIcons from "./component-groups/GroupIcons.vue";
import GroupSandbox from "./component-groups/GroupSandbox.vue";

interface Props {
  activeGroupName: string;
}

const props = defineProps<Props>();

interface PossibleComponents {
  [index: string]: object;
}

const listGroupСomponents: PossibleComponents = {
  GroupColors,
  GroupTypography,
  GroupBtns,
  GroupIcons,
  GroupSandbox,
};

const activeGroup = computed(() => listGroupСomponents[props.activeGroupName]);
</script>

<style scoped lang="scss">
.the-component-showcase-layout {
  display: flex;
  justify-content: center;

  background-color: #fff;
  overflow: auto;

  transition-duration: var(--animation-duration);
  transform: translateX(-100%);

  &__content {
    width: 100%;
    padding-inline: 20px;
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition-timing-function: ease;
  transition-duration: 0.2s;
  transition-property: opacity;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
