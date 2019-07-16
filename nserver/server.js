const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const httpPort = 80


http.createServer(function (req, res){
  //解析请求
  var pathname = url.parse(req.url).pathname

  
  //只处理这一种情况
  fs.readFile(path.join(__dirname, pathname), 'utf-8', function (err, file){
    let data  = file;
    if(err) {
        console.log(err)
        data = '{"code":404}';
    }
    // output 
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"http://localhost:8080",
      "Access-Control-Allow-Headers": "authorization" //req.getHeader("Access-Control-Request-Headers")
    })
  
    // // 允许客户端携带跨域cookie
		// // 当Access-Control-Allow-Credentials设为true的时候，Access-Control-Allow-Origin不能设为星号
		// response.setHeader("Access-Control-Allow-Credentials", "true");
		// // 允许指定域访问跨域资源
		// //response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:9006, http://127.0.0.1:8080");
		// response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));// *
		// // 允许浏览器发送的请求消息头
		// response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));// *
		// // 允许浏览器在预检请求成功之后发送的实际请求方法名
		// response.setHeader("Access-Control-Allow-Methods", request.getHeader("Access-Control-Request-Method"));
		// // 设置响应数据格式
		// response.setHeader("Content-Type", "application/json");
    // --------------------- 
    // 作者：andus.top 
    // 来源：CSDN 
    // 原文：https://blog.csdn.net/github_33809414/article/details/81774885 
    // 版权声明：本文为博主原创文章，转载请附上博文链接！



    res.write(data)
    res.end()
  }) 


}).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
})