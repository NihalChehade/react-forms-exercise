import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// Smoke Test
test('renders BoxList component without crashing', () => {
  render(<BoxList />);
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Critical Business Logic Tests
test('adds a new box when addBox is called', () => {
  render(<BoxList />);
  
  // Initially, no boxes should be present
  expect(screen.queryAllByRole('button', { name: 'X' })).toHaveLength(0);
  
  // Add a new box
  fireEvent.click(screen.getByText('Add Box!'));

  // Now there should be one box
  expect(screen.queryAllByRole('button', { name: 'X' })).toHaveLength(1);
});

test('removes a box when removeBox is called', () => {
  render(<BoxList />);
  
  // Add a new box
  fireEvent.click(screen.getByText('Add Box!'));

  // Remove the box
  fireEvent.click(screen.getByText('X'));
  
  // No boxes should be present now
  expect(screen.queryAllByRole('button', { name: 'X' })).toHaveLength(0);
});
