const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(
    `Received request from ${req.socket.remoteAddress}:${req.socket.remotePort}`
  );
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
