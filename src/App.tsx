import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import FlightView from './pages/flight-view/FlightView';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/flight-view' Component={FlightView} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
