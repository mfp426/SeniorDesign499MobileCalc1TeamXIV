import {require, __filename, __dirname, Car} from './serverutils.js'
const express = require("express"),
    PORT = 6001,
    app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/DeltaV_Test_Database_1');

const router = express.Router();

router.get('/api', async (req, res) => {
    res.json({"test": ["test1", "test2"]});
})

app.use(cors());

app.use(express.json());

app.use('/api', router)

app.use(express.static('src'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.post('', async (req, res) => {
    const carList = await Car.find({}, 'Make Model Year');

    const randomCar = carList[Math.floor(Math.random() * carList.length)];

    const foundCar = {
        make: randomCar.Make,
        model: randomCar.Model,
        year: randomCar.Year
    }

    console.log(carList);
    res.send(foundCar);
  });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



























