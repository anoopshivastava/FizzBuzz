import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FizzBuzz from './FizzBuzz';

describe('FizzBuzz Component', () => {
  test('renders correctly', () => {
    render(<FizzBuzz />);
    expect(screen.getByText('Coding Exercise - Accenture')).toBeInTheDocument();
    expect(screen.getByText('Show Table')).toBeInTheDocument();
  });

  test('handles empty and invalid inputs correctly', () => {
    render(<FizzBuzz />);
    fireEvent.click(screen.getByText('Show Table'));
    expect(screen.getAllByText('Invalid item').length).toBe(2); 
  });

  test('displays correct number of rows', () => {
    render(<FizzBuzz />);
    fireEvent.click(screen.getByText('Show Table'));
    const inputRows = screen.getAllByRole('row');
    expect(inputRows.length).toBe(8); 
  });

  test('displays results in correct order', () => {
    render(<FizzBuzz />);
    fireEvent.click(screen.getByText('Show Table'));
    const resultCells = screen.getAllByRole('cell');
    expect(resultCells[1]).toHaveTextContent('Divided 1 by 3 or Divided 1 by 5');
    expect(resultCells[3]).toHaveTextContent('Fizz');
    expect(resultCells[5]).toHaveTextContent('Buzz');
    expect(resultCells[7]).toHaveTextContent('Invalid item');
    expect(resultCells[9]).toHaveTextContent('FizzBuzz');
    expect(resultCells[11]).toHaveTextContent('Invalid item');
    expect(resultCells[13]).toHaveTextContent('Divided 23 by 3 or Divided 23 by 5');
  });
});