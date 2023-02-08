/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

// TODO: написать свое правило для обязательного lang="scss" атрибута
// TODO: ПРОВЕРИТЬ И ВНЕДРИТЬ USE

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:vue-scoped-css/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-var": "error",
    "vue-scoped-css/no-unused-selector": "off",

    // Проверка на самозакрывающийся тег или компонент:
    // "always" — требовать самозакрытия элементов, у которых нет своего содержимого;
    // "never" — запретить самозакрытие;
    // "any" — не применять самозакрывающийся стиль.
    // ! Автоматически не исправляет
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any", // ("never" по умолчанию) — стиль хорошо известных пустых элементов HTML
          normal: "any", // ("always" по умолчанию) — стиль известных элементов HTML за исключением пустых элементов.
          component: "always", // ("always" по умолчанию) — стиль пользовательских компонентов Vue.js.
        },
        svg: "always", // ("always" по умолчанию) — стиль известных элементов SVG.
        math: "always", // ("always" по умолчанию) — стиль известных элементов MathML.
      },
    ],

    // Проверка последовательного отступа в шаблоне <template>
    "vue/html-indent": [
      "error",
      2, // type (number | "tab") — тип отступа. Значение по умолчанию 2. Если это число, то это количество пробелов для одного отступа. Если это "tab", он использует одну вкладку для одного отступа.
      {
        attribute: 1, // множитель отступа для атрибутов. Значение по умолчанию 1.
        baseIndent: 1, // множитель отступа для операторов верхнего уровня. Значение по умолчанию 1.
        closeBracket: 0, // множитель отступа для правых скобок. Значение по умолчанию 0.
        alignAttributesVertically: true, // условие того, должны ли атрибуты выравниваться по вертикали с первым атрибутом в многострочном случае или нет. По умолчанию true.
        ignores: [], // селектор для игнорирования узлов.
      },
    ],

    //Проверка регистра для стиля именования компонентов в шаблоне.
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase", // (по умолчанию) — требует написание имен тегов в регистре паскаля. Еще есть значение "kebab-case".
      {
        registeredComponentsOnly: true, // если true, проверяются только зарегистрированные компоненты, если false проверьте все. По умолчанию true.
        ignores: [], // имена элементов, которые следует игнорировать. Устанавливает разрешающее имя элемента. Например, пользовательские элементы или компоненты Vue со специальным именем. Вы можете установить регулярное выражение, написав его как "/^name/".
      },
    ],

    //Проверка на определенный регистр для имени компонента.
    // ! Подходит для Options Api
    "vue/component-definition-name-casing": ["error", "PascalCase"],

    // Проверка имени компонента — оно должно соответствовать имени файла, в котором он находится.
    // ! Подходит для Options Api
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"], // массив расширений файлов для проверки. По умолчанию установлено значение ["jsx"].
        shouldMatchCase: true, // должно ли имя компонента также соответствовать регистру имени файла. По умолчанию установлено значение false.
      },
    ],

    // Порядок свойств в компонентах.
    // ! Подходит для Options Api
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "methods",
          ["template", "render"],
          "renderError",
          "LIFECYCLE_HOOKS",
        ],
      },
    ],
  },
};
