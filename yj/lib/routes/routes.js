// 引入路由
import admin from "./admin"

// 导出所有路由
module.exports = function (app){
  /**
   * 配置路由
   * app是app.js传过来的express路由对象
   */
  app.use('/', admin);
};