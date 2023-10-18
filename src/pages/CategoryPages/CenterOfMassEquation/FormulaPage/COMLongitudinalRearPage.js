import {useState} from "react";

const COMLongitudinalRear=()=>{
    const [comdist, setCOMdist] = useState();
    const [weight, setWeigt] = useState();
    const [wheelbase_width, setWheelbase_width] = useState();
    const [axle_weight, setAxle_weight] = useState();

    const calculateDistance=()=>{
        const dist = axle_weight* wheelbase_width/ weight;
        setCOMdist(dist);
    };

    return(
        <div>
            <h2> Distance in front of the Rear Axle of COM Location</h2>
            <div className="mb-1 mt-1">
                <label for="axleweightInput" className="form-label"><h2> Weight of front axle: </h2></label>
                <input type="number" className="form-control" id="axleweightInput" placeholder="Enter weight in pounds"
                   value={axle_weight} onChange={(e) => setAxle_weight(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div className="mb-1 mt-1">
                <label for="wheelbaseInput" className="form-label"><h2>Wheelbase- distance between front and rear axle: </h2></label>
                <input type="number" className="form-control" id="wheelbaseInput" placeholder="Enter the distance in inches"
                        value={wheelbase_width} onChange={(e) => setWheelbase_width(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div className="mb-1 mt-1">
                <label for="weightInput" className="form-label"><h2> Total weight of the vehicle: </h2></label>
                <input type="number" className="form-control" id="weightInput" placeholder="Enter weight in pounds"
                   value={weight} onChange={(e) => setWeigt(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>


            <button type="submit" className="btn btn-primary mt-4" onClick={calculateDistance}>Calculate</button>

        <div>
            <h3>Calculated distance behind the Front Axle of COM Location:</h3>
            <p>{comdist} inches</p>
        </div>
    </div>
        
    );
} 

export default COMLongitudinalRear;