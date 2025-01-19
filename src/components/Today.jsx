import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';


const Today = ({data}) => {
    return (
        <div className="today">
            <div className="main-sec">
                <div className="icon">
                    <FontAwesomeIcon icon={faCloud} />
                </div>
                <div className="temp-div">
                    {data.temperature} °C
                </div>
            </div>

            <div className="details">
                {data.time} 
                {data.windspeed} 
                {data.winddirection}
            </div>
            
        
        </div>
    )
}

export default Today