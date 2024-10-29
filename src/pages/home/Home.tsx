import  { useEffect, useState } from 'react';
import Header from '../../components/molecules/header/Header';
import EnhancedTable from '../../components/molecules/table/EnhancedTable';
import { HEADER_LINKS, TABLE_HEADERS } from '../../components/utils';
import { useNavigate } from 'react-router-dom';
import { useFlightContext } from '../../store/flight-view/useFlightContext';

function Home() {
  const navigate = useNavigate();

  const [flightsData, setFlightsData] = useState<any>(null);
  const { setFlightView } = useFlightContext();
  const [error, setError] = useState<string | null>(null);

  const fetchFlightsData = async () => {
    try {
      const response = await fetch(
        'https://flight-status-mock.core.travelopia.cloud/flights'
      );
      const data = await response.json();
      setFlightsData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occured');
      }
    }
  };

  const handleFlightDetails = async (id: number) => {
    try {
      const response = await fetch(
        `https://flight-status-mock.core.travelopia.cloud/flights/${id}`
      );
      const data = await response.json();
      setFlightView(data);
      navigate('/flight-view');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occured');
      }
    }
  };

  useEffect(() => {
    fetchFlightsData();
    const interval = setInterval(fetchFlightsData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header title='Home Page' links={HEADER_LINKS} />
      <EnhancedTable
        headers={TABLE_HEADERS}
        rows={flightsData}
        handleClick={handleFlightDetails}
      />
    </div>
  );
}

export default Home;
