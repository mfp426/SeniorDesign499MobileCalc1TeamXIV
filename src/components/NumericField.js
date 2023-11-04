import React from 'react';

const NumericField = ({ description, onChange, disabled, placeholderText}) => {
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
                {description}
            </label>
            <input
                type="number"
                className={`form-control ${disabled ? 'bg-gray-200' : ''}`}
                onChange={handleInputChange}
                disabled={disabled}
                placeholder={placeholderText}
            />
        </div>
    );
};
export default NumericField;

