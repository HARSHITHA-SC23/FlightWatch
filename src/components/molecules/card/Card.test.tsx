import { render, screen } from '@testing-library/react';
import MediaCard from './Card';

describe('Media card component', () => {
  it('renders error card when there is an error in the data', () => {
    const data = { error: 'Network error' };
    render(<MediaCard data={data} />);

    expect(screen.getByText('Network error')).toBeInTheDocument();
    expect(
      screen.getByText('The requested flight details are unavailable')
    ).toBeInTheDocument();
    expect(screen.getByTestId('WarningRoundedIcon')).toBeInTheDocument();
  });

  it('renders flight data card when there is no error', () => {
    const testData = {
      airline: 'Test Airline',
      destination: 'Los Angeles',
      flightNumber: '12345',
      origin: 'New York',
      departureTime: new Date('2024-10-30T10:00:00Z').toISOString(),
      status: 'On Time',
    };

    render(<MediaCard data={testData} />);

    // Check for the individual flight detail items
    expect(screen.getByText(/Test Airline/i)).toBeInTheDocument();
    expect(screen.getByText(/Los Angeles/i)).toBeInTheDocument();
    expect(screen.getByText(/Flight Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Origin/i)).toBeInTheDocument();
    expect(screen.getByText(/Departure Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });
});
