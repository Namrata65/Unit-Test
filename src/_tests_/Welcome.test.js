import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from '../components/Welcome'; // Adjust the path if necessary

test('renders Welcome component', () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/Welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});
