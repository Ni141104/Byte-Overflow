import logo from './logo.svg';
import './App.css';
import TourSection1 from './components/TourSection1';
import { useState } from 'react';
import TajMahal from './TajMahal.png';
import HawaMahal from './Hawamahal.png';
import Kedarnath from './Kedarnath.png';
import Mumbai from './Mumbai.png';
import Ahmedabad from './Ahmedabad.png';
import Pune from './Pune.png';
import Banglore from './Banglore.png';
function App() {
  const data = [
    {
      id: 1,
      name: "Tata",
      volume: "10 Kg",
      type: "Dry Waste",
      price: "2,500",
      image: TajMahal
    },
    {
      id: 2,
      name: "Reliance",
      volume: "15 Kg",
      type: "Wet Waste",
      price: "3,000",
      image: HawaMahal
    },
    {
      id: 3,
      name: "Mercedes",
      volume: "25 Kg",
      type: "E-Waste",
      price: "6,000",
      image: Ahmedabad
    },
    {
      id: 4,
      name: "Audi",
      volume: "12 Kg",
      type: "Dry Waste",
      price: "4,000",
      image: Kedarnath
    },
    {
      id: 5,
      name: "Tata",
      volume: "17",
      type: "Wet Waste",
      price: "7,000",
      image: Pune
    },
    {
      id: 6,
      name: "Tata",
      volume: "21",
      type: "E-Waste",
      price: "8,000",
      image: Mumbai
    },
    {
      id: 7,
      name: "Tata",
      volume: "21",
      type: "E-Waste",
      price: "8,000",
      image: Banglore
    }
  ];
  const [tours, setData] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tours => tours.id !== id);
    setData(newTour);
  }
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <div>
          <button onClick={() => setData(data)}>
            Refresh to get all tours
          </button>
        </div>
      </div>
    )
  }
  return (

    < div className='wrapper' >
      <div className='heading'>
        <h1 >Tour Guide </h1>
      </div>
      <TourSection1 tour={tours} removeTour={removeTour}></TourSection1>
      <div className="App">
      </div>
    </div >
  );
}

export default App;
