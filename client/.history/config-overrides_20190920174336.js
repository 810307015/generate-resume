const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, useBabelRc } = require('customize-cra');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = override(
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 项目别名
  addWebpackAlias({
    "@": resolve("src"),
    "@assets": resolve("src/assets"),
    "@action": resolve("src/action"),
    "@api": resolve("src/api"),
    "@components": resolve("src/component"),
    "@modal": resolve("src/modal"),
    "@pages": resolve("src/pages"),
    "@routes": resolve("src/routes"),
    "@store": resolve("src/store"),
    "@utils": resolve("src/utils"),
  }),
  // 支持装饰器
  addDecoratorsLegacy(),
  useBabelRc()
);