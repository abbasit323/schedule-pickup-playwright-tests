const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const indexPath = path.join(__dirname, 'public', 'index.html');

function createAppServer(readFile = fs.readFile) {
  return http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/api/pickups') {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      const pickup = JSON.parse(body || '{}');

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({
        id: Date.now(),
        ...pickup,
        status: 'scheduled'
      }));
    });

    return;
  }

  readFile(indexPath, (error, content) => {
    if (error) {
      response.writeHead(500);
      response.end('Could not load the application.');
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(content);
  });
  });
}

if (require.main === module) {
  const server = createAppServer();
  server.listen(port, () => {
    console.log(`Schedule Pickup app is running at http://localhost:${port}`);
  });
}

module.exports = { createAppServer };
