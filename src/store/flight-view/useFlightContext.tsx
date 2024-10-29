import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface FlightContextType {
  flightView: any;
  setFlightView: React.Dispatch<React.SetStateAction<any>>;
}

const FlightContext = createContext<FlightContextType | undefined>(undefined);

const FlightProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [flightView, setFlightView] = useState<any>(() => {
    // Initialize state from localStorage if available
    const savedData = localStorage.getItem('flightView');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    // Store flightView in localStorage whenever it changes
    if (flightView) {
      localStorage.setItem('flightView', JSON.stringify(flightView));
    } else {
      console.log("Not available")
    }
  }, [flightView]);

  return (
    <FlightContext.Provider value={{ flightView, setFlightView }}>
      {children}
    </FlightContext.Provider>
  );
};

const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error('useFlightContext must be used within a FlightProvider');
  }
  return context;
};

export { FlightProvider, useFlightContext };
