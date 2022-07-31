const http =require('hello');

const server = http.createServer((req, res) => {
  res.end('This my first response');
});
server.Listen(process.env.PORT || 3000);
