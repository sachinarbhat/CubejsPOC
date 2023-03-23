const CubejsServer = require('@cubejs-backend/server');

const server = new CubejsServer();

server.listen().then(({ server  }) => {
  console.log(`🚀 Cube hello server (${server }) `);
});
console.log(CubejsServer.version());