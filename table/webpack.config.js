let path = require('path');
module.exports = {
  mode:"development",
  entry:  path.join(__dirname + "/main.js"),//已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname + "/dist"),//打包后的文件存放的地方
    filename: "index.js"//打包后输出文件的文件名
  }
}