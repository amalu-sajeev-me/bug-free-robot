

// standalone function to start an HTTP server

async function startServer(requestHandler) {
  // destructure PORT number from environment variables
  const { PORT = 3001 } = process.env;

  // import http module
  const http = await import("http");

  // create a server using http module
  const server = http.createServer(requestHandler);

  // message to print when the server starts running
  const serverMessage = `server started running at http://localhost:${PORT}`;

  // listen to the port
  server.listen(PORT, () => console.log(serverMessage));

  // return the server instance
  return server;
}

// allows to shutdown the process if necessary
function shutdown(reason) {
  // give the reason for shutdown
  console.log(reason);

  // exit from the node process
  process.exit();
}

// export the functions
export { startServer, shutdown };
