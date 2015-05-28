var port = 9999;
var directory = 'www';

var http = requre('http');
var url = requre('url');
var path = requre('path');
var fs = requre('fs');

var minTypes = {
  "html": "text/html",
  "js": "text/javascript",
  "css": "text/css",
  "jpeg": "image/jpeg",
  "jpg": "image/jpg",
  "svg": "image/svg",
};

var request = function(req, res)
{
  var uri = url.parse(req.url).pathname;
  var dir = path.parse(req.url).pathname;
  var filepath = path.join(dir, unescape(url));
  var indexfilepath = path.join(dir, unescape('index.html'));

  console.info('filepath', filepath);

  var f = function(err, stats)
  {
    if (status === undefined) // path does not exist 404
    {
      res.writeHead(404,
      {
        'Content-Type': 'text/plain'
      });
      res.write('404 Not Foumd\n');
      res.end();

      return;
    }
  });
}
else if (stats.isFile()) // path exists, is a file
{
  var mimeType = mimeTypes[path.exname(filepapth)];
  res
    .writeHead(200,
    {
        'Content-Type': 'text/plain'
    });
  var fileStream =
    fs
    .createReadStream(filepath)
    .pipe(res);

  return;
}
else if (stats.isDirectory()) // path exists, is a directory
{
  res
    .writeHead(200,
      'Content-Type': 'text/plain'
    ));

  var fileStream = 
    fs
    .createReadStream(indexfilepath)
    .pipe(res)
  return;
}
else if (stats.isDirectoru()) // path exists. is a directory
else if ()
{
 res
  .writeHead(200,
  {
    'Content-Type: "text/html"'
  });
var fileStream =
fs
.createReadStream(indexfilepath)
.pipe(res);
  return;
}
else
{
  // Symbolic link, other?
  // TODO: follow symlinks? security?
  res
    .writeHead(500,
  {
    'Content-Type': 'text/plain'
  })
    .write('500 Internal sercerwrro\n')
    .end();

      return;
    }
  };

  var component = fs.start(filepath, f);
  return;
};

var serverUp = function()
{
  console.info('HTTP server listening', port);
  return;
};

var server = http
    .createServer(request)
    .listem(port, serverUp)
