import { useState } from "react";
import ToggleField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import { round } from "../../../../utils/Conversions.js";
import NumericField from "../../../../components/NumericField.jsx";
//import { getNumericFields } from "../../../../utils/FieldCreator.jsx";




const intfieldDescription = {
    force: { description: "Force to move the object:", placeholderText: "pounds" },
    distance: { description: "Distance the object displaced:", placeholderText: "feet" },
    angle: { description: "Angle between the force and the direction of displacement :", placeholderText: "degrees", isToggled: true }
};

const toggleFieldDescriptions= {
    withAngle: "Angle / No angle",
};

function WorkWithForceAndDist() {
    const [fields, setFields] = useState({
        force: null,
        withAngle: false,
        distance: null,
        angle: null,
    });

    const [work, setWork] = useState(null);

    // const handleValueChange = (fieldName, newValue) => {
    //     setFields({ ...fields, [fieldName]: newValue });
    // };

    // const handleValueChange = (fieldName, newValue) => {
    //     setFields((prevFields) => ({ ...prevFields, [fieldName]: newValue }));
    // };

    // on toggle, set the value of the field to the other field's value and recalculate the result
    // const handleToggle = (fieldName, newValue) => {

    //     setFields({ ...fields, [fieldName]: newValue });
    // };

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Kinetic Energy using Weight and Speed / Velocity"}
                toggleFields={Object.keys(toggleFieldDescriptions).map(
                    (fieldName) => (
                        <ToggleField
                            key={fieldName}
                            description={toggleFieldDescriptions[fieldName]}
                            onChange={(newValue) =>
                                setFields({ ...fields, [fieldName]: newValue })
                            }
                        />
                    ),
                )}
                numericFields={
                    Object.keys(intfieldDescription).map(fieldName => (
                        <NumericField
                            key={fieldName}
                            description={intfieldDescription[fieldName].description}
                            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
                            disabled={intfieldDescription[fieldName].isToggled ? fields.withAngle : false}

                        />
                    ))
                }
                onCalculate={() => {
                    !fields.withAngle 
                    ? setWork((fields.force*fields.distance* Math.cos(fields.angle)))
                    : setWork(fields.force * fields.distance);
        

                    // fields.isSpeed
                    //     ? setKE((fields.weight * ((fields.sORvInput)**2))/64.4)
                    //     : setKE((fields.weight * ((fields.sORvInput)**2))/30);
                }}
            />
            {work !== null && (
                <p>
                    Work: {round(work)} ft-lbs
                </p>
            )}
        </div>
    );
}

export default WorkWithForceAndDist;