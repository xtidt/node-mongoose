//引入mongoose.js 文件
var mongoose = require('./mongoose')
//引入schema.js 文件
var schema = require('./schema')
//定义模型 表名为our
var AppModel = mongoose.model('account', schema)
//导出
module.exports = AppModel
