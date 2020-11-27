import React, { useState, useEffect} from 'react';
import { LoadingComponent } from './components/LoadingComponent';
import { ToursComponent } from './components/ToursComponent';
import './Main.css';
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours); 
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();
      console.log(tours)
      setLoading(false);
      setTours(tours);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
}

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) {
    return (
      <main>
        <LoadingComponent />
      </main>
    )
  }
  
  if(tours.length === 0) {
    return (
      <div className="mx-auto w-2/2 max-w-xl my-24">
                <h2 className="text-2xl md:text-4xl text-center tracking-wider font-bold text-gray-800">No Tours Left</h2>
                <div className="flex justify-center">
                    <div onClick={() => fetchTours()} className="bg-blue-400 my-10 py-1 px-6 text-white text-lg font-semibold rounded cursor-pointer">Refresh</div>
                </div>
            </div>
    )
  }

  return (
    <React.Fragment>
      <ToursComponent tours={tours} removeTour={removeTour} />
    </React.Fragment>
  );
}

export default App;
