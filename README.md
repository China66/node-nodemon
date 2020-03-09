# node-nodemon
node+nodemon
##node的第一个项目创建服务器server.js
##mkdir demo
##cd demo
##mkdir server
##cd server
##touch server.js
##code server.js
write in:
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('我是全栈开发的')
});

// 监听服务器
server.listen(3000,'服务器ip',()=>{
    console.log('server 启动成功！')
})


##node server.js（检测是否成功）

##【使用nodemon管理】
##cd demo
##npm install nodemon -D
##修改配置文件package.json的启动命令
write in:
{
  "name": "demo1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start:node":"node server/server.js",
    "start":"nodemon server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
}
##npm start
##新增nodemon配置文件，指定watch
{
    "wacth":["./src/**/*.js"]
}
##npm start
####使用nodemon管理的好处就是不用如果文件有什么改动不用人为去启动

