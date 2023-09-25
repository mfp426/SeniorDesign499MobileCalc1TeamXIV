import { useState } from 'react';

const VelocityToSpeedConverter = () => {
    // Define a state variable to store speed and velocity
    const [speed, setSpeed] = useState(0);
    const [velocity, setVelocity] = useState(0);

    // Function to calculate speed frim velocity
    const calculateSpeed = () => {
        // Assuming velocity is in meters per second
        const calculatedSpeed = velocity/1.466;
        setSpeed(calculatedSpeed);
    };

    return (
        <div>
            <h2>Velocity to Speed Converter</h2>
            <div className="mb-1 mt-1">
                <label for="velocityInput" className="form-label"><h2>Velocity:</h2></label>
                <input type="number" className="form-control" id="velocityInput" placeholder="Enter velocity in mph"
                       value={velocity} onChange={(e) => setVelocity(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div>

            </div>

            <button type="submit" className="btn btn-primary mt-4" onClick={calculateSpeed}>Calculate Speed</button>

            <div>
                <h3>Calculated Speed:</h3>
                <p>{speed} mph</p>
            </div>
        </div>
    );
};

export default VelocityToSpeedConverter;
