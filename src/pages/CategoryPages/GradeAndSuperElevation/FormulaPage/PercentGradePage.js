import {useState} from 'react';

const PercentGrade=()=>{
    const [rise, setRise] = useState();
    const [run, setRun] = useState();
    const [grade, setGrade] = useState();
    const gradePercent = () => {
        const Grade = rise/run;
        setGrade(Grade);
    };

    return (
        <div>
        <h2>Percent Grade</h2>
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

        <button type="submit" className="btn btn-primary mt-4" onClick={gradePercent}>Calculate</button>

        <div>
            <h3>Calculated Grade:</h3>
            <p>{grade}%</p>
        </div>
    </div>

    );
};

export default PercentGrade;