import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme/build'
import App from './App';
import Dashboard from './views/dashboard/Dashboard.js'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});