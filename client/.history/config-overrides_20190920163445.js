const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}