import {useState} from 'react';

const ConstantVelocity=()=>{
    const [velocity, setVelocity] = useState();
    const [time, setTime] = useState();
    const [distance, setDistance] = useState();

    const calculateVelocity = () =>{
        const vel = distance / time;
        setVelocity(vel);
    };

    return(
        <div>
            <h2> Constant Velocity</h2>
            <div className="mb-1 mt-1">
                <label for="distanceInput" className="form-label"><h2>Distance traveled:</h2></label>
                <input type="number" className="form-control" id="distanceInput" placeholder="Enter distance in feet"
                   value={distance} onChange={(e) => setDistance(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div className="mb-1 mt-1">
                <label for="timeInput" className="form-label"><h2>Time traveled:</h2></label>
                <input type="number" className="form-control" id="timeInput" placeholder="Enter time in seconds"
                        value={time} onChange={(e) => setTime(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <button type="submit" className="btn btn-primary mt-4" onClick={calculateVelocity}>Calculate</button>

        <div>
            <h3>Calculated Constant Velocity:</h3>
            <p>{velocity} fps</p>
        </div>
    </div>
        
    );
};

export default ConstantVelocity;