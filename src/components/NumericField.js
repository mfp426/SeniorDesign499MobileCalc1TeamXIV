import React from 'react';

// TODO: add input validation
const NumericField = ({ description, value, onChange, disabled }) => {
    const handleInputChange = (e) => {
        if (!disabled) {
            const newValue = parseFloat(e.target.value);
            if (!isNaN(newValue)) {
                onChange(newValue);
            }
        }
    };

    return (
        <div className="grid grid-cols-2">
            <label className="pr-4 text-gray-700 text-sm font-bold">
                {description}
            </label>
            <input
                type="number"
                className={`border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-16 ${disabled ? 'bg-gray-200' : ''}`}
                value={value}
                onChange={handleInputChange}
                disabled={disabled}
            />
        </div>
    );
};

export default NumericField;

