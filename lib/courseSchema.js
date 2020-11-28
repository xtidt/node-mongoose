var mongoose = require('./mongoose.js')
//定义schema
var schema = mongoose.Schema

// 创建集合规则
const courseSchema = new schema({
	name: String,
	author: String
});

module.exports = courseSchema

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
// const Course = mongoose.model('Course', courseSchema) // courses

// // 创建文档
// const course = new Course({
// 	name: 'node.js基础',
// 	author: 'tony'
// });
// // 将文档插入到数据库中
// course.save();
