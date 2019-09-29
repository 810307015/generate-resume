# 配置说明

* 首先安装node-sass包，支持scss的使用。
* 再安装react-app-rewired包，在根目录下增加config-overrides.js文件，对项目的原有webpack进行覆盖设置。
* 覆盖配置后要修改原来的package.json，将启动命令更换成
  ```json
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  ```
* yarn add customize-cra，用于对webpack进行覆盖配置以及antd的按需加载，按需配置过后无需全局引入antd的css文件，只需要在import相应的组件即可。
* 安装@babel/plugin-proposal-decorators包，在config-overrides.js中启用ES7的语法。
* yarn add antd引入阿里的UI组件。
* 支持装饰器
  1. yarn add @babel/plugin-proposal-decorators --dev 引入装饰器的包
  2. 在config-overrides.js中添加相对应的修改，主要从customize-cra引入addDecoratorsLegacy，useBabelRc 两个方法。
* 引入AlloyTeam的Eslint
  1. yarn add eslint babel-eslint eslint-plugin-react eslint-config-alloy --dev
  2. 新建一个.eslintrc.js，将github上描述的文件内容复制进去。
* redux与react-router的v4.0版本以上的结合，yarn add connected-react-router安装相应的包，参照github上引导完成对应的基础配置。
* 由于高版本的react-scripts中不支持配置格式为对象的proxy字段，需要引入http-proxy-middleware包，然后在src目录下创建setupProxy.js文件，在里面增加对proxy的描述，以提供多个不同的来源的服务（比如api和文件服务）。

## 文件夹注释

* action: redux相关的数据处理，路径别名Action
* api: 与后台交互的api，路径别名Api
* assets: 静态资源文件目录，路径别名Assets
* components: 自定义的功能组件，路径别名Components
* modal: 数据对应的modal格式，路径别名Modal
* pages: 业务组件，路径别名Pages
* routes: 路由文件，路径别名Routes
* store: redux的配置，路径别名Store
* utils: 全局公共的方法，路径别名Utils