import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";

const intFieldDescriptions = {
    slipPercentage: {description: "Slip Percentage", isToggled: true },
    lastSpeedData: { description: "Last Speed Data Point" },
    samplesPerSecond: { description: "Samples per Second" },
    dragFactor: { description: "Drag Factor / Slowing Rate" },
    speedometerAccuracy: { description: "Speedometer Accuracy" },
};

const toggleFieldDescriptions = {
    heavyOrAntiLock: "Heavy or AntiLock",
};

function SpeedAtImpactPage() {

    const [fields, setFields] = useState({
        lastSpeedData: null,
        samplesPerSecond: null,
        dragFactor: null,
        slipPercentage: 0,
        speedometerAccuracy: null,
        heavyOrAntiLock: false,
    });

    const navigate = useNavigate();

    // Render the Formula component with the formula name and numeric fields
    return (
        <Formula
            formulaName="Speed at Impact"
            toggleFields={
                Object.keys(toggleFieldDescriptions).map(fieldName => (
                    <ToggleField
                        key={fieldName}
                        description={toggleFieldDescriptions[fieldName]}
                        value={fields[fieldName]}
                        onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
                    />
                ))
            }
            numericFields={
                Object.keys(intFieldDescriptions).map(fieldName => (
                    <NumericField
                        key={fieldName}
                        description={intFieldDescriptions[fieldName].description}
                        value={fields[fieldName]}
                        onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
                        disabled={intFieldDescriptions[fieldName].isToggled ? !fields.heavyOrAntiLock : false}
                    />
                ))
            }
            onCalculate={() => {
                navigate("/EDR/SpeedAtImpact/Results", { state: {fields: fields }});
            }}
        />
    );
}
export default SpeedAtImpactPage;
