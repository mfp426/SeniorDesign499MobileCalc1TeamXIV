import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";
import Header from "../../../../components/Header";

// TODO: add input validation
const intFieldDescriptions = {
    lastSpeedData: "Last Speed Data Point",
    samplesPerSecond: "Samples per Second",
    dragFactor: "Drag Factor / Slowing Rate",
    speedometerAccuracy: "Speedometer Accuracy",
};

const toggleIntFieldDescriptions = {
    slipPercentage: "Slip Percentage",
}

const toggleFieldDescriptions = {
    heavyOrAntiLock: "Heavy or AntiLock",
};

export default function SpeedAtImpact() {
    const [currFields, setCurrFields] = useState({
        lastSpeedData: null,
        samplesPerSecond: null,
        dragFactor: null,
        slipPercentage: null,
        speedometerAccuracy: null,
        heavyOrAntiLock: false,
    });

    const navigate = useNavigate();

    function handleValueChange(fieldName, newValue) {
        setCurrFields({ ...currFields, [fieldName]: newValue });
    }

    return (
        <div className={"container mb-5 center"}>
            <Header text={"EDR Speed at Impact"}/>
            <div className="flex flex-col items-center gap-4">
                {Object.keys(toggleFieldDescriptions).map((fieldName) => (
                    <ToggleField
                        description={toggleFieldDescriptions[fieldName]}
                        onChange={(newValue) => handleValueChange(fieldName, newValue)}
                    />
                ))}
                {Object.keys(toggleIntFieldDescriptions).map((fieldName) => (
                    <NumericField
                        key={fieldName}
                        description={toggleIntFieldDescriptions[fieldName]}
                        value={currFields[fieldName]}
                        onChange={(newValue) => handleValueChange(fieldName, newValue)}
                        disabled={!currFields.heavyOrAntiLock}
                    />
                ))}
                {Object.keys(intFieldDescriptions).map((fieldName) => (
                    <NumericField
                        key={fieldName}
                        description={intFieldDescriptions[fieldName]}
                        value={currFields[fieldName]}
                        onChange={(newValue) => handleValueChange(fieldName, newValue)}
                    />
                ))}
                {/* navigate to SpeedAtImpactResultsPage with currFields */}
                <button className="btn btn-primary mt-4" onClick={() => navigate('/SpeedAtImpactResultsPage', { state: { fields: currFields } })}>Calculate</button>
            </div>
        </div>
    );
}
