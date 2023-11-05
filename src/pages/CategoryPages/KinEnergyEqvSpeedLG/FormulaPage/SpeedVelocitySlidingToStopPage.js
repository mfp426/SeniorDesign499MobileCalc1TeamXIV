import React, { useState } from 'react';
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";
import Formula from "../../../../components/Formula";
import { round } from "../../../../utils/conversions";

const skidDistanceSpeedFieldDescriptions = {
    skidDistanceSpeed: { description: "Skid (slide to stop) distance to calculate speed:", placeholderText: "feet" },
    FrictionCoef1: { description: "Friction Coefficient", placeholderText: "Enter Friction coefficient" }
};



const skidDistanceVelocityFieldDescriptions= {
    skidDistancevelocity: { description: "Skid (slide to stop) distance to calculate velocity:", placeholderText: "feet" },
    FrictionCoef2: { description: "Friction Coefficient", placeholderText: "Enter Friction coefficient" }
};

const toggleFieldDescriptions = {
    conversionType: "Speed / Velocity of Vehicle Sliding to Stop",
};

function SpeedAndVelocityConverter() {
    const [fields, setFields] = useState({
        skidDistanceSpeed: 0,
        skidDistancevelocity: 0,
        FrictionCoef1: 0,
        FrictionCoef2: 0,
        conversionType: false,
    });

    const [result, setResult] = useState(0);

    const calculate = () => {
        const { skidDistanceSpeed, skidDistancevelocity, FrictionCoef1, FrictionCoef2, conversionType } = fields;
        if (conversionType) {
            // Assuming speed is in miles per hour (mph)
            
            const calculatedVelocity = Math.sqrt(64.4 * skidDistancevelocity * FrictionCoef2);
            setResult(calculatedVelocity);
        } else {
            // Assuming velocity is in feet per second (fps)
            const calculatedSpeed = Math.sqrt(30 * skidDistanceSpeed * FrictionCoef1);
            setResult(calculatedSpeed);
        }
    };

    const handleValueChange = (fieldName, newValue) => {
        (fieldName === "conversionType" && result) && setResult(0);
        setFields({ ...fields, [fieldName]: newValue });
    };

    const getNumericFields = (fieldDescriptions) => {
        return Object.keys(fieldDescriptions).map(fieldName => (
            <NumericField
                key={fieldName}
                description={fieldDescriptions[fieldName].description}
                value={fields[fieldName]}
                onChange={(newValue) => handleValueChange(fieldName, newValue)}
                placeholderText={fieldDescriptions[fieldName].placeholderText}
            />
        ));
    };

    const toggleFields = Object.keys(toggleFieldDescriptions).map(fieldName => (
        <ToggleField
            key={fieldName}
            description={toggleFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => handleValueChange(fieldName, newValue)}
        />
    ));

    return (
        <div className={"flex flex-col items-center"}>
            <Formula
                formulaName={"Speed / Velocity of Vehicle Sliding to Stop"}
                toggleFields={toggleFields}
                numericFields={fields.conversionType ? getNumericFields(skidDistanceVelocityFieldDescriptions) : getNumericFields(skidDistanceSpeedFieldDescriptions)}
                onCalculate={calculate}
            />

            {result !== 0 && (
                <p>{fields.conversionType ? "Velocity Calculated" : "Speed Calculated"}: {round(result)} {fields.conversionType ? 'fps' : 'mph'}</p>
            )}
        </div>
    );
}

export default SpeedAndVelocityConverter;
