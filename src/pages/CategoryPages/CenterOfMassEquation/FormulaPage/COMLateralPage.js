import {useState} from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/conversions";
import ToggleField from "../../../../components/ToggleField";

const rightFieldDescriptions = {
    axle_weight: { name: "Weight of front axle on right side", placeholder: "Enter weight in pounds" },
    track_width: { name: "Track Width", placeholder: "Enter track width in inches" },
    weight: { name: "Total weight of the vehicle", placeholder: "Enter weight in pounds" },
}

const leftFieldDescriptions = {
    axle_weight: { name: "Weight of front axle on left side", placeholder: "Enter weight in pounds" },
    track_width: { name: "Track Width", placeholder: "Enter track width in inches" },
    weight: { name: "Total weight of the vehicle", placeholder: "Enter weight in pounds" },
}

const toggleFieldDescriptions = {
    isRight: "Left / Right",
}

function COMLateralPage() {
    const [comdist, setCOMdist] = useState(null);
    const [fields, setFields] = useState({
        axle_weight: null,
        track_width: null,
        weight: null,
        isRight: false,
    });

    const calculateDistance=()=>{
        if (fields.axle_weight === null || fields.track_width === null || fields.weight === null) {
            alert("Please fill out all fields.");
        }
        else {
            const dist = fields.axle_weight * fields.track_width / fields.weight;
            setCOMdist(dist);
        }
    };

    const getNumericFields = (fieldDescriptions) => {
        return Object.keys(fieldDescriptions).map(fieldName => (
            <NumericField
                key={fieldName}
                description={fieldDescriptions[fieldName].name}
                value={fields[fieldName]}
                onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
                placeholderText={fieldDescriptions[fieldName].placeholder}
            />
        ));
    }

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
                formulaName={"Distance of COM from the left/right side of vehicle"}
                toggleFields={toggleFields}
                numericFields={fields.isRight ? getNumericFields(rightFieldDescriptions) : getNumericFields(leftFieldDescriptions)}
                onCalculate={calculateDistance}
            />
            {comdist !== null && <p>Calculated distance of COM from the {fields.isRight ? "right" : "left"} side of vehicle: {round(comdist)}</p>}
        </div>
    );
} 

export default COMLateralPage;