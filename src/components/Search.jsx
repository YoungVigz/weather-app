import { useState, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Search = ({ locationSelected }) => {
    const locationInput = useRef(null)
    const [location, setLocation] = useState("")

    const getLocation = async () => {
        if(location == "") {
            locationInput.current.classList.add('bad-location')
            return
        }

        const geoCoder = await fetch(`https://nominatim.openstreetmap.org/search?city=${location}&format=json`).then(res => res.json()).catch(err => console.log(err))
        
        if (geoCoder && geoCoder.length > 0) {
            const lat = geoCoder[0].lat
            const lon = geoCoder[0].lon
            const city = geoCoder[0].name

            locationSelected(lat, lon, city)

            return
        } 

        locationInput.current.classList.add('bad-location')
    }

    const searchValueChanged = (e) => {
        if(locationInput.current.classList.contains('bad-location')) 
            locationInput.current.classList.remove('bad-location')

        setLocation(e.target.value)
    }

    return (
        <div className="search-location">
            
            <p>Enter the location:</p> 
            
            <div className="search-box" ref={locationInput}>
                <input type="text" id="location" placeholder="Warsaw" onChange={searchValueChanged} />
                <div onClick={getLocation}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-button"/>
                </div>
            </div>
        </div>
    )
}

export default Search