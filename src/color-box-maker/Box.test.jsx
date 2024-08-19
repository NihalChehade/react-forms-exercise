import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Box from './Box';

// Smoke Test
test('renders Box component without crashing', () => {
  render(<Box id="1" color="red" width={100} height={100} removeBox={() => {}} />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<Box id="1" color="red" width={100} height={100} removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic Test
test('calls removeBox function with correct id when button is clicked', () => {
  const mockRemoveBox = vi.fn();
  render(<Box id="1" color="red" width={100} height={100} removeBox={mockRemoveBox} />);
  
  const button = screen.getByText('X');
  fireEvent.click(button);
  
  expect(mockRemoveBox).toHaveBeenCalledWith('1');
});
