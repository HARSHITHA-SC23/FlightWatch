import Card from '../../components/molecules/card/Card'
import { useFlightContext } from '../../store/flight-view/useFlightContext';

export default function FlightView() {
    const { flightView } = useFlightContext();
    console.log(flightView)
  return (
    <div>
        <Card data = {flightView}/>
    </div>
  )
}