import {useState} from 'react';
import Header from "../../../../components/Header";

const ConstantDistance=()=>{
    const [velocity, setVelocity] = useState();
    const [time, setTime] = useState();
    const [distance, setDistance] = useState();

    const calculateDistance = () =>{
        const dist = velocity * time;
        setDistance(dist);
    };

    return(
        <div className={"container mb-5 center"}>
            <Header text={"Constant Distance"}/>
            <div className="mb-1 mt-1">
                <label for="velocityInput" className="form-label"><h2> Velocity:</h2></label>
                <input type="number" className="form-control" id="velocityInput" placeholder="Enter velocity in fps"
                   value={velocity} onChange={(e) => setVelocity(parseFloat(e.target.value))} required />
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

            <button className="btn btn-primary mt-4" onClick={calculateDistance}>Calculate</button>

        <div>
            <h3>Calculated Constant Distance:</h3>
            <p>{distance} feet</p>
        </div>
    </div>
        
    );
};

export default ConstantDistance;