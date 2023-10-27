import React, { useState } from "react";

const SlidetoStopWithDragFctr = () =>{
    const [distance, setDistance] = useState();
    const [coef, setCoef] = useState();
    const [speed, setSpeed] = useState();
    const calculateDistance=()=>{
        const calculatedDistance = (speed**2)/(30* coef);
        setDistance(calculatedDistance)
    };
    return(
        <div>
            <h2> Slide to Stop Distance with known Distance and Drag Factor</h2>
            <div className="mb-1 mt-1">
                <label for="speedInput" className="form-label"><h2>Speed of Vehicle:</h2></label>
                <input type="number" className="form-control" id="speedInput" placeholder="Enter speed in mph"
                   value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div className="mb-1 mt-1">
                <label for="coefInput" className="form-label"><h2>Coefficeint of Friction:</h2></label>
                <input type="number" className="form-control" id="coefInput" placeholder="Enter the coefficient of friction"
                        value={coef} onChange={(e) => setCoef(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <button type="submit" className="btn btn-primary mt-4" onClick={calculateDistance}>Calculate</button>

        <div>
            <h3>Calculated Slide to Stop Distance:</h3>
            <p>{distance} feet</p>
        </div>
    </div>
        
    );
}

export default SlidetoStopWithDragFctr;