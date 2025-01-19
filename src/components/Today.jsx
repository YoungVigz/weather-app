import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCompass, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { getWeatherIcon } from '../utils';


const Today = ({data}) => {

    const getDate = () => {
        const date = data.time.split("T")
        return date[0] + " " + date[1]
    }

    return (
        <div className="today">
            <div className="main-sec">
                <div className="icon">
                    <FontAwesomeIcon icon={getWeatherIcon(data.weathercode)} />
                </div>
                <div className="temp-div">
                    <FontAwesomeIcon icon={faTemperatureHalf} />
                    {data.temperature}°C
                </div>
                <div className="date-time">
                    {getDate()}
                </div>
            </div>
             
            <div className="details">
                <div>
                    <FontAwesomeIcon icon={faWind} />
                    {data.windspeed} km/h
                </div>

                <div>
                    <FontAwesomeIcon icon={faCompass} />
                    {data.winddirection}°
                </div>
            </div>
            
        
        </div>
    )
}

export default Today