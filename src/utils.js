import {
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faCloudRain,
  faSnowflake,
  faBolt,
  faCloudShowersHeavy,
  faCloudSunRain,
  faIcicles
} from "@fortawesome/free-solid-svg-icons"

export const getWeatherIcon = (weatherCode) => {
  const weatherIcons = {
    0: faSun,
    1: faSun,
    2: faCloudSun,
    3: faCloud,
    45: faSmog,
    48: faSmog,
    51: faCloudSunRain,
    53: faCloudSunRain,
    55: faCloudSunRain,
    61: faCloudRain,
    63: faCloudRain,
    65: faCloudRain,
    71: faSnowflake,
    73: faSnowflake,
    75: faSnowflake,
    77: faIcicles,
    80: faCloudShowersHeavy,
    81: faCloudShowersHeavy,
    82: faCloudShowersHeavy,
    85: faIcicles,
    86: faIcicles,
    95: faBolt,
    96: faBolt,
    99: faBolt
  }

  return weatherIcons[weatherCode] || faCloud
}

