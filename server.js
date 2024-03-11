const http = require("node:http"); // vi no duoc cai san trong node.js 
const hostname = "localhost"; // localhost
const port = 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n Hoang Van Duc");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
