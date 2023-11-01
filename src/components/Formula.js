import React from "react";
import NumericField from "./NumericField";
import ToggleField from "./ToggleField";
import Header from "./Header";

function Formula({ formulaName = "Formula", numericFields = [], toggleFields = [], onCalculate }) {
    return (
        <div className={"container mb-5 center"}>
            <Header text={formulaName}/>
            <div className="flex flex-col items-center gap-4">
                {/* Render Toggle Fields */}
                {toggleFields.map((field, index) => (
                    <div key={index}>{field}</div>
                ))}

                {/* Render Numeric Fields */}
                {numericFields.map((field, index) => (
                    <div key={index}>{field}</div>
                ))}
                <button className="btn btn-primary mt-4" onClick={onCalculate}>Calculate</button>
            </div>
        </div>
    );
}
export default Formula;
