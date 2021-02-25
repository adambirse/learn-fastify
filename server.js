const fastify = require("fastify")({
  logger: true,
});

const helloRoute = require("./hello-route");

fastify.register(helloRoute);

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
