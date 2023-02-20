const propertyGroups = require("./.stylelint-order-preset.cjs");

// TODO: stylelint-selector-bem-pattern

module.exports = {
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["**/*.(scss|css|html|vue)"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-prettier",
    "stylelint-config-prettier-scss",
  ],
  rules: {
    "declaration-property-value-no-unknown": true,
    "function-url-quotes": "always",
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-empty-line-before": null,
    "no-empty-source": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-max-type": [
      0,
      {
        ignore: ["custom-elements"],
      },
    ],
    "selector-max-class": 1,
    "alpha-value-notation": "number",
    "shorthand-property-no-redundant-values": true,
    "selector-pseudo-class-disallowed-list": ["root"],
    "number-max-precision": 2,
    "declaration-no-important": true,
    "block-no-empty": [
      true,
      {
        severity: "warning",
      },
    ],
    "property-disallowed-list": [
      "flex",
      "font",
      "border",
      "background",
      "grid",
      "grid-template",
      "border-top",
      "border-bottom",
      "border-right",
      "border-left",
      "border-block",
      "border-block-start",
      "border-block-end",
      "border-inline",
      "border-inline-start",
      "border-inline-end",
      "font-variant",
      "font-emphasize",
      "text-emphasis",
      "text-decoration",
      "border-image",
      "outline",
      "transition",
      "animation",
    ],
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: "always",
      noEmptyLineBetween: true,
    })),
  },
};
