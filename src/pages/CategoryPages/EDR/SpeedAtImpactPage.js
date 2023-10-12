import React, { useState } from "react";
import IntElement from "../../../components/IntElement";
import ToggleElement from "../../../components/ToggleElement";

const fieldDescriptions = {
    lastSpeedData: "Last Speed Data Point",
    samplesPerSecond: "Samples per Second",
    dragFactor: "Drag Factor / Slowing Rate",
    slipPercentage: "Slip Percentage",
    speedometerAccuracy: "Speedometer Accuracy",
};

export default function SpeedAtImpact() {
    const [fields, setFields] = useState({
        lastSpeedData: 0,
        samplesPerSecond: 0,
        dragFactor: 0,
        slipPercentage: 0,
        speedometerAccuracy: 0,
    });

    const [hasCalculated, setHasCalculated] = useState(false);
    const [result, setResult] = useState(-1);

    function handleValueChange(fieldName, newValue) {
        setFields({ ...fields, [fieldName]: newValue });
    }

    function calculateSpeedAtImpact() {
        // Perform your calculation here
        // For example, you can calculate the result based on the field values.
        const calculatedResult = fields.lastSpeedData * fields.samplesPerSecond;

        // Update the result and set hasCalculated to true
        setResult(calculatedResult);
        setHasCalculated(true);
    }


    return (
        <div>
           <h2 className="text-4xl page-header mt-3 mb-3">EDR Speed at Impact</h2>
            <div className="flex flex-col items-center justify-center">
                <ToggleElement description={"Heavy or Anti-lock Brakes"} />
                {Object.keys(fieldDescriptions).map((fieldName) => (
                    <IntElement
                        key={fieldName}
                        description={fieldDescriptions[fieldName]}
                        value={fields[fieldName]}
                        onChange={(newValue) => handleValueChange(fieldName, newValue)}
                    />
                ))}
                <button type={"submit"} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={calculateSpeedAtImpact}>Calculate</button>
                {hasCalculated && <p>{result}</p>}
            </div>
        </div>
    );
}
