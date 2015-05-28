var port = 9999;
var directory = 'www';

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

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
  var dir = path.join(__dirname, directory);
  var filepath = path.join(dir, unescape(uri));
  var indexfilepath = path.join(dir, unescape('index.html'));

  console.info('filepath', filepath);

  var f = function(err, stats)
  {
    if (stats === undefined) // path does not exist 404
    {
      res.writeHead(404,
      {
        'Content-Type': 'text/plain'
      });
      res.write('404 Not Foumd\n');
      res.end();


      return;
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
        .createReadStream(index)
        .pipe(res);

      return;
    }
    else if (stats.isDirectory()) // path exists, is a directory
    {
      res
        .writeHead(200,
        {
          'Content-Type': 'text/plain'
        });

      var fileStream =
        fs
          .createReadStream(indexfilepath)
          .pipe(res)
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

  var component = fs.stat(filepath, f);
  return;
};

var serverUp = function()
{
  console.info('HTTP server listening', port);
  return;
};

var server = http
    .createServer(request)
    .listen(port, serverUp)
