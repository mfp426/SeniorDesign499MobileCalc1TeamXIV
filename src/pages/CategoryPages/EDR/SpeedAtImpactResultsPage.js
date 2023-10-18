import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SpeedAtImpactResultsPage() {

    const location = useLocation();
    const fields = location.state ? location.state.fields : null;
    const navigate = useNavigate();

    function calculateSpeedAtImpact() {
        // Perform your calculation here
        let speed_point = fields.lastSpeedData;
        let speed_loss = ((1/fields.samplesPerSecond)*((fields.dragFactor*32.2)/1.466))*-1;
        let speed_underreporting = (fields.slipPercentage/100)*fields.lastSpeedData;
        let min_speedometer_tolerance = fields.lastSpeedData*(fields.speedometerAccuracy/100)*-1;
        let max_speedometer_tolerance = fields.lastSpeedData*(fields.speedometerAccuracy/100)

        let min_speed = parseFloat(fields.lastSpeedData)+parseFloat(speed_loss)+parseFloat(speed_underreporting)+parseFloat(min_speedometer_tolerance);
        let max_speed = parseFloat(fields.lastSpeedData)+parseFloat(max_speedometer_tolerance)+parseFloat(speed_underreporting);

        //do the conversions
        let kph_last_speed = fields.lastSpeedData*1.61;
        let kph_speed_loss = speed_loss*1.61
        let kph_speed_underreporting = speed_underreporting*1.61
        let kph_min_speedometer_tolerance = min_speedometer_tolerance*1.61;
        let kph_max_speedometer_tolerance = max_speedometer_tolerance*1.61;

        let fps_min_speed = min_speed*1.466;
        let kph_min_speed = min_speed*1.61;
        let mps_min_speed = kph_min_speed*0.2777;

        let fps_max_speed = max_speed*1.466;
        let kph_max_speed = max_speed*1.61;
        let mps_max_speed = kph_max_speed*0.2777;

        //rounding
        speed_point = parseFloat(speed_point).toFixed(1);
        speed_loss = parseFloat(speed_loss).toFixed(1);
        speed_underreporting = parseFloat(speed_underreporting).toFixed(1);
        min_speedometer_tolerance = parseFloat(min_speedometer_tolerance).toFixed(1);
        max_speedometer_tolerance = parseFloat(max_speedometer_tolerance).toFixed(1);
        min_speed = parseFloat(min_speed).toFixed(1);
        max_speed = parseFloat(max_speed).toFixed(1);
        kph_last_speed = parseFloat(kph_last_speed).toFixed(1);
        kph_speed_loss= parseFloat(kph_speed_loss).toFixed(1);
        kph_speed_underreporting = parseFloat(kph_speed_underreporting).toFixed(1);
        kph_min_speedometer_tolerance = parseFloat(kph_min_speedometer_tolerance).toFixed(1);
        kph_max_speedometer_tolerance = parseFloat(kph_max_speedometer_tolerance).toFixed(1);
        fps_min_speed = parseFloat(fps_min_speed).toFixed(1);
        kph_min_speed = parseFloat(kph_min_speed).toFixed(1);
        mps_min_speed = parseFloat(mps_min_speed).toFixed(1);
        fps_max_speed = parseFloat(fps_max_speed).toFixed(1);
        kph_max_speed = parseFloat(kph_max_speed).toFixed(1);
        mps_max_speed = parseFloat(mps_max_speed).toFixed(1);


        return (
        <div>
            <h1>Last Speed Data Point</h1>
            <p>{speed_point} mph {kph_last_speed} kph</p>
            <p>{speed_point} mph {kph_last_speed} kph</p>
            <br/>

            <h1>Possible Braking Speed Loss</h1>
            <p>{speed_loss} mph 0.0 mph</p>
            <p>{kph_speed_loss} kph 0.0 kph</p>
            <br/>

            <h1>Speed Slip Underreporting</h1>
            <p>{speed_underreporting} mph {speed_underreporting} mph</p>
            <p>{kph_speed_underreporting} kph {kph_speed_underreporting} kph</p>
            <br/>

            <h1>Speedometer Tolerance Gain/Loss</h1>
            <p>{min_speedometer_tolerance} mph {max_speedometer_tolerance} mph</p>
            <p>{kph_min_speedometer_tolerance} kph {kph_max_speedometer_tolerance} kph</p>
            <br/>

            <p>Min Speed Max Speed</p>
            <p>{min_speed} mph {max_speed} mph</p>
            <p>{fps_min_speed} fps {fps_max_speed} fps</p>
            <p>{kph_min_speed} kph {kph_max_speed} kph</p>
            <p>{mps_min_speed} mps {mps_max_speed} mps</p>
        </div>
        );
    }

    // Check if fields are available and perform rendering based on that
    if (fields) {
        return (
            <div>
                {calculateSpeedAtImpact()}
                <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>Back</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>No Data Available</h1>
                <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>Back</button>
            </div>
        );
    }
}
