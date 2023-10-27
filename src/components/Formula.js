// TODO: create formula component with properties for fields and routing

const Formula = (formulaName, numericFields, toggleFields ) => {
    return (
        <div className={"container mb-5 center"}>
            <h2 className="text-4xl page-header mt-3 mb-3">{formulaName}</h2>
            <div className="flex flex-col items-center gap-4">
                {/* iterate through all the numeric and toggle fields via maps*/}
            </div>
        </div>
    );
}

export default Formula;