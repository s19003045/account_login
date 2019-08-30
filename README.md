# 實作前端 + 後端：Account Login

## 建議

熟悉 HTML 、CSS、JavaScript 語法，且瞭解 Bootstrap、Font-awesome 前端框架的使用。

## 目標

建立使用者登入驗證機制

## 特色

- 使用者登入驗證成功，則進入首頁
- 使用者登入驗證失敗，則停留在輸入頁面

## 後端工具

Node.js、Express、Express-handlebars、body-parser

## 環境建置

環境建置簡略帶過，安裝方式請參考官方網站。
依序介紹完成這支程式需要的軟體及套件：

- 安裝 VS code
  https://code.visualstudio.com/

* 安裝 VS code 常用套件：
  - Emment( Visual studio code 已經預設安裝的擴充套件，提供 快速編寫 HTML 與 CSS 的縮寫 )
    - Emment 常見縮寫： https://docs.emmet.io/cheat-sheet/
  - Bracket Pair Colorizer ( allows matching brackets to be identified with colours )
  - Live Server( 在檔案儲存的同時，就直接在瀏覽器裡同步看到結果)
  - Markdown Preview Enhanced ( 預覽 .md 檔案的 output )

- 安裝 Cmder
  https://cmder.net/
  常用指令同 windows 的 CMD
- 安裝 node.js
  https://nodejs.org/en/download/

  - 查看 node.js 版本指令：`node -v`

  - 以 node 啟動伺服器的指令如下(假設 app.js 是伺服器啟動的進入點)：`node app.js`

- 安裝 npm
  Node.js for Windows 於 0.6.2 版開始內建 npm，使用 nodejs.org 官方提供的安裝程式，不需要進一步的設定，就可以立即使用 npm 指令，對於 Windows 的開發者來說，大幅降低環境設定的問題與門檻。
  - 查看 npm 版本指令：`npm -v`
- 安裝 nodemon：啟動伺服器後，當專案資料夾中的檔案修改時，自動偵測，並自動重啟 server ，不需要手動再一次啟動 server。

  - 參考資料： https://www.npmjs.com/package/nodemon
  - 全域都可使用，不限於某專案資料夾，依下列指令安裝：`npm install -g nodemon`

  - 以 nodemon 啟動伺服器的指令如下(假設 app.js 是伺服器啟動的進入點)：`nodemon app.js`

## 安裝流程

- 下載專案
  - 從終端機下載：`https://github.com/s19003045/acount_login.git`
  - 直接點選 download 下載
- 開啟終端機，進入專案資料夾：
  `cd restaurant_list`
- 安裝 npm：
  `npm install 10.16.3`
- 使用 npm 安裝 express：
  `npm install express`
- 使用 npm 安裝 express-handlebars：
  `npm install express-handlebars`
- 使用 npm 安裝 body-parser：
  `npm install body-parser`
- 使用 node 執行：
  `node app.js`
- (optional)使用 nodemon 執行：
  `nodemon app.js`
- server 啟動成功：
  `server listen to http://localhost:3000`

## 畫面

- login
  ![login](https://github.com/s19003045/account_login/blob/master/public/images/account_login.png)


- login success
  ![login_success](https://github.com/s19003045/account_login/blob/master/public/images/login_success.png)

## 開發人員

[Gary Wu](https://github.com/s19003045)
