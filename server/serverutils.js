import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

export const require = createRequire(import.meta.url);
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
    Make: String,
    Model: String,
    Year: String
}, {
    collection: 'VEHICLE'
});

export const Car = mongoose.model("Car", carSchema);