import {useState} from 'react';

const PercentSuperelevation=()=>{
    const [rise, setRise] = useState();
    const [run, setRun] = useState();
    const [superelevation, setSuperelevation] = useState();
    const superelevationPercent = () => {
        const Superelevation = rise/run;
        setSuperelevation(Superelevation);
    };

    return (
        <div>
        <h2>Percent of Superelevation</h2>
        <div className="mb-1 mt-1">
            <label for="riseInput" className="form-label"><h2>Rise:</h2></label>
            <input type="number" className="form-control" id="riseInput" placeholder="Enter rise in feet"
                   value={rise} onChange={(e) => setRise(parseFloat(e.target.value))} required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback fs-9">Please fill out this field.</div>
        </div>

        <div className="mb-1 mt-1">
            <label for="runInput" className="form-label"><h2>Run:</h2></label>
            <input type="number" className="form-control" id="runInput" placeholder="Enter run in feet"
                   value={run} onChange={(e) => setRun(parseFloat(e.target.value))} required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback fs-9">Please fill out this field.</div>
        </div>

        <div>

        </div>

        <button type="submit" className="btn btn-primary mt-4" onClick={superelevationPercent}>Calculate</button>

        <div>
            <h3>Calculated percent of superelevation:</h3>
            <p>{superelevation}%</p>
        </div>
    </div>

    );
};

export default PercentSuperelevation;