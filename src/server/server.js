import express from 'express'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url';

const startServer = (options) => {
  const { port, public_path = "public" } = options;
  const app = express();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const publicAbsolutePath = join(__dirname + `../../../${public_path}/index.html` );
  // const publicAbsolutePath = path.join(__dirname + `../../../${public_path}/index.html`);
  app.use(express.static(public_path));

  app.get('/{*splat}',async (req, res) => {
    const indexPath = publicAbsolutePath
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};

export default startServer;
