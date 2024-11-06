import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the base structure', () => {
  render(<App />);

  expect(screen.getByTestId('AppHeader')).toMatchSnapshot();
  expect(screen.getByTestId('AppMain')).toBeInTheDocument();
});
