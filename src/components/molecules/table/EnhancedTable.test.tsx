import { fireEvent, render, screen } from '@testing-library/react';
import EnhancedTable from './EnhancedTable';

describe('Enhanced Table', () => {
  const mockTableHeaders = [
    { id: 'id', name: 'ID' },
    { id: 'flightNumber', name: 'Flight Number' },
    { id: 'airline', name: 'Airline' },
    { id: 'origin', name: 'Origin' },
    { id: 'destination', name: 'Destination' },
    { id: 'departureTime', name: 'Departure Time' },
    { id: 'status', name: 'Status' },
  ];
  const testData = [
    {
      id: '1',
      airline: 'Test Airline',
      destination: 'Los Angeles',
      flightNumber: '12345',
      origin: 'New York',
      departureTime: new Date('2024-10-30T10:00:00Z').toISOString(),
      status: 'On Time',
    },
  ];

  const handleclick = jest.fn();

  test('renders table headers correctly', () => {
    render(
      <EnhancedTable
        headers={mockTableHeaders}
        rows={testData}
        handleClick={handleclick}
      />
    );

    // Verify each header is rendered
    mockTableHeaders.forEach((header) => {
      const headerElement = screen.getByText(header.name);
      expect(headerElement).toBeInTheDocument();
    });
  });

  test('render table rows correctly', () => {
    render(
      <EnhancedTable
        headers={mockTableHeaders}
        rows={testData}
        handleClick={handleclick}
      />
    );

    //verify that the rows are rendered
    testData.forEach((row) => {
      expect(screen.getByText(row.airline)).toBeInTheDocument();
      expect(screen.getByText(row.flightNumber)).toBeInTheDocument();
      expect(screen.getByText(row.origin)).toBeInTheDocument();
      expect(screen.getByText(row.destination)).toBeInTheDocument();
      expect(screen.getByText(row.departureTime)).toBeInTheDocument();
      expect(screen.getByText(row.status)).toBeInTheDocument();
    });
  });

  test('calls handleClick function with correct id on button click', () => {
    render(
      <EnhancedTable
        headers={mockTableHeaders}
        rows={testData}
        handleClick={handleclick}
      />
    );

    // Find the button for the first row and click it
    const buttonElement = screen.getAllByRole('button')[0];
    fireEvent.click(buttonElement);

    // Verify that the handleClick function was called with the correct id
    expect(handleclick).toHaveBeenCalledWith('1'); // id of the first row
    expect(handleclick).toHaveBeenCalledTimes(1);
  });
});
