// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import CalculatorPage from '../pages/CalculatorPage';

// test('renders CalculatorPage with buttons', () => {
//   // Render the CalculatorPage component
//   render(<CalculatorPage />);

//   // Query for elements based on your component's structure
//   const categoryHeader = screen.getByText('Categories'); // Adjust this based on your actual content

//   // You can also query for buttons by their text
//   const conversionButton = screen.getByText('Conversion');
//   const kineticEnergyButton = screen.getByText('Kinetic Energy Equivalent Speed Loss/Gain');
//   // Add more button queries for other buttons in your array

//   // Expect that the elements are in the document
//   expect(categoryHeader).toBeInTheDocument();
//   expect(conversionButton).toBeInTheDocument();
//   expect(kineticEnergyButton).toBeInTheDocument();
//   // Add more expect statements for other buttons

//   // You can also add assertions based on the number of buttons
//   const allButtons = screen.getAllByRole('button');
//   expect(allButtons).toHaveLength(6); // Adjust the count based on your actual data

//   // You can perform more assertions as needed for your specific content
// });
