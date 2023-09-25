import {useState} from 'react'

const VelocitySlidingToStop = () => {
    const [velocity, setVelocity] = useState();
    const [friction_coeff, setFrictionCoeff] = useState();
    const [skid_distance, setSkid_Distance] = useState();
    
    const calculateVelocity = () => {
        const calculatedVelocity = Math.sqrt(64.4 * skid_distance * friction_coeff);
        setVelocity(calculatedVelocity);

    };

    return (
        <div>
            <h1>Velocity of vehicle sliding to stop</h1>
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
            <button type = "submit" classname="btn btn-primary mt-4" onClick={calculateVelocity}>Calculate Velocity</button>
            <div>
                <h3>Calculated Velocity: </h3>
                <p>{velocity}</p>
            </div>
        </div>
    )
}

export default VelocitySlidingToStop;