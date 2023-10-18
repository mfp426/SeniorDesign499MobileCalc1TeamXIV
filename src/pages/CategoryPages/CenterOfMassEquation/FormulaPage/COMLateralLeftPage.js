import {useState} from "react";

const COMLateralLeft=()=>{
    const [comdist, setCOMdist] = useState();
    const [weight, setWeigt] = useState();
    const [track_width, setTrack_width] = useState();
    const [axle_weight, setAxle_weight] = useState();

    const calculateDistance=()=>{
        const dist = axle_weight* track_width/ weight;
        setCOMdist(dist);
    };

    return(
        <div>
            <h2> Distance of COM from the left side of vehicle</h2>
            <div className="mb-1 mt-1">
                <label for="axleweightInput" className="form-label"><h2> Weight of front axle on left side: </h2></label>
                <input type="number" className="form-control" id="axleweightInput" placeholder="Enter weight in pounds"
                   value={axle_weight} onChange={(e) => setAxle_weight(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div className="mb-1 mt-1">
                <label for="trackwidthInput" className="form-label"><h2>Track Width:</h2></label>
                <input type="number" className="form-control" id="trackwidthInput" placeholder="Enter track width in inches"
                        value={track_width} onChange={(e) => setTrack_width(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div className="mb-1 mt-1">
                <label for="weightInput" className="form-label"><h2> Total weight of the vehicle:</h2></label>
                <input type="number" className="form-control" id="weightInput" placeholder="Enter weight in pounds"
                   value={weight} onChange={(e) => setWeigt(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>


            <button type="submit" className="btn btn-primary mt-4" onClick={calculateDistance}>Calculate</button>

        <div>
            <h3>Calculated distance of COM from the left side of vehicle:</h3>
            <p>{comdist} inches</p>
        </div>
    </div>
        
    );
} 

export default COMLateralLeft;