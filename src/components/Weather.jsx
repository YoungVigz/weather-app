import { useEffect, useState } from "react"
import Today from "./Today"
import NextDay from "./NextDay"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Weather = ({ lat, lon, city, getBack }) => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [nextWeathers, setNextWeathers] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
        const todayData = await today.json()
        setCurrentWeather(todayData.current_weather)

        const nextWeathers = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant,weathercode&timezone=auto`
        )
        const nextWeathersData = await nextWeathers.json()
        setNextWeathers(nextWeathersData.daily)

      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [lat, lon])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!currentWeather || !nextWeathers) {
    return <div>Error loading weather data. Please try again.</div>
  }

  return (
    <div id="weather">
      <div className="head-line">
        <div className="back" onClick={getBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="city-name">
          {city}
        </div>
      </div>
      

      <Today data={currentWeather} />

   

    </div>
  )
}

export default Weather


/*
   {
        nextWeathers.time.map((day, key) => (
          <NextDay
            key={key}
            date={day}
            maxTemp={nextWeathers.temperature_2m_max[key]}
            minTemp={nextWeathers.temperature_2m_min[key]}
            windSpeed={nextWeathers.windspeed_10m_max[key]}
            windDirection={nextWeathers.winddirection_10m_dominant[key]}
            weatherCode={nextWeathers.weathercode[key]}
          ></NextDay>
        ))
      }


*/