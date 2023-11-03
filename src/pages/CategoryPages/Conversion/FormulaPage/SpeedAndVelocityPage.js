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
    conversionType: "Velocity to Speed / Speed to Velocity",
};

function SpeedAndVelocityConverter() {
    const [fields, setFields] = useState({
        speed: 0,
        velocity: 0,
        conversionType: false,
    });

    const [result, setResult] = useState(0);

    const calculate = () => {
        const { speed, velocity, conversionType } = fields;
        if (conversionType) {
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

    const numericFields = fields.conversionType ? getNumericFields(speedFieldDescriptions) : getNumericFields(velFieldDescriptions);

    return (
        <div className={"flex flex-col items-center"}>
            <Formula
                formulaName={"Speed and Velocity Converter"}
                toggleFields={toggleFields}
                numericFields={numericFields}
                onCalculate={calculate}
            />
            {result !== 0 && (
                <p>{fields.conversionType ? "Velocity" : "Speed"}: {round(result)} {fields.conversionType ? 'fps' : 'mph'}</p>
            )}
        </div>
    );
}

export default SpeedAndVelocityConverter;
