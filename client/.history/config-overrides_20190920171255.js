const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = override(
  //antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 项目别名
  addWebpackAlias({
    "@": resolve("src"),
    "Assets": resolve("src/assets"),
    "Action": resolve("src/action"),
    "Api": resolve("src/api"),
    "Components": resolve("src/component"),
    "Modal": resolve("src/modal"),
    "Pages": resolve("src/pages"),
    "Routes": resolve("src/routes"),
    "Store": resolve("src/store"),
    "Utils": resolve("src/utils"),
  })
);