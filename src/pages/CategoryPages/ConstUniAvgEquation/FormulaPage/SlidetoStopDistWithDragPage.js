import React, { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/conversions";

const fieldDescriptions = {
    speed: { description: "Speed of Vehicle", placeholderText: "Enter speed in mph" },
    coefficient: { description: "Coefficient of Friction", placeholderText: "Enter the coefficient of friction" },
}

function SlidetoStopWithDragPage() {
    const [fields, setFields] = useState({
        speed: 0,
        coefficient: 0,
    });
    const [distance, setDistance] = useState(0);

    const calculateDistance=()=>{
        const calculatedDistance = (fields.speed**2)/(30* fields.coefficient);
        setDistance(calculatedDistance)
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

    return(
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Slide to Stop Distance with known Distance and Drag Factor"}
                numericFields={numericFields}
                onCalculate={calculateDistance}
            />
            {distance !== 0 && <p>Calculated Slide to Stop Distance: {round(distance)} feet</p>}
        </div>
    );
}

export default SlidetoStopWithDragPage;