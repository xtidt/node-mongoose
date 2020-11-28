const express = require('express')
const router = express.Router()

const Course = require('../service/courseModel')
const AccountModel = require('../service/AccountModel')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

// 新增
router.post('/add', function (req, res) {
  //插入数据
  AccountModel.insertMany({
    user: req.body.user,
    pwd: req.body.pwd,
    sex: req.body.sex
  })
  .then((data) => {
    console.log('插入成功')
  })
  .catch((err) => {
    console.log('插入失败')
  })
  res.send('添加成功')
})

// 删除
router.delete('/delete', async function (req, res) {
  // 删除单个
  const result = await AccountModel.findOneAndDelete({
    user: req.body.user
  })
  console.log(result)
  // 删除多个(或所有)
  // AccountModel.deleteMany({}).then(result => console.log(result))
  res.send('删除成功')
})

router.post('/update', async function (req, res) {
  const _user = req.body.user
  const _pwd = req.body.pwd
  const result = await AccountModel.updateOne({user: _user}, {
    pwd: _pwd
  })
  console.log(result)

  // 更新多个
  // User.updateMany({查询条件}, {要更改的值}).then(result => console.log(result))
  res.send('更新成功')
})

router.post('/course', function (req, res) {
  const course = new Course({
    name: 'node.js基础',
    author: 'tony'
  })
  // 将文档插入到数据库中
  course.save()
  res.send('添加成功')
})

module.exports = router
