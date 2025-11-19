console.log("Starting server...");

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My AWS Trial App</title>
        <script>
          window.onload = function() {
            alert("Welcome to my Node.js app on AWS!");
          }
        </script>
      </head>
      <body>
        <h1>Hello from AWS EC2 and GitHub!</h1>
        <p>This is a small interactive message demo.</p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000!");
});
