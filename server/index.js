import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const express = require("express"),
    PORT = 5173,
    app = express();

const router = express.Router();

router.get('/hello', async (_req, res) => {
    res.status(200).json({message: "Hello World!"});
})

app.use(express.json());

app.use('/api', router);

app.use(express.static('dist/app'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));