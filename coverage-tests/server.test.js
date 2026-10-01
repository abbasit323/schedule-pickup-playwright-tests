const assert = require('node:assert/strict');
const http = require('node:http');
const test = require('node:test');
const { createAppServer } = require('../server');

function startServer(readFile) {
  const server = createAppServer(readFile);
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function request(server, options, body) {
  return new Promise((resolve, reject) => {
    const { port } = server.address();
    const client = http.request({ host: '127.0.0.1', port, ...options }, (response) => {
      let responseBody = '';
      response.on('data', (chunk) => { responseBody += chunk; });
      response.on('end', () => resolve({ statusCode: response.statusCode, body: responseBody }));
    });
    client.on('error', reject);
    if (body) client.write(body);
    client.end();
  });
}

test('creates a scheduled pickup from the API', async (t) => {
  const server = await startServer();
  t.after(() => server.close());

  const payload = JSON.stringify({ address: '1 Test Street', pickupType: 'recycling' });
  const response = await request(server, {
    method: 'POST',
    path: '/api/pickups',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
  }, payload);

  assert.equal(response.statusCode, 200);
  const result = JSON.parse(response.body);
  assert.equal(typeof result.id, 'number');
  assert.deepEqual(result, {
    id: result.id,
    address: '1 Test Street',
    pickupType: 'recycling',
    status: 'scheduled'
  });
});

test('serves the application page', async (t) => {
  const server = await startServer();
  t.after(() => server.close());

  const response = await request(server, { method: 'GET', path: '/' });
  assert.equal(response.statusCode, 200);
  assert.match(response.body, /html/i);
});

test('returns 500 when the page cannot be loaded', async (t) => {
  const server = await startServer((_path, callback) => callback(new Error('missing page')));
  t.after(() => server.close());

  const response = await request(server, { method: 'GET', path: '/' });
  assert.equal(response.statusCode, 500);
  assert.equal(response.body, 'Could not load the application.');
});
