const http = require('http');
const app = require('./app');

const port = process.env.POST || 3000;
const host = process.env.HOST || 3000;

const server = http.createServer(app);

server.listen(port, port, () => {
    console.log(`Server is running at ${host}:${port}/`)
  })