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

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        "react/jsx-indent": ["error", 4],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        "react/jsx-indent-props": ["error", 4],

        // =================================================================
        
        // https://eslint.org/docs/rules/no-var        
        "no-var": "warn",
        
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

        /** 
         * REASON: possible changes. When someone reduce number of arguments from 2 to 1, we
         * donn't want to force him remove parens.
         */
        // https://eslint.org/docs/rules/arrow-parens
        "arrow-parens": "off",

        /**
         * REASON: Similar to "arrow-parens" reason.
         */
        // https://eslint.org/docs/rules/arrow-body-style
        "arrow-body-style": "off",
        
        // https://eslint.org/docs/rules/no-unused-vars
        "no-unused-vars": "warn",

        // https://eslint.org/docs/rules/camelcase
        "camelcase": "warn",

        // https://eslint.org/docs/rules/prefer-const
        "prefer-const": "warn",

        // https://eslint.org/docs/rules/func-names
        "func-names": "off",

        // https://eslint.org/docs/rules/space-before-function-paren
        "space-before-function-paren": ["error",  "never"],

        // https://eslint.org/docs/rules/no-console
        "no-console": "error",

        // https://eslint.org/docs/rules/no-warning-comments
        "no-warning-comments": "warn",

        /** TO DECIDE
         */
        // https://eslint.org/docs/rules/no-warning-comments
        "no-param-reassign": "off",

        // https://eslint.org/docs/rules/spaced-comment
        "spaced-comment": ["error", "always"],

        /** TO DECIDE
         * JSm:  It's more clear (for us) when you first see what function does and then how it's implemented 
         */
        // https://eslint.org/docs/rules/no-use-before-define
        "no-use-before-define": "off",

        /**
         * Seems depreacted
         */
        "jsx-a11y/img-has-alt": "off",

        /**
         * @deprecated
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