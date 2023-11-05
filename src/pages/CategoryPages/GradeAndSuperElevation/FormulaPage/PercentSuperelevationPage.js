import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/conversions";

const fieldDescriptions = {
    rise: { description: "Rise:", placeholderText: "Enter rise in feet" },
    run: { description: "Run:", placeholderText: "Enter run in feet" },
}

function PercentSuperelevationPage() {

    const [fields, setFields] = useState({
        rise: 0,
        run: 0,
    });

    const [superelevation, setSuperelevation] = useState(0);
    const superelevationPercent = () => {
        const Superelevation = fields.rise/fields.run;
        setSuperelevation(Superelevation);
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
        <div>
            <Formula
                formulaName={"Percent of Superelevation"}
                numericFields={numericFields}
                onCalculate={superelevationPercent}
            />
            {superelevation !== 0 && <p>Calculated percent of superelevation: {round(superelevation)}</p>}
        </div>
    );
}

export default PercentSuperelevationPage;