import {useState} from 'react'
import Header from "../../../../components/Header";

const SpeedSlidingToStop = () => {
    const [speed, setSpeed] = useState();
    const [friction_coeff, setFrictionCoeff] = useState();
    const [skid_distance, setSkid_Distance] = useState();
    
    const calculateSpeed = () => {
        const calculatedSpeed = Math.sqrt(30 * skid_distance * friction_coeff);
        setSpeed(calculatedSpeed);

    };

    return (
        <div className={"container mb-5 center"}>
            <Header text={"Speed of vehicle sliding to stop"}/>
            <div className='mb-1 mt-1'>
                <label for = "distance" className='form-label'><h2> Skid (slide to stop) distance </h2></label>
                <input type = "number" className='form-control' id = 'distanceInput' placeholder='Enter distance in feet' value = {skid_distance} onChange={(e) => setSkid_Distance(parseFloat(e.target.value))} required></input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
                <br></br>
                <label for = "friction-coeff" className='form-label'><h2> Friction Coefficient </h2></label>
                <input type = "number" className='form-control' id = 'frictionCoeffInput' placeholder='Enter friction coefficient' value = {friction_coeff} onChange={(e) => setFrictionCoeff(parseFloat(e.target.value))} required></input>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>
            <br></br>
            <button type = "submit" classname="btn btn-primary mt-4" onClick={calculateSpeed}>Calculate Speed</button>
            <div>
                <h3>Calculated Speed: </h3>
                <p>{speed}</p>
            </div>
        </div>
    )
}

export default SpeedSlidingToStop;