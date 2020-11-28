var express = require('express')
var router = express.Router()

const Course = require('../lib/courseModel')
const AppModel = require('../lib/appModel')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/add', async function (req, res) {
  console.log(req.body)
  console.log('name:', req.body.name)
  //插入数据
  await AppModel
    .insertMany([
      {
        user: req.body.name,
        pwd: req.body.password,
        sex: req.body.sex
      }
    ])
    .then((data) => {
      console.log('插入成功')
    })
    .catch((err) => {
      console.log('插入失败')
    })

    // const course = new Course({
    //   name: 'node.js基础',
    //   author: 'tony'
    // });
    // // 将文档插入到数据库中
    // course.save();

  // new AppModel({
  //   user: 'name',
  //   pwd: '123',
  //   sex: '1'
  // })
  res.send('添加成功')
})

module.exports = router
