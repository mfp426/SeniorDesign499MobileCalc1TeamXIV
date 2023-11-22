import App from "../App.jsx";
import { render, screen } from "@testing-library/react";
import React from "react";

test("App displays the correct title", () => {
    render(<App />);

    // Use the screen utility to query for the h1 element
    const titleElement = screen.getByText("Calculator");

    // Now you can make your assertions
    expect(titleElement).toBeInTheDocument();
});
