import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import IntField from "../../../components/IntField";
import ToggleField from "../../../components/ToggleField";

const intFieldDescriptions = {
    lastSpeedData: "Last Speed Data Point",
    samplesPerSecond: "Samples per Second",
    dragFactor: "Drag Factor / Slowing Rate",
    slipPercentage: "Slip Percentage",
    speedometerAccuracy: "Speedometer Accuracy",
};

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
                    />
                ))}
                {Object.keys(intFieldDescriptions).map((fieldName) => (
                    <IntField
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
