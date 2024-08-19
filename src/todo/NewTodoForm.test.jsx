import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke Test
test('renders NewTodoForm component without crashing', () => {
  render(<NewTodoForm addTodo={() => {}} />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic Tests
test('updates state when input changes', () => {
  render(<NewTodoForm addTodo={() => {}} />);
  
  const input = screen.getByLabelText('Todo:');
  fireEvent.change(input, { target: { value: 'New Task' } });
  
  expect(input.value).toBe('New Task');
});

test('calls addTodo with correct data and resets form on submit', () => {
  const mockAddTodo = vi.fn();
  render(<NewTodoForm addTodo={mockAddTodo} />);
  
  const input = screen.getByLabelText('Todo:');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText('Add Todo!'));
  
  expect(mockAddTodo).toHaveBeenCalledWith('New Task');
  expect(input.value).toBe('');
});
