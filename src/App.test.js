import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Import your main component

test('renders welcome message', () => {
  render(<App />); // Render your component

  // Use getByText to find an element with the text you expect
  const welcomeElement = screen.getByText(/Welcome to home/i);

  // Expect the element to be in the document
  expect(welcomeElement).toBeInTheDocument();
});
