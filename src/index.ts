import { Server } from "./server/server.server";

async function main() {
  const server = Server.instance;
  await server.listen();
}

main();
