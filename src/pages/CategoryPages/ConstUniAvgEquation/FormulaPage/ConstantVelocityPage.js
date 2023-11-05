import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/conversions";

const fieldDescriptions = {
    distance: { description: "Distance:", placeholderText: "Enter distance in feet" },
    time: { description: "Time:", placeholderText: "Enter time in seconds" },
}

function ConstantVelocity() {
    const [fields, setFields] = useState({
        distance: 0,
        time: 0,
    });
    const [velocity, setVelocity] = useState(0);

    const calculateVelocity = () =>{
        const vel = fields.distance / fields.time;
        setVelocity(vel);
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
                formulaName={"Constant Velocity"}
                numericFields={numericFields}
                onCalculate={calculateVelocity}
            />
            {velocity !== 0 && <p>Calculated Constant Velocity: {round(velocity)}</p>}
        </div>
    );
}

export default ConstantVelocity;