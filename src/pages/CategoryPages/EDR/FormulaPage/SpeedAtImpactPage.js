import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";

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
        lastSpeedData: 0,
        samplesPerSecond: 0,
        dragFactor: 0,
        slipPercentage: 0,
        speedometerAccuracy: 0,
        heavyOrAntiLock: false,
    });

    const navigate = useNavigate();

    function handleValueChange(fieldName, newValue) {
        setCurrFields({ ...currFields, [fieldName]: newValue });
    }

    // TODO: create functionality to include ToggleField in calculation
    return (
        <div>
           <h2 className="text-4xl page-header mt-3 mb-3">EDR Speed at Impact</h2>
            <div className="flex flex-col items-center justify-center">
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
                <button className="btn btn-primary mt-4" onClick={() => navigate('/SpeedAtImpactResultsPage', { state: { fields: currFields } })}>Calculate Speed at Impact</button>
            </div>
        </div>
    );
}
