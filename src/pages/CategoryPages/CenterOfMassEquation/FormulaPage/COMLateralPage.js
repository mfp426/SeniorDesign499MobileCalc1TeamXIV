import {useState} from "react";
import Formula from "../../../../components/Formula";
import {round} from "../../../../utils/Conversions";
import ToggleField from "../../../../components/ToggleField";
import {getNumericFields} from "../../../../utils/FieldCreator";

const rightFieldDescriptions = {
    axleWeight: { description: "Weight of front axle on right side", placeholderText: "Enter weight in pounds" },
    trackWidth: { description: "Track Width", placeholderText: "Enter track width in inches" },
    weight: { description: "Total weight of the vehicle", placeholderText: "Enter weight in pounds" },
}

const leftFieldDescriptions = {
    axleWeight: { description: "Weight of front axle on left side", placeholderText: "Enter weight in pounds" },
    trackWidth: { description: "Track Width", placeholderText: "Enter track width in inches" },
    weight: { description: "Total weight of the vehicle", placeholderText: "Enter weight in pounds" },
}

const toggleFieldDescriptions = {
    isRight: "Left / Right",
}

function COMLateralPage() {
    const [comdist, setCOMdist] = useState(null);
    const [fields, setFields] = useState({
        axleWeight: null,
        trackWidth: null,
        weight: null,
        isRight: false,
    });

    const calculateDistance=()=>{
        if (fields.axleWeight === null || fields.trackWidth === null || fields.weight === null) {
            alert("Please fill out all fields.");
        }
        else {
            const dist = fields.axleWeight * fields.trackWidth / fields.weight;
            setCOMdist(dist);
        }
    };

    const handleValueChange = (fieldName, newValue) => {
        setFields(prevFields => ({...prevFields, [fieldName]: newValue}));
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
                numericFields={fields.isRight ? getNumericFields(fields, rightFieldDescriptions, handleValueChange) : getNumericFields(fields, leftFieldDescriptions, handleValueChange)}
                onCalculate={calculateDistance}
            />
            {comdist !== null && <p>Calculated distance of COM from the {fields.isRight ? "right" : "left"} side of vehicle: {round(comdist)}</p>}
        </div>
    );
} 

export default COMLateralPage;