import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/conversions";

const fieldDescriptions = {
    distance: { description: "Distance:", placeholderText: "Enter distance in feet" },
    velocity: { description: "Velocity:", placeholderText: "Enter velocity in fps" },
}
function ConstantTimePage() {
    const [fields, setFields] = useState({
        distance: null,
        velocity: null,
    });

    const [time, setTime] = useState(null);

    const calculateTime = () =>{
        if (fields.distance === null || fields.velocity === null) {
            alert("Please fill out all fields.");
        }
        else {
            const c_time = fields.distance / fields.velocity;
            setTime(c_time);
        }
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
        <div>
            <Formula
                formulaName={"Constant Time"}
                numericFields={numericFields}
                onCalculate={calculateTime}
            />
            {time !== null && <p>Calculated Constant Time: {round(time)}</p>}
        </div>
    );
}

export default ConstantTimePage;