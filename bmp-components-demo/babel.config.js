// babel-preset-taro
// for more options and default values:
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
        reactJsxRuntime: 'classic'
      }
    ]
  ],
  plugins: ['transform-class-properties']
}
