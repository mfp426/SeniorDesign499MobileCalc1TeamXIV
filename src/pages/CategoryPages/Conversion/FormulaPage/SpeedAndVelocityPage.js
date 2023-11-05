import React, { useState } from 'react';
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";
import Formula from "../../../../components/Formula";
import { round } from "../../../../utils/conversions";

const speedFieldDescriptions = {
    speed: { description: "Speed:", placeholderText: "mph" }
};

const velFieldDescriptions= {
    velocity: { description: "Velocity:", placeholderText: "fps" }
};

const toggleFieldDescriptions = {
    isVelocity: "Velocity to Speed / Speed to Velocity",
};

function SpeedAndVelocityPage() {
    const [fields, setFields] = useState({
        speed: 0,
        velocity: 0,
        isVelocity: false,
    });

    const [result, setResult] = useState(0);

    const calculate = () => {
        const { speed, velocity, isVelocity } = fields;
        if (isVelocity) {
            // Assuming speed is in miles per hour (mph)
            const calculatedVelocity = speed * 1.466;
            setResult(calculatedVelocity);
        } else {
            // Assuming velocity is in feet per second (fps)
            const calculatedSpeed = velocity / 1.466;
            setResult(calculatedSpeed);
        }
    };

    const handleValueChange = (fieldName, newValue) => {
        (fieldName === "isVelocity" && result) && setResult(0);
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
                formulaName={"Speed and Velocity Converter"}
                toggleFields={toggleFields}
                numericFields={fields.isVelocity ? getNumericFields(speedFieldDescriptions) : getNumericFields(velFieldDescriptions)}
                onCalculate={calculate}
            />
            {result !== 0 && (
                <p>{fields.isVelocity ? "Velocity" : "Speed"}: {round(result)} {fields.isVelocity ? 'fps' : 'mph'}</p>
            )}
        </div>
    );
}

export default SpeedAndVelocityPage;
