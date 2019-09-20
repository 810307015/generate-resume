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
    "@": resolve(__dirname, "/src"),
    "Assets": resolve(__dirname, "/src/assets"),
  })
);