import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

export const require = createRequire(import.meta.url);
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const mongoose = require('mongoose')
const VechicleSpecsMergedSchema = new mongoose.Schema({
    model_make_id: String,
    model_name: String,
    model_trim: String,
    model_year: String
}, {
    collection: 'VEHICLE_SPECS_merge'
});
const VehicleSpecsAdditionalSchema = new mongoose.Schema({
    Make: String,
    Model: String,
    Year: String
}, {
    collection: 'VEHICLE_SPECS_ADDITIONAL'
});

export const VehicleSpecsMerged = mongoose.model("VehicleSpecsMerged", VechicleSpecsMergedSchema);
export const VehicleSpecsAdditional = mongoose.model("VehicleSpecsAdditional", VehicleSpecsAdditionalSchema);