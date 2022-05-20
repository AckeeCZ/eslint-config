module.exports = {
  extends: ["react-app", "plugin:import/errors", "plugin:compat/recommended"],
  rules: {
    "react/prop-types": ["warn", { ignore: ["styles", "rules"] }],
    "react/no-unused-prop-types": [
      "warn",
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    // https://eslint.org/docs/rules/indent
    indent: [
      "error",
      4,
      {
        SwitchCase: 1,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    "react/jsx-indent": ["error", 4],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": ["error", 4],

    // https://eslint.org/docs/rules/no-var
    "no-var": "error",

    // https://eslint.org/docs/rules/max-len
    "max-len": [
      "warn",
      120,
      4,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(",
      },
    ],

    // https://eslint.org/docs/rules/new-cap
    "new-cap": "error",

    // https://eslint.org/docs/rules/no-unused-vars
    "no-unused-vars": ["warn", { args: "after-used" }],

    // https://eslint.org/docs/rules/camelcase
    camelcase: "warn",

    // https://eslint.org/docs/rules/prefer-const
    "prefer-const": "error",

    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],

    // https://eslint.org/docs/rules/no-console
    "no-console": "warn",

    // https://eslint.org/docs/rules/no-warning-comments
    "no-warning-comments": "off",

    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": ["error", "always"],

    // https://eslint.org/docs/rules/no-use-before-define
    "no-use-before-define": "warn",

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/v5.1.1/docs/rules/alt-text.md
    "jsx-a11y/alt-text": "warn",

    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "ignore",
        exports: "ignore",
        functions: "ignore",
      },
    ],

    // https://eslint.org/docs/rules/no-return-assign
    "no-return-assign": ["error"],

    /**
     * REASON: For static arrays that don't change in time it's safe to use array indexes
     *  as a keys and we don't want failed build because of that
     */
    "react/no-array-index-key": "warn",

    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],

    "object-curly-spacing": ["warn", "always"],

    // https://eslint.org/docs/rules/curly
    curly: ["warn", "all"],

    /**
     * REASON: https://ackee.slack.com/archives/C07BZ9K32/p1536067640000100
     */
    "import/prefer-default-export": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    "import/order": [
        "warn",
        {
            "newlines-between": "always-and-inside-groups",
            groups: [
                ["builtin", "external"],
                "internal",
                ["parent", "sibling", "index"],
            ],
        },
    ],

    // https://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": ["warn", "as-needed"],
    },
};
