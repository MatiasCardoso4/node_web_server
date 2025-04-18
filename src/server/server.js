const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port, public_path = "public" } = options;
  const app = express();
  const publicAbsolutePath = path.join(__dirname + `../../../${public_path}/index.html`);
  app.use(express.static(public_path));

  app.get('/{*splat}',async (req, res) => {
    const indexPath = publicAbsolutePath
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};

module.exports = { startServer };
