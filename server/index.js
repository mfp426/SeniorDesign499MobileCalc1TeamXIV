import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const express = require("express"),
    PORT = 6001,
    app = express();
const cors = require('cors')

const router = express.Router();

router.get('/api', async (req, res) => {
    res.json({"test": ["test1", "test2"]});
})

app.use(cors())
app.use(express.json());

app.use('/api', router)

app.use(express.static('src'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.post('', (req, res) => {
    const car = {
        make: "Honda",
        model: "Civic"
    }
    console.log('Action triggered by React button');
    res.send(car);
  });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));