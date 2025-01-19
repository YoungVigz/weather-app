import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCompass, faTemperatureArrowDown, faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';

import { getWeatherIcon } from '../utils';

const NextDay = ({ date, maxTemp, minTemp, windSpeed, windDirection, weatherCode }) => {
    return (
        <div className="next-day">
            <div className="main-small">
                <div className="icon-small">
                    <FontAwesomeIcon icon={getWeatherIcon(weatherCode)} />
                </div>
                <div className="date-time-small">
                    {date}
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faTemperatureArrowUp} />
                {maxTemp}°C
            </div>
            <div>
                <FontAwesomeIcon icon={faTemperatureArrowDown} />
                {minTemp}°C
            </div>
            <div>
                <FontAwesomeIcon icon={faWind} />
                {windSpeed} km/h
            </div>
            <div>
                <FontAwesomeIcon icon={faCompass} />
                {windDirection}°
            </div>
        </div>
    )
}

export default NextDay

