module.exports = {
  presets: [
    [
      '@binance/babel-preset-bmp',
      {
        framework: 'react',
        ts: true
      }
    ]
  ],
  plugins: ['transform-class-properties']
}
