import React, {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/conversions";

const fieldDescriptions = {
    rise: { description: "Rise:", placeholderText: "Enter rise in feet" },
    run: { description: "Run:", placeholderText: "Enter run in feet" },
}

function PercentGradePage() {
    const [fields, setFields] = useState({
        rise: null,
        run: null,
    });

    const [grade, setGrade] = useState(null);

    const gradePercent = () => {
        if (fields.rise === null || fields.run === null) {
            alert("Please fill out all fields.");
        }
        else {
            const calculatedGrade = fields.rise / fields.run;
            setGrade(calculatedGrade);
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

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Percent Grade"}
                numericFields={numericFields}
                onCalculate={gradePercent}
            />
            {grade !== null && (
                <p>Calculated Grade: {round(grade)}</p>
            )}
        </div>
    );
}

export default PercentGradePage;