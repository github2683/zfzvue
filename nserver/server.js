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
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
  
    res.write(data)
    res.end()
  }) 


}).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
})