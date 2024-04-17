import {require, __filename, __dirname, VehicleSpecsAdditional, VehicleSpecsMerged} from './serverutils.js'
const express = require("express"),
    PORT = 6001,
    app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Set this to the address of the database
// The below address is the previously used local address and will not work
const db_address = 'mongodb://127.0.0.1:27017/DeltaV_Test_Database_1'

mongoose.connect(db_address);

const router = express.Router();

router.get('/api', async (req, res) => {
    res.json({"test": ["test1", "test2"]});
})

app.use(cors());

app.use(express.json());

app.use('/api', router)

app.use(express.static('src'));

app.get('/get', async (req, res) => {
    const type = req.query.type;
    const specifiers = req.query.specifiers;

    let carList = [];

    if (!type) {
        const result = await VehicleSpecsMerged.find({}, 'model_make_id');
        for (let i = 0; i < result.length; i++) {
            let make = result[i].model_make_id;
            if (!carList.includes(make)) {
                carList.push(make);
            }
        }
    }
    else if (type === "Make") {
        const result = await VehicleSpecsMerged.find({model_make_id: specifiers[0]}, "model_name");
        for (let i = 0; i < result.length; i++) {
            let model = result[i].model_name;
            if (!carList.includes(model)) {
                carList.push(model);
            }
        }
    }
    else if (type === "Model") {
        const result = await VehicleSpecsMerged.find({model_make_id: specifiers[0], model_name: specifiers[1]}, "model_year");
        for (let i = 0; i < result.length; i++) {
            let year = result[i].model_year;
            if (!carList.includes(year)) {
                carList.push(year);
            }
        }
    }
    else if (type === "Year") {
        const result = await VehicleSpecsMerged.find({model_make_id: specifiers[0], model_name: specifiers[1], model_year: specifiers[2]}, "model_trim");
        for (let i = 0; i < result.length; i++) {
            let trim = result[i].model_trim;
            if (!carList.includes(trim)) {
                carList.push(trim);
            }
        }
    }
    else if (type === "Trim") {
        carList = await VehicleSpecsMerged.find({model_make_id: specifiers[0], model_name: specifiers[1], model_year: specifiers[2], model_trim: specifiers[3]});
    }

    carList.sort()
    res.send(carList);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));



























