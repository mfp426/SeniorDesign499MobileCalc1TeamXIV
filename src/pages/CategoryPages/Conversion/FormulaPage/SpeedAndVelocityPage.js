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
    isSpeed: "Velocity to Speed / Speed to Velocity",
};

function SpeedAndVelocityPage() {
    const [fields, setFields] = useState({
        speed: null,
        velocity: null,
        isSpeed: false,
    });

    const [result, setResult] = useState(null);

    const calculate = () => {
        if ((!fields.isSpeed && fields.velocity === null) || (fields.isSpeed && fields.speed === null)) {
            alert("Please fill out all fields.");
        }
        else {
            fields.isSpeed ? setResult(fields.speed * 1.466) : setResult(fields.velocity / 1.466);
        }
    };

    const handleValueChange = (fieldName, newValue) => {
        (fieldName === "isSpeed" && result) && setResult(null);
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
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Speed and Velocity Converter"}
                toggleFields={toggleFields}
                numericFields={fields.isSpeed ? getNumericFields(speedFieldDescriptions) : getNumericFields(velFieldDescriptions)}
                onCalculate={calculate}
            />
            {result !== null && (
                <p>{fields.isSpeed ? "Velocity" : "Speed"}: {round(result)} {fields.isSpeed ? 'fps' : 'mph'}</p>
            )}
        </div>
    );
}

export default SpeedAndVelocityPage;
