//引入mongoose.js 文件
var mongoose = require('./mongoose')
//引入schema.js 文件
var courseSchema = require('./courseSchema')
//定义模型 表名为our
const Course = mongoose.model('Course', courseSchema) // courses

module.exports = Course
// 创建文档
// const course = new Course({
// 	name: 'node.js基础',
// 	author: 'tony'
// });
// // 将文档插入到数据库中
// course.save();


