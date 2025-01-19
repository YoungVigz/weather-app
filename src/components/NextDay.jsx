
const NextDay = ({ date, maxTemp, minTemp, windSpeed, windDirection, weatherCode }) => {
    return (
        <div className="next-day">
            <h3>{date}</h3>
            <p>Max Temp: {maxTemp}°C</p>
            <p>Min Temp: {minTemp}°C</p>
            <p>Wind: {windSpeed} km/h (Direction: {windDirection}°)</p>
            <p>Weather Code: {weatherCode}</p>
        </div>
    )
}

export default NextDay