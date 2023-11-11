import React, { useState } from 'react';
import NumericField from "../../../../components/NumericField";
import Formula from "../../../../components/Formula";
import { round } from "../../../../utils/Conversions";

const fieldDescriptions = {
    skidDistance: { description: "Skid (slide to stop) distance:", placeholderText: "feet" },
    frictionCoefficient: { description: "Friction Coefficient", placeholderText: "Enter Friction coefficient" }
};

function SpeedAndVelocityConverter() {
    const [fields, setFields] = useState({
        skidDistance: null,
        frictionCoefficient: null,
        isVelocity: false,
    });

    const [speed, setSpeed] = useState(null);
    const [velocity, setVelocity] = useState(null);

    const calculate = () => {
        if ((fields.skidDistance === null || fields.frictionCoefficient === null)) {
            alert("Please fill out all fields.");
        }
        else {
            setSpeed(Math.sqrt(30 * fields.skidDistance * fields.frictionCoefficient));
            setVelocity(Math.sqrt(64.4 * fields.skidDistance * fields.frictionCoefficient));
        }
    };

    const numericFields = Object.keys(fieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={fieldDescriptions[fieldName].description}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({...fields, [fieldName]: newValue})}
            placeholderText={fieldDescriptions[fieldName].placeholderText}
        />
    ));

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Speed / Velocity of Vehicle Sliding to Stop"}
                numericFields={numericFields}
                onCalculate={calculate}
            />
            {speed !== null && <p>Calculated Speed: {round(speed)} mph</p>}
            {velocity !== null && <p>Calculated Velocity: {round(velocity)} fps</p>}
        </div>
    );
}

export default SpeedAndVelocityConverter;
