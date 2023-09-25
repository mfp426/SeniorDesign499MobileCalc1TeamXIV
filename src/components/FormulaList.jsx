import React from "react";
import {useNavigate} from "react-router-dom";

const FormulaList = ({ categoryName, buttons }) => {

    const navigate = useNavigate();

    return (
        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <h2 className="display-4 page-header mt-3 mb-3 d-flex ">{categoryName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => navigate(button.route)}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormulaList;
