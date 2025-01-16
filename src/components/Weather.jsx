import { useEffect } from "react"

const Weather = ({lat, lon, city, getBack}) => {

  useEffect(() => {
    //const data = await fetch().then(res => res.json()).catch(err => console.log(err))
    console.log('a')
  }, [])


  return (
    <div id="weather">
      <button onClick={getBack}>Go Back</button>
      
      <div>{city}: {lat}, {lon}</div>
    </div>
  )
}

export default Weather