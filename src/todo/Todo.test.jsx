import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

// Smoke Test
test('renders Todo component without crashing', () => {
  render(<Todo id="1" value="Test Task" removeTodo={() => {}} />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<Todo id="1" value="Test Task" removeTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic Test
test('calls removeTodo function with correct id when button is clicked', () => {
  const mockRemoveTodo = vi.fn();
  render(<Todo id="1" value="Test Task" removeTodo={mockRemoveTodo} />);
  
  const button = screen.getByText('X');
  fireEvent.click(button);
  
  expect(mockRemoveTodo).toHaveBeenCalledWith('1');
});
