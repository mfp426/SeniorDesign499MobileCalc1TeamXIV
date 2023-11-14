import React from "react";

function Formula({ formulaName = "Formula", extraInfo = "" ,numericFields = [], toggleFields = [], onCalculate }) {

    // needed to prevent page refresh on form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onCalculate();
    };

    return (
        <div className={"container mb-5 center"}>
            <h2 className="text-xl page-header mt-3 mb-3">{formulaName}</h2>
                {/* stop the page from refreshing when the form is submitted */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        {/* Render Toggle Fields */}
                        {toggleFields.map((field, index) => (
                            <div key={index}>{field}</div>
                        ))}

                        {/* For use when constants or extra info need to be displayed */}
                        <div>{extraInfo}</div>

                        {/* Render Numeric Fields */}
                        {numericFields.map((field, index) => (
                            <div key={index}>{field}</div>
                        ))}

                        <button className="btn btn-primary mt-4">Calculate</button>
                    </div>
            </form>
        </div>
    );
}
export default Formula;
