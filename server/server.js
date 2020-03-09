const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('我是全栈开发的；我会后台node开发、中间件开发')
});

// 监听服务器
server.listen(3000,'192.168.9.87',()=>{
    console.log('server 启动成功！')
})




