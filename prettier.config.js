module.exports = {
  printWidth: 100,
  semi: false,
  vueIndentScriptAndStyle: false,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
  ],
}
