const { parseRequestAndGetJson } = require('./mockHelper')
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  let result = parseRequestAndGetJson(req.url);
  if (result)
  {
    res.writeHead(200,'Content-Type', 'application/json');
    res.write(JSON.stringify(result));
  }
  else {
    res.writeHead(404)
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

