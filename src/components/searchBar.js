import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const searchKeywords = {
    "Constant Velocity Formula": "/ConstantVelocityPage",
  
  "Constant Time Formula": "/ConstantTimePage",
  "Conversion Category": "/ConversionPage",
  "Kinetic Energy Equivalent Category": "/KinEnergyEqvSpeedLGPage",
  "Velocity To Speed Converter Formula": "/VelocityToSpeedConverter",


  "Velocity to Speed Formula": "/VelocityToSpeedPage",
  "Kinetic Energy Equivalent Page": "/KinEnergyEqvSpeedLGPage",
  "Speed Sliding to Stop Page": "/SpeedSlidingToStopPage",
  "Velocity Sliding to Stop Page": "/VelocitySlidingtoStopPage",
  "Speed to Velocity Page": "/SpeedToVelocityPage",
  "Grade and Super Elevation Page": "/GradeAndSuperElevationPage",
  "Percent Grade Page": "/PercentGradePage",
  "Percent Superelevation Page": "/PercentSuperelevationPage",
  "EDR Page": "/EDRPage",
  "Speed at Impact Page": "/SpeedAtImpactPage",
  "Constant Distance Page": "/ConstantDistancePage",
  "Constant Uni-Avg Equation Page": "/ConstUniAvgEquationPage",
  "Constant Velocity Page": "/ConstantVelocityPage",
  "Constant Time Page": "/ConstantTimePage",
  "Slide to Stop Dist with Drag Page": "/SlidetoStopDistWithDragPage",
  "Speed at Impact Results Page": "/SpeedAtImpactResultsPage",
  "Center of Mass Equation Page": "/CenterOfMassEquationPage",
  "COM Lateral Left Page": "/COMLateralLeftPage",
  "COM Lateral Right Page": "/COMLateralRightPage",
  "COM Longitudinal Front Page": "/COMLongitudinalFrontPage",
  "COM Longitudinal Rear Page": "/COMLongitudinalRearPage",



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
    placeholder: 'Search',
    value,
    onChange: (e, { newValue }) => {
      setValue(newValue);
    },
  };

  return (
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
  );
};

export default SearchBar;
