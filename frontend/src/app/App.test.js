import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Base React Project/i);
  expect(title).toBeInTheDocument();
});
