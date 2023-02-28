<template>
  <div class="group-btns">
    <TheComponentShowcaseGroup>
      <template #name></template>

      <template #connection></template>

      <template #description></template>

      <template #props>
        <TheComponentShowcaseGroupProp>
          <template #name></template>

          <template #description></template>

          <template #required></template>

          <template #default></template>

          <template #type></template>

          <template #variants></template>
        </TheComponentShowcaseGroupProp>
      </template>

      <template #components></template>
    </TheComponentShowcaseGroup>
  </div>
</template>

<script setup lang="ts">
import TheComponentShowcaseGroup from "../TheComponentShowcaseGroup.vue";
import TheComponentShowcaseGroupProp from "../TheComponentShowcaseGroupProp.vue";
</script>

<style scoped lang="scss"></style>
