import { defineConfig } from 'eslint-define-config';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default defineConfig([
    {
        files: ["**/*.js", "**/*.vue"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: vueParser,
            parserOptions: {
                parser: "@babel/eslint-parser",
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-env"],
                },
            },
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
            },
        },
        plugins: {
            vue: vuePlugin,
        },
        rules: {
            "vue/no-unused-vars": "warn",
        },
    },
]);
