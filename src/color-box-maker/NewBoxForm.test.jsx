import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// Smoke Test
test('renders NewBoxForm component without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic Tests
test('updates state when inputs change', () => {
  render(<NewBoxForm addBox={() => {}} />);
  
  const colorInput = screen.getByLabelText('Choose Background Color:');
  const widthInput = screen.getByLabelText('Choose Box width:');
  const heightInput = screen.getByLabelText('Choose Box Height:');
  
  fireEvent.change(colorInput, { target: { value: '#ff0000' } });
  fireEvent.change(widthInput, { target: { value: '200' } });
  fireEvent.change(heightInput, { target: { value: '200' } });
  
  expect(colorInput.value).toBe('#ff0000');
  expect(widthInput.value).toBe('200');
  expect(heightInput.value).toBe('200');
});

test('calls addBox with correct data and resets form on submit', () => {
  const mockAddBox = vi.fn();
  render(<NewBoxForm addBox={mockAddBox} />);
  
  const colorInput = screen.getByLabelText('Choose Background Color:');
  const widthInput = screen.getByLabelText('Choose Box width:');
  const heightInput = screen.getByLabelText('Choose Box Height:');
  
  fireEvent.change(colorInput, { target: { value: '#ff0000' } });
  fireEvent.change(widthInput, { target: { value: '200' } });
  fireEvent.change(heightInput, { target: { value: '200' } });
  
  fireEvent.click(screen.getByText('Add Box!'));
  
  expect(mockAddBox).toHaveBeenCalledWith({ color: '#ff0000', width: '200', height: '200' });
  expect(colorInput.value).toBe('#000000');
  expect(widthInput.value).toBe('');
  expect(heightInput.value).toBe('');
});
