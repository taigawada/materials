module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/typescript', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        'vue/html-indent': ['error', 4],
        'vue/attribute-hyphenation': ['off'],
        'vue/v-on-event-hyphenation': ['off'],
    },
};
