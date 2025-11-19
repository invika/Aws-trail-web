console.log("Starting server...");

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading page");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000!");
});
