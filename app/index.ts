import http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Server is starting');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
