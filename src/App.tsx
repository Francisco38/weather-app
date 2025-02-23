import { useState } from "react";
import { getWeatherForecast, getCurrentWeather } from "./services/weatherService";
import { WeatherData, ResumedForecastData } from './api/weatherData';
import { MenuItem, Select, FormControl, InputLabel, TextField, Button, Alert } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import WeatherCard from './components/Weather card/WeatherCard';
import WeatherMap from './components/Weather map/WeatherMap';
import SearchBar from './components/Input/SearchBar';
import WeatherChart from './components/Weather chart/WeatherChart';
import ForecastCard from './components/Forecast/ForecastCard';
import UnitSelector from './components/Input/UnitSelector';
import { dateFromUTC } from './utils/DateFromUTC';
import { MainContainer, VerticalContainer } from "./components/styles";

function App() {
  const [city, setCity] = useState<String>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ResumedForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState(1);
  const [selectedDate, setSelectedDate] = useState(0);

  const fetchWeatherData = async () => {
    setError(null);
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    console.log(city)
    const currentWeather = await getCurrentWeather(city);
    const forecastData = await getWeatherForecast(city);

    if (!currentWeather || !forecastData) {
      setError("Failed to fetch weather data. Please try again.");
      return;
    }

    setWeather(currentWeather);
    setForecast(forecastData);
  };

  return (
    <MainContainer>
      <h1>Weather Info</h1>

      <VerticalContainer>
        <SearchBar onClick={fetchWeatherData}
          onChange={setCity}
          city={city} />
        <UnitSelector unit={unit} onChange={setUnit} />
      </VerticalContainer>

      {weather && <h1>{weather.name}, {weather.sys.country}</h1>}
      {error &&
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error" onClose={() => { setError(null) }}>
          {error}
        </Alert>
      }

      {forecast && (
        <ForecastCard data={forecast} unit={unit} onForecastClick={setSelectedDate} selectedDay={selectedDate}/>
      )}

      <VerticalContainer>
        {weather && forecast &&
          <WeatherCard weatherData={weather} unit={unit} forecastData={forecast} selectedDay={selectedDate} />}
        {weather &&
          <WeatherMap center={[weather.coord.lat, weather.coord.lon]} />
        }
      </VerticalContainer>

      {forecast &&
          <WeatherChart forecastData={forecast} selectedDay={selectedDate} unit={unit} />
        }
    </MainContainer>
  )
}

export default App