module.exports = {
    env: {
        node: true,
    },
    extends: ['./index.js'],
    rules: {
        /**
         * REASON: Some 3rd party libraries use dangles for functions names.
         */
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',
    },
};
