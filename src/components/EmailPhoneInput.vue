<template>
  <div class="email-phone-input">
    <input
      ref="input"
      v-model.trim="inputValue"
      v-maska="bindedObject"
      class="email-phone-input__input"
      :type="currentType"
      placeholder="Номер телефона или электронная почта"
      :data-maska="mask"
      @keydown.space.prevent
      @input="inputHandler"
    />
    <p>inputValue: {{ inputValue }}</p>
    <p>bindedObject: {{ bindedObject.masked }}</p>
    <p>bindedObject: {{ bindedObject.unmasked }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import { vMaska } from "maska";

interface MaskaDetail {
  masked: string;
  unmasked: string;
  completed: boolean;
}

const inputValue = ref("");
const bindedObject: MaskaDetail = reactive({
  masked: "",
  unmasked: "",
  completed: false,
});
const currentType = ref("email");
const input = ref();

const phoneMask = "+7(###)###-##-##";
const mask = ref("");

function inputHandler(value: any) {
  if (value.inputType === "deleteContentBackward") {
    mask.value = "";
    return;
  }

  if (inputValue.value === "+7") {
    mask.value = phoneMask;
  }
}

// watch(inputValue, (newValue) => {
//   newValue.length > 2
//     ? (currentType.value = "tel")
//     : (currentType.value = "email");
// });

// watch(currentType, (newType) => {
//   if (newType === "tel") {
//     mask.value = phoneMask;
//   } else if (newType === "email") {
//     mask.value = "";
//   }
// });
</script>

<style scoped lang="scss">
.email-phone-input {
  &__input {
    padding: 10px;
    border-width: 1px;
  }
}
</style>
