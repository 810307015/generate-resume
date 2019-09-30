# 说明

* 采用nest.js作为nodejs的框架，比较接近springboot的写法。
* 暂时不考虑单元测试的问题。
* 数据库暂时不考虑，先用本地的json文件代替，后续可以更换成mysql或者mongodb。
* 直接在main.ts中添加一行`app.enableCors();`开启跨域。
* 使用`serve-static`中间件开启静态资源服务。
* 使用`node-xlsx`解析excel数据。
* 使用官方提供的教程，完成单个文件的上传并存到静态资源文件夹下。