import React from 'react';

// Define a functional component for a numeric input field
const NumericField = ({ description, onChange, disabled, placeholderText }) => {
    // Function to handle input change
    const handleInputChange = (e) => {
        if (!disabled) {
            const newValue = parseFloat(e.target.value);
            if (!isNaN(newValue)) {
                onChange(newValue);
            }
        }
    };

    return (
        <div className="w-100">
            <label className="form-label">
                {description} {/* Display the provided description */}
            </label>
            <input
                type="number"
                className={`form-control ${disabled ? 'bg-gray-200' : ''}`}
                onChange={handleInputChange}
                disabled={disabled}
                placeholder={placeholderText} // Display the provided placeholder text
            />
        </div>
    );
};

export default NumericField; // Export the NumericField component
