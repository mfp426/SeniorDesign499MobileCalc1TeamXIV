import {useState} from 'react';
import Header from "../../../../components/Header";

const ConstantTime=()=>{
    const [velocity, setVelocity] = useState();
    const [time, setTime] = useState();
    const [distance, setDistance] = useState();

    const calculateTime = () =>{
        const c_time = distance / velocity;
        setTime(c_time);
    };

    return(
        <div className={"container mb-5 center"}>
            <Header text={"Constant Time"}/>
            <div className="mb-1 mt-1">
                <label for="distanceInput" className="form-label"><h2>Constant Distance:</h2></label>
                <input type="number" className="form-control" id="distanceInput" placeholder="Enter distance in feet"
                   value={distance} onChange={(e) => setDistance(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>
            <div className="mb-1 mt-1">
                <label for="velocityInput" className="form-label"><h2>Constant Velocity:</h2></label>
                <input type="number" className="form-control" id="velocityInput" placeholder="Enter velocity in fps"
                   value={velocity} onChange={(e) => setVelocity(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>


            <button className="btn btn-primary mt-4" onClick={calculateTime}>Calculate</button>

        <div>
            <h3>Calculated Constant Time:</h3>
            <p>{time} seconds</p>
        </div>
    </div>
        
    );
};

export default ConstantTime;