var http=require('http');
var seveer = http.
  createSever(functionServer(req, res)
  {
    res.writeHead(200, {Content-Type: 'test/plain'});
    res.write('Hello World!!\n');
    res.end();
  }
) 
.listen(9999);
