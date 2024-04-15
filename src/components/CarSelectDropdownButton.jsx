import axios from 'axios';
import { carContext } from '../App.jsx'
import { useContext, useState, useEffect } from 'react';

function CarSelectDropdownButton({isDisabled, type, dropdownItems, set, setList, specifiers, selected, setSelected}) {

    const {car, setCar} = useContext(carContext);

    const handleButtonClick = (newSpecifiers) => {
        // Only send query if selected item is different from what is already there
        const lastSpecifier = newSpecifiers[newSpecifiers.length - 1];
        if (lastSpecifier !== selected) {
            if (type !== "Trim") {
                set(lastSpecifier)
            }

            setSelected(lastSpecifier)

            if (lastSpecifier === 'None') {
                newSpecifiers[newSpecifiers.length - 1] = '';
            }

            axios.get("http://localhost:6001/get", {
                params: {
                    type: type,
                    specifiers: newSpecifiers
                }
            })
                .then(response => {
                    if (type !== "Trim") {
                        setList(response.data)
                    }
                    else {
                        let newCar = {};
                        for (let [key, value] of Object.entries(response.data[0])) {
                            if (key !== '_id') {
                                if (key.match('model_')) {
                                    key = key.replace('model_', '');
                                }
                                if (key[0] === '0') {
                                    key = key.replace('0', 'zero');
                                }
                                if (value === 'N/A') {
                                    value = '';
                                }
                                newCar[key] = value
                            }
                        }
                        setCar(newCar)
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    const getList = () => {
        let arr = []

        // If there are no trims available, display that as the only item in the list
        if (type === "Trim" && dropdownItems.length === 1 && dropdownItems[0] === '') {
            arr.push(<li className="dropdown-item" key={0}><button type="button" className='btn btn-default btn-block w-100' onClick={() => {handleButtonClick(specifiers.concat('None'), true)}}>None</button></li>);
            return arr;
        }

        for (let i = 0; i < dropdownItems.length; i++) {
            let specifier = dropdownItems[i];

            let newSpecifiers = [];
            if (type === "Make") {
                newSpecifiers.push(specifier)
            }
            else if (type === "Model") {
                newSpecifiers.push(specifiers[0], specifier)
            }
            else if (type === "Year") {
                newSpecifiers.push(specifiers[0], specifiers[1], specifier)
            }
            else if (type === "Trim") {
                newSpecifiers.push(specifiers[0], specifiers[1], specifiers[2], specifier)
            }

            arr.push(<li className="dropdown-item" key={i}><button type="button" className='btn btn-default btn-block w-100' onClick={() => {handleButtonClick(newSpecifiers, false)}}>{specifier}</button></li>);
        }
        return arr;
    }

    return (
        <div className="dropdown" style={{}}>
            <button className="btn dropdown-toggle btn-light btn-block" id="make-dropdown" data-bs-toggle="dropdown" disabled={isDisabled}>{!isDisabled ? (selected ? selected : type) : type}</button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="car-dropdown" style={{right: '0', left:'auto', overflowY: 'scroll', maxHeight: '500px'}}>
                {getList()}
            </ul>
        </div>
    );
}

export default CarSelectDropdownButton;