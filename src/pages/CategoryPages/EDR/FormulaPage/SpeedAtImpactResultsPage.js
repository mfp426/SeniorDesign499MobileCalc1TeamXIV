import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {mphToFps, mphToKph, mphToMps, round} from "../../../../utils/conversions";

// TODO: Consider aligning headers to the left as it was in previous application
function ResultElement({ title, values }) {
    return (
        <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="grid grid-cols-2">
                <p>Min</p>
                <p>Max</p>
                {values.map((value, index) => (
                    <p key={index} className="text-sm">{value} {index % 2 === 0 ? 'mph' : 'kph'}</p>
                ))}
            </div>
        </div>
    );
}

function SpeedResultElement({mins, maxes}) {
    return (
        <div>
            <div className={"grid grid-cols-2"}>
                <h1 className="text-xl font-semibold">Min Speed</h1>
                <h1 className="text-xl font-semibold">Max Speed</h1>
                <p>{mins[0]} mph</p> <p>{maxes[0]} mph</p>
                <p>{mins[1]} fps</p> <p>{maxes[1]} fps</p>
                <p>{mins[2]} kph</p> <p>{maxes[2]} kph</p>
                <p>{mins[3]} mps</p> <p>{maxes[3]} mps</p>
            </div>
        </div>
    );
}

export default function SpeedAtImpactResultsPage() {

    const location = useLocation();
    const fields = location.state ? location.state.fields : null;
    const navigate = useNavigate();

    function calculateResults() {
        const {
            lastSpeedData,
            samplesPerSecond,
            dragFactor,
            slipPercentage,
            speedometerAccuracy,
        } = fields;

        const dragFactorConversion = (dragFactor * 32.2) / 1.466;
        const slipPercentageFactor = slipPercentage / 100;
        const speedometerAccuracyFactor = speedometerAccuracy / 100;

        const speedLoss = (1 / samplesPerSecond) * dragFactorConversion * -1;
        const speedUnderreporting = slipPercentageFactor * lastSpeedData;
        const minSpeedometerTolerance = lastSpeedData * speedometerAccuracyFactor * -1;
        const maxSpeedometerTolerance = lastSpeedData * speedometerAccuracyFactor;

        const minSpeed = round(lastSpeedData + speedLoss + speedUnderreporting + minSpeedometerTolerance);
        const maxSpeed = round(lastSpeedData + maxSpeedometerTolerance + speedUnderreporting);

        const kphConversion = (value) => round(mphToKph(value));
        const fpsMinSpeed = kphConversion(mphToFps(minSpeed));
        const kphMinSpeed = kphConversion(minSpeed);
        const mpsMinSpeed = kphConversion(mphToMps(minSpeed));

        const fpsMaxSpeed = kphConversion(mphToFps(maxSpeed));
        const kphMaxSpeed = kphConversion(maxSpeed);
        const mpsMaxSpeed = kphConversion(mphToMps(maxSpeed));

        return {
            speedPoint: lastSpeedData,
            speedLoss: round(speedLoss),
            speedUnderreporting: round(speedUnderreporting),
            minSpeedometerTolerance: round(minSpeedometerTolerance),
            maxSpeedometerTolerance: round(maxSpeedometerTolerance),
            kphLastSpeed: kphConversion(lastSpeedData),
            kphSpeedLoss: kphConversion(speedLoss),
            kphSpeedUnderreporting: kphConversion(speedUnderreporting),
            kphMinSpeedometerTolerance: kphConversion(minSpeedometerTolerance),
            kphMaxSpeedometerTolerance: kphConversion(maxSpeedometerTolerance),
            minSpeeds: [minSpeed, fpsMinSpeed, kphMinSpeed, mpsMinSpeed],
            maxSpeeds: [maxSpeed, fpsMaxSpeed, kphMaxSpeed, mpsMaxSpeed],
        };
    }

    function renderContent() {
        if (!fields) {
            return (
                <div>
                    <h1>No Data Available</h1>
                </div>
            );
        }
        let results = calculateResults();
        return (
            <div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <ResultElement title={"Last Speed Data Point"}
                                   values={[results.speedPoint, results.speedPoint, results.kphLastSpeed, results.kphLastSpeed]}/>
                    <ResultElement title={"Possible Braking Speed Loss"}
                                   values={[results.speedLoss, 0.0, results.kphSpeedLoss, 0.0]}/>
                    <ResultElement title={"Speed Slip Underreporting"}
                                   values={[results.speedUnderreporting, results.speedUnderreporting, results.kphSpeedUnderreporting, results.kphSpeedUnderreporting]}/>
                    <ResultElement title={"Speedometer Tolerance Gain/Loss"}
                                   values={[results.minSpeedometerTolerance, results.maxSpeedometerTolerance, results.kphMinSpeedometerTolerance, results.kphMaxSpeedometerTolerance]}/>
                </div>
                <SpeedResultElement mins={results.minSpeeds} maxes={results.maxSpeeds}/>
            </div>
        );
    }

    return (
        <div className="px-4 flex flex-col items-center">
            {renderContent()}
            <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}