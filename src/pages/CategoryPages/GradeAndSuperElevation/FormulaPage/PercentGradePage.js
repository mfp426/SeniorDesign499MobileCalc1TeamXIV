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
        rise: 0,
        run: 0,
    });

    const [grade, setGrade] = useState(0);
    const gradePercent = () => {
        const calculatedGrade = fields.rise/fields.run;
        setGrade(calculatedGrade);
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
            {grade !== 0 && (
                <p>Calculated Grade: {round(grade)}</p>
            )}
        </div>
    );
}

export default PercentGradePage;