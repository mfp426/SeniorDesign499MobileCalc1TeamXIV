import { useState } from 'react';

const SpeedToVelocityConverter = () => {
    // Define a state variable to store speed and velocity
    const [speed, setSpeed] = useState(0);
    const [velocity, setVelocity] = useState(0);

    // Function to calculate velocity from speed
    const calculateVelocity = () => {
        // Assuming speed is in meters per second
        const calculatedVelocity = speed*1.466;
        setVelocity(calculatedVelocity);
    };

    return (
        <div>
            <h2>Speed to Velocity Converter</h2>
            <div className="mb-1 mt-1">
                <label for="speedInput" className="form-label"><h2>Speed:</h2></label>
                <input type="number" className="form-control" id="speedInput" placeholder="Enter speed in mph"
                       value={speed} onChange={(e) => setSpeed(parseFloat(e.target.value))} required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-9">Please fill out this field.</div>
            </div>

            <div>

            </div>

            <button type="submit" className="btn btn-primary mt-4" onClick={calculateVelocity}>Calculate Velocity</button>

            <div>
                <h3>Calculated Velocity:</h3>
                <p>{velocity} mph</p>
            </div>
        </div>
    );
};

export default SpeedToVelocityConverter;