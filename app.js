// Ejemplo de cómo levantar un servidor de forma básica
const chalk = require("chalk");
const http = require("http"); // Viene incluido en node

const server = http.createServer((request, response) => {
  console.log(chalk.blue(`Petición desde ${request.url}`));
  if (request.url === "/") {
    response.write("Respuesta!");
    response.end();
  } else if(request.url === "/login") {
      response.write("Login!")
      response.end();
  } else {
      response.write("Not Found!")
      response.end();
  }
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log(chalk.green("Server running..."));
});
