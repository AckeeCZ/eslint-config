module.exports = {
    env: {
        "node": true,
        "browser": true,
        "es6": true,
        "jest/globals": true,
        "mocha": true        
    },
    extends: [
        "airbnb"
    ],
    /* FRONTEND SETTINGS */
    parser: "babel-eslint",
    parserOptions: {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    plugins: [
        "jest"
    ],
    /* END FRONTEND SETTINGS */

    rules: {
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": "off",
       
        /**
         * Seems Deprecated
         */
        "jsx-a11y/href-no-hash": "off",

        // https://eslint.org/docs/rules/indent
        "indent": ["warn", 4],
        
        /** TO DECIDE
         * - frontend set "unix" meanwhile backend set the rule off
         * - airbnb agrees with FE
         */
        // https://eslint.org/docs/rules/linebreak-style
        "linebreak-style": [ "error", "unix"],

        // ==============================================================

        /** TO DECIDE
         * - I woud turn it off on per file basis if necessary
         */
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        "import/prefer-default-export": "off",

        /** TO DECIDE
         * - In my opinion, it's valid rule and I would keep it in config
         */
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        "jsx-a11y/no-static-element-interactions": "off",

        /** TO DECIDE
         * I would turn it off on per file basis if necessary
         */
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        "react/forbid-prop-types": "off",

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent": ["error", 4],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-indent-props": ["error", 4],

        // =================================================================
        
        // https://eslint.org/docs/rules/no-var        
        "no-var": "warn",

        /** TO DECIDE
         * - do we need dangle underscores? I would kept the rule
         */
        // https://eslint.org/docs/rules/no-underscore-dangle
        "no-underscore-dangle": "off",
        
        /** TO DECIDE
         * - why we need to have this turned off? I would kept it
         */
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        "import/no-unresolved": "off",
        
        // https://eslint.org/docs/rules/max-len
        "max-len": [
            "warn", 
            160, 
            4,
            {
            "ignoreComments": true,
            "ignoreUrls": true,
            "ignorePattern": "^\\s*var\\s.+=\\s*require\\s*\\("
            }
        ],

        // https://eslint.org/docs/rules/new-cap
        "new-cap": "warn",

        /** TO DECIDE
         * Why both off?
         */
        // https://eslint.org/docs/rules/arrow-parens
        "arrow-parens": "off",
        // https://eslint.org/docs/rules/arrow-body-style
        "arrow-body-style": "off",
        
        // https://eslint.org/docs/rules/no-unused-vars
        "no-unused-vars": "warn",

        // https://eslint.org/docs/rules/camelcase
        "camelcase": "warn",

        // https://eslint.org/docs/rules/prefer-const
        "prefer-const": "warn",

        /** TO DECIDE
         * Why off? We dont want a curly spacing style. If it's true, It would be better to have "never"
         */
        // https://eslint.org/docs/rules/object-curly-spacing
        "object-curly-spacing": "off",

        // https://eslint.org/docs/rules/func-names
        "func-names": "off",

        // https://eslint.org/docs/rules/space-before-function-paren
        "space-before-function-paren": ["error",  "never"],

        // https://eslint.org/docs/rules/no-console
        "no-console": "error",

        /** TO DECIDE
         * Any trouble with arrow function? Is it because of generators?
         */
        // https://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-arrow-callback": "off",

        // https://eslint.org/docs/rules/no-warning-comments
        "no-warning-comments": "warn",

        /** TO DECIDE
         * I agree with keeping it turned off
         */
        // https://eslint.org/docs/rules/no-warning-comments
        "no-param-reassign": "off",

        /** TO DECIDE
         * - exceptions?
         */
        // https://eslint.org/docs/rules/spaced-comment
        "spaced-comment": [
            "error", 
            "always",
            {
                "exceptions": [
                    "region Winston",
                    "endregion"
                ]
            }
        ],

        /** TO DECIDE
         * - really?
         */
        // https://eslint.org/docs/rules/no-use-before-define
        "no-use-before-define": "off",

        /**
         * Seems depreacted
         */
        "jsx-a11y/img-has-alt": "off",

        /**
         * Deprecated
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
         */
        "react/jsx-space-before-closing": "off",

        // https://eslint.org/docs/rules/comma-dangle
        "comma-dangle": [
            "error", 
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "ignore",
                "exports": "ignore",
                "functions": "ignore"
            }
        ]
    }
}