import FetchDataButton from "./FetchDataButton";
import CarSelectDropdownButton from "./CarSelectDropdownButton";
import {useEffect, useState} from 'react';

const fordCars = ["Pinto", "Escape"];
const chevyCars = ["Malibu", "Cruze"];
const pintoYears = ["1971", "1976"];
const escapeYears = ["2013", "2014", "2015", "2016", "2017"];
const malibuYears = ["2000", "2004"];
const cruzeYears = ["100 BC", "2024"];

function CarSelectDropdownGroup() {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [trim, setTrim] = useState("");

    const [makeList, setMakeList] = useState(["Ford", "Chevy"]);
    const [modelList, setModelList] = useState([]);
    const [yearList, setYearList] = useState([]);
    const [trimList, setTrimList] = useState([]);

    const [makeDisabled, setMakeDisabled] = useState(false);
    const [modelDisabled, setModelDisabled] = useState(true);
    const [yearDisabled, setYearDisabled] = useState(true);
    const [trimDisabled, setTrimDisabled] = useState(true);


    useEffect(() => {
        console.log(make)
        if (make === "Ford") {
            setModelList(fordCars);
        }
        else if (make === "Chevy") {
            setModelList(chevyCars);
        }
        if (make)
            setModelDisabled(false)
    }, [make]);

    useEffect(() => {
        if (model === "Pinto") {
            setYearList(pintoYears);
        }
        else if (model === "Escape") {
            setYearList(escapeYears);
        }
        else if (model === "Malibu") {
            setYearList(malibuYears);
        }
        else if (model === "Cruze") {
            setYearList(cruzeYears);
        }
        if (model)
            setYearDisabled(false)
    }, [model]);

    useEffect(() => {
        if (year)
            setTrimDisabled(false)
    }, [year]);

    useEffect(() => {
    }, [trim]);

    return (
        <div className="btn-group" role="group" aria-label="Car">

        <CarSelectDropdownButton isDisabled={false} type={make ? make : "Make"} dropdownItems={makeList} set={setMake}></CarSelectDropdownButton>

        <CarSelectDropdownButton isDisabled={modelDisabled} type={model ? model : "Model"} dropdownItems={modelList} set={setModel}></CarSelectDropdownButton>

        <CarSelectDropdownButton isDisabled={yearDisabled} type={year ? year : "Year"} dropdownItems={yearList} set={setYear}></CarSelectDropdownButton>

        <CarSelectDropdownButton isDisabled={trimDisabled} type={trim ? trim : "Trim"} dropdownItems={trimList} set={setTrim}></CarSelectDropdownButton>
        </div>
    );
}

export default CarSelectDropdownGroup;
