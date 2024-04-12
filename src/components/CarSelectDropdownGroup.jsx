import FetchDataButton from "./FetchDataButton";
import CarSelectDropdownButton from "./CarSelectDropdownButton";
import {useEffect, useState} from 'react';

function CarSelectDropdownGroup() {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [trim, setTrim] = useState("");

    const [makeList, setMakeList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [yearList, setYearList] = useState([]);
    const [trimList, setTrimList] = useState([]);

    const [makeDisabled, setMakeDisabled] = useState(true);
    const [modelDisabled, setModelDisabled] = useState(true);
    const [yearDisabled, setYearDisabled] = useState(true);
    const [trimDisabled, setTrimDisabled] = useState(true);

    const [specifiers, setSpecifiers] = useState([])


    useEffect(() => {
        setSpecifiers([make])
        if (make)
            setModelDisabled(false)
        setYearDisabled(true)
        setTrimDisabled(true)
    }, [make]);

    useEffect(() => {
        setSpecifiers([make, model])
        if (model)
            setYearDisabled(false)
        setTrimDisabled(true)
    }, [model]);

    useEffect(() => {
        setSpecifiers([make, model, year])
        if (year)
            setTrimDisabled(false)
    }, [year]);

    useEffect(() => {
        setSpecifiers([make, model, year, trim])
    }, [trim]);

    return (
        <div className="btn-group" role="group" aria-label="Car">

        <FetchDataButton setMakeList={setMakeList}></FetchDataButton>

        <CarSelectDropdownButton isDisabled={false} type={"Make"} dropdownItems={makeList} set={setMake} setList={setModelList} specifiers={[]}></CarSelectDropdownButton>

        <CarSelectDropdownButton isDisabled={modelDisabled} type={"Model"} dropdownItems={modelList} set={setModel} setList={setYearList} specifiers={specifiers}></CarSelectDropdownButton>

        <CarSelectDropdownButton isDisabled={yearDisabled} type={"Year"} dropdownItems={yearList} set={setYear} setList={setTrimList} specifiers={specifiers}></CarSelectDropdownButton>

        <CarSelectDropdownButton isDisabled={trimDisabled} type={"Trim"} dropdownItems={trimList} set={setTrim} specifiers={specifiers}></CarSelectDropdownButton>
        </div>
    );
}

export default CarSelectDropdownGroup;
