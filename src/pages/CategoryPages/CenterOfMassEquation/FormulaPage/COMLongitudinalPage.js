import React, {useState} from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import ToggleField from "../../../../components/ToggleField";
import {round} from "../../../../utils/conversions";

const toggleFieldDescriptions = {
    isRear: "Front / Rear",
}

const frontFieldDescriptions = {
    axle_weight: { description: "Weight of front axle", placeholderText: "Enter weight in pounds" },
    wheelbase_width: { description: "Wheelbase- distance between front and rear axle", placeholderText: "Enter the distance in inches" },
    weight: { description: "Total weight of the vehicle", placeholderText: "Enter weight in pounds" },
}

const rearFieldDescriptions = {
    axle_weight: { description: "Weight of rear axle", placeholderText: "Enter weight in pounds" },
    wheelbase_width: { description: "Wheelbase- distance between front and rear axle", placeholderText: "Enter the distance in inches" },
    weight: { description: "Total weight of the vehicle", placeholderText: "Enter weight in pounds" },
}

function COMLongitudinalPage() {
    const [comdist, setCOMdist] = useState(0);

    const [fields, setFields] = useState({
        axle_weight: 0,
        wheelbase_width: 0,
        weight: 0,
        isRear: false,
    });

    const calculateDistance=()=>{
        const dist = fields.axle_weight* fields.wheelbase_width/ fields.weight;
        setCOMdist(dist);
    };

    const getNumericFields = (fieldDescriptions) => {
        return Object.keys(fieldDescriptions).map(fieldName => (
            <NumericField
                key={fieldName}
                description={fieldDescriptions[fieldName].description}
                value={fields[fieldName]}
                onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
                placeholderText={fieldDescriptions[fieldName].placeholderText}
            />
        ));
    };

    const toggleFields = Object.keys(toggleFieldDescriptions).map(fieldName => (
        <ToggleField
            key={fieldName}
            description={toggleFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => setFields({...fields, [fieldName]: newValue })}
        />
    ));

    return(
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Distance behind the Front/Rear Axle of COM Location"}
                toggleFields={toggleFields}
                numericFields={fields.isRear ? getNumericFields(rearFieldDescriptions) : getNumericFields(frontFieldDescriptions)}
                onCalculate={calculateDistance}
            />
            {comdist !== 0 && (
                <p>Calculated Distance behind the {fields.isRear ? "Rear" : "Front"} Axle of COM Location: {round(comdist)}</p>
            )}
        </div>
    );
} 

export default COMLongitudinalPage;