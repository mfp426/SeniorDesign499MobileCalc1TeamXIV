import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

// Define a functional component for a grid of buttons
const ButtonGrid = ({ categoryName, buttons }) => {
    const navigate = useNavigate();

    return (
        <div className="container mb-5 center">
            <div className="box justify-content-center">
                <Header text={categoryName}/> {/* Render a Header component with the category name */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className="btn btn-primary mt-4 text-truncate"
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

export default ButtonGrid; // Export the ButtonGrid component
