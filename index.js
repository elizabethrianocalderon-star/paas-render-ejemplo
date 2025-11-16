const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });
  res.end(
    `<h1>Aplicación desplegada en Render</h1>
    <p>Ejemplo PaaS profesional</p>`
  );
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log("Servidor activo en puerto " + PORT)
);