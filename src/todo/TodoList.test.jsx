import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke Test
test('renders TodoList component without crashing', () => {
  render(<TodoList />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic Tests
test('adds a new todo when addTodo is called', () => {
  render(<TodoList />);
  
  // Initially, no todos should be present
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  
  // Add a new todo
  fireEvent.click(screen.getByText('Add Todo!'));

  // Now there should be one todo
  expect(screen.queryAllByRole('listitem')).toHaveLength(1);
});

test('removes a todo when removeTodo is called', () => {
  render(<TodoList />);
  
  // Add a new todo
  fireEvent.click(screen.getByText('Add Todo!'));

  // Remove the todo
  fireEvent.click(screen.getByText('X'));
  
  // No todos should be present now
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});
