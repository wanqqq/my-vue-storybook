const path = require('path');
// 在这里你可以重写storybook 默认的webpack配置
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'

  // 新加less语法加载器
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader',
      // {
      //   loader: 'style-resources-loader',
      //   options: {
      //     patterns: [path.resolve(__dirname, '../src/assets/style/common/mixins.less')],
      //   },
      // },
    ],
  });

  // 新增@别名
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@': path.resolve(__dirname, '../src'),
  });

  // Return the altered config
  return config;
};
