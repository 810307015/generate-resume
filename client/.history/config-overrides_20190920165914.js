const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  //antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    "mock": resolve(__dirname, "src/mock"),
    "containers": resolve(__dirname, "src/containers"),
    "components": resolve(__dirname, "src/components")
  })
);