import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";

const fieldDescriptions = {
    velocity: { description: "The velocity of the object in feet per second.", placeholderText: "Enter velocity in fps" },
    time: { description: "The time traveled in seconds.", placeholderText: "Enter time in seconds" },
}

function ConstantDistancePage() {
    const [fields, setFields] = useState({
        velocity: 0,
        time: 0,
    });

    const [distance, setDistance] = useState(0);

    const calculateDistance = () =>{
        const dist = fields.velocity * fields.time;
        setDistance(dist);
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
                formulaName={"Constant Distance"}
                numericFields={numericFields}
                onCalculate={calculateDistance}
            />
            {distance !== 0 && <p>Calculated Constant Distance: {distance}</p>}
        </div>
    );
}

export default ConstantDistancePage;