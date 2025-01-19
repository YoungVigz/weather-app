import { useState } from 'react';
import Search from './components/Search'
import Weather from './components/Weather';

import './App.css'

function App() {

  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [cityName, setCityName] = useState(null)
  const [isSearchVisible, setIsSearchVisible] = useState(true)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }

  const locationSelected = (lat, lon, city) => {
    setLatitude(lat)
    setLongitude(lon)
    setCityName(city)

    toggleSearch()
  }

  return (
    <div className="container">
      <header>
        Weather App
      </header>

      <main>
        {isSearchVisible ? (
          <Search locationSelected={locationSelected} />
        ) : (
          <Weather lat={latitude} lon={longitude} city={cityName} getBack={toggleSearch}></Weather>  
        )}
      </main>
    </div>
  )
}

export default App
