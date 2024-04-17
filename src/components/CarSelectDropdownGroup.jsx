import axios from 'axios';
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

    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedTrim, setSelectedTrim] = useState('');

    const [specifiers, setSpecifiers] = useState([])

    let firstRender = true;

    //Get all makes from DB on first render
    useEffect(() => {
        if (firstRender) {
            axios.get("http://localhost:6001/get", {
                params: {
                    type: '',
                    specifiers: []
                }
            })
            .then(response => {
                setMakeList(response.data)
                setMakeDisabled(false)
            })
            .catch(error => {
                console.error('Error:', error);
            });
            firstRender = false;
        }
    }, []);
    
    useEffect(() => {
        setSpecifiers([make])

        setSelectedMake(make)
        setSelectedModel('')
        setModel('')
        
        if (make)
            setModelDisabled(false)
        setYearDisabled(true)
    }, [make]);

    useEffect(() => {
        setSpecifiers([make, model])
        
        setSelectedModel(model)
        setSelectedYear('')
        setYear('')

        if (model)
            setYearDisabled(false)
        setTrimDisabled(true)
    }, [model]);

    useEffect(() => {
        setSpecifiers([make, model, year])

        setSelectedYear(year)
        setSelectedTrim('')
        setTrim('')
        
        if (year)
            setTrimDisabled(false)
    }, [year]);

    useEffect(() => {
        setSpecifiers([make, model, year, trim])

        setSelectedTrim(trim)
    }, [trim]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <CarSelectDropdownButton isDisabled={makeDisabled} type={"Make"} dropdownItems={makeList} set={setMake} setList={setModelList} specifiers={[]} selected={selectedMake} setSelected={setSelectedMake}></CarSelectDropdownButton>
                </div>
                <div className="col">
                    <CarSelectDropdownButton isDisabled={modelDisabled} type={"Model"} dropdownItems={modelList} set={setModel} setList={setYearList} specifiers={specifiers} selected={selectedModel} setSelected={setSelectedModel}></CarSelectDropdownButton>
                </div>
                <div className="col">
                    <CarSelectDropdownButton isDisabled={yearDisabled} type={"Year"} dropdownItems={yearList} set={setYear} setList={setTrimList} specifiers={specifiers} selected={selectedYear} setSelected={setSelectedYear}></CarSelectDropdownButton>
                </div>
                <div className="col">
                    <CarSelectDropdownButton isDisabled={trimDisabled} type={"Trim"} dropdownItems={trimList} set={setTrim} specifiers={specifiers} selected={selectedTrim} setSelected={setSelectedTrim}></CarSelectDropdownButton>
                </div>
            </div>
        </div>
    );
}

export default CarSelectDropdownGroup;
