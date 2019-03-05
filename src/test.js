// 调用Node.js提供的http模块
var http = require('http');

// 创建HTTP服务器，监听访问
// @param req 请求对象
// @param res 响应对象，收到请求后要做出的响应
var server = http.createServer( function (req, res) {

    // 输出响应头
    res.writeHead (200, {'Content-Type' : 'text/html'});

    // 写内容
    res.write('Hello world');

    // 结束，如果不写，请求一直处于pedding状态，可注释做测试
    res.end();

}).listen(8080); //监听3000端口

console.log("HTTP Server is listening at port 8080");
