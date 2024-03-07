import axios from "axios";
import {useEffect, useState} from 'react';
import { carContext } from '../App.jsx'
import { useContext } from 'react';

const FetchDataButton = () => {

  const {setCar} = useContext(carContext);

  const handleButtonClick = () => {
      axios.post("http://localhost:6001")
        .then(response => {
          setCar(response.data)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    return (
      <div className="container mt-1.5 center">
          <button
            className="nav-btn"
            onClick={() => handleButtonClick()}
          > {"Fetch Data"} </button>
      </div>
    );
};

export default FetchDataButton; // Export the ButtonGrid component
