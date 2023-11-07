import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, useNavigate } from 'react-router-dom';


const SearchBarCategory = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const searchKeywords = {
    
    //Categroy Keywords
    "Conversion Category": "/Conversions",
    "Kinetic Energy Equivalent Category": "/KinEnergyEqvSpeedLGPage",
    "Grade and Super Elevation Category": "/GradeAndSuperElevationPage",
    "EDR Category": "/EDR",
    "Constant Uni-Avg Equation Category": "/ConstUniAvgEquationPage",
    "Center of Mass Equation Category": "/CenterOfMassEquationPage",



    
    
    
 


  };

  // Autosuggest will call this function every time you need to update suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const matchingRoutes = Object.keys(searchKeywords).filter((route) =>
      route.toLowerCase().includes(inputValue)
    );
    setSuggestions(matchingRoutes);
  };

  // Autosuggest will call this function every time you need to clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When a suggestion is selected, navigate to the corresponding route from the searchKeywords
  const onSuggestionSelected = (event, { suggestionValue }) => {
    navigate(searchKeywords[suggestionValue]);
  };

  const inputProps = {
    className: 'form-control',
    placeholder: 'Search',
    value,
    onChange: (e, { newValue }) => {
      setValue(newValue);
    },
  };

  return (
    <div className="input-group"> {/* Use Bootstrap's input-group for styling */}
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => (
        <Link to={searchKeywords[suggestion]} className="suggestion">
          {suggestion}
        </Link>
      )}
      inputProps={inputProps}
    />
    <div className="input-group-append">
    
      </div>
    </div>
    
  );
};

export default SearchBarCategory;
