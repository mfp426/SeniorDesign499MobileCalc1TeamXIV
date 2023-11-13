import React, { useState } from 'react';
import ToggleField from "../../../../components/ToggleField";
import Formula from "../../../../components/Formula";
import { round } from "../../../../utils/Conversions";
import {getNumericFields} from "../../../../utils/FieldCreator";

const speedFieldDescriptions = {
    speed: { description: "Speed:", placeholderText: "mph" }
};

const velFieldDescriptions= {
    velocity: { description: "Velocity:", placeholderText: "fps" }
};

const toggleFieldDescriptions = {
    isSpeed: "Velocity (fps) to Speed (mph) / Speed (mph) to Velocity (fps)",
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
                formulaName={"Speed (mph) and Velocity (fps) Converter"}
                toggleFields={toggleFields}
                numericFields={fields.isSpeed ? getNumericFields(fields, speedFieldDescriptions, handleValueChange) : getNumericFields(fields, velFieldDescriptions, handleValueChange)}
                onCalculate={calculate}
            />
            {result !== null && (
                <p>{fields.isSpeed ? "Velocity" : "Speed"}: {round(result)} {fields.isSpeed ? 'fps' : 'mph'}</p>
            )}
        </div>
    );
}

export default SpeedAndVelocityPage;
