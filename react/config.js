module.exports = {
  cacheDir: '.cache',
  inputDir: 'content',
  componentsDir: 'components',
  webpack: {
    resolve: {
      mainFiles: ['index.jsx', 'index.js'],
    },
    externals: ['react', 'styled-components'],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-optional-chaining'],
            },
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
  },
}
