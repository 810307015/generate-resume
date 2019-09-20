const { override, fixBabelImports } = require('customize-cra');
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
    "mock": path.resolve(__dirname, "src/mock"),
    "containers": path.resolve(__dirname, "src/containers"),
    "components": path.resolve(__dirname, "src/components")
  })
);