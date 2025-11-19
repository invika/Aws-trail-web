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
  <h1>Hello from Invi's AWS EC2 and GitHub!</h1>
  <p>This is a small interactive message demo.</p>

  <div style="border: 5px solid #333; 
              padding: 10px; 
              width: fit-content; 
              box-shadow: 4px 4px 12px rgba(0,0,0,0.3); 
              border-radius: 8px;">
    <img src="https://static.vecteezy.com/system/resources/previews/012/744/791/large_2x/cute-girl-working-on-computer-cartoon-icon-illustration-people-and-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" 
         alt="Cartoon girl working on computer" 
         width="400" />
  </div>
</body>

    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000!");
});
