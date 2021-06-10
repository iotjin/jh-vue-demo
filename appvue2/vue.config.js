
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  assetsDir: './',
  outputDir: path.relative(__dirname, './dist'),
  outputDir: 'dist',
  // 资源路径简写
  chainWebpack: config => {
    //添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@tab", resolve("src/assets/tab"))
  },
  // less设置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve("src/less/global.less")
      ]
    }
  }

}
