import React from 'react';

const IntElement = ({ description, value, onChange }) => {
    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        onChange(newValue);
    };

    return (
        <div className="mb-4 flex items-center">
            <label className="pr-4 text-gray-700 text-sm font-bold">
                {description}
            </label>
            <input
                type="number"
                className="border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-16"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default IntElement;
