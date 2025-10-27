import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  prettierRecommended,
  // 添加自定义规则配置
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // 忽略以 _ 开头的函数参数
          varsIgnorePattern: '^_', // 忽略以 _ 开头的变量
          caughtErrorsIgnorePattern: '^_', // 忽略以 _ 开头的捕获的错误变量
        },
      ],
      'no-unused-vars': 'off', // 关闭 JS 的 no-unused-vars，使用 TypeScript 版本
    },
  },
])
