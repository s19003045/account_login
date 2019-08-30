const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const userList = require('./userList.json')

const authenticate = require('./authenticate.js')

// template engine setting
app.engine('handlebars', exphbs('defaultLayout:main'))
app.set('view engine', 'handlebars')

// settting body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// use static files
app.use(express.static('public'))

// route setting for login, method:GET
app.get('/', (req, res) => {
  res.render('login')
})

// route setting for login, method:POST
app.post('/', (req, res) => {
  console.log(req.body)
  const userInput = req.body
  const userInfo = authenticate(userInput, userList.result)
  const failureMsg = '你輸入的帳號或密碼有誤，請重新輸入 !'

  // userInfo 若為 undefind，則顯示 failureMsg
  if (!userInfo) {
    console.log('not success')
    // console.log(userInfo)
    res.render('login', { failureMsg: failureMsg })
  }
  // 若 userInfo 為驗證成功的使用者資料，則將 userInfo 帶進 index.handlebars
  else if (userInfo) {
    console.log('login success')
    res.render('index', { userInfo: userInfo })
  }
})

// create server and listen
app.listen(port, () => {
  console.log(`Express server listen to http://localhost:${port}`)
})