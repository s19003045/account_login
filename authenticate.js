// userDetail 為 待驗證的使用者資料
// userList 為 資料庫的使用者資料
function authenticate(userInput, userList) {

  // 驗證成功，userInfo 為使用者的資料
  // 驗證不成功，userInfo 為 undefind
  const userInfo = userList.find(item => item.email === userInput.email && item.password === userInput.password)

  console.log('userInfo:', userInfo)
  console.log('Boolean(userInfo):', Boolean(userInfo))

  // return
  return userInfo
}

// export
module.exports = authenticate